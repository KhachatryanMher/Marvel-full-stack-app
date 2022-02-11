//anavart

const bcrypt = require('bcrypt');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('passport-local');

let usersData = [];//poxel db ov

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal.Strategy({
    usernameField: 'email' 
}, async (email, password, done) => {
    let user = usersData.find((users) => users.email === email);
    if (!user) {
        return done(null, null, { message: 'Incorrect email' });
    }
    if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
    }
    done(null, null, { message: '{Incorrect password' });
}));
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    done(null, usersData.find((user) => user.id === id));
})
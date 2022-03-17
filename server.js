const express = require('express');
const mongoose = require('mongoose');
const commRoutes = require('./routes/comm-routes.js');
const chalk = require('chalk');
const commApiRoutes = require('./routes/api-comm-routes.js');

const app = express();
const port = process.env.PORT || 8000;
app.use(express.static('CSS'));
app.use(express.static('img'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
   .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
   .then((res) => console.log(chalk.cyan("...Connected to DB")))
   .catch((err) => console.log(err));

app.get('/', (req, res) => {
   res.render('index.ejs');
});

app.get('/products', (req, res) => {
   res.render('products.ejs');
});

app.get('/trailers', (req, res) => {
   res.render('trailers.ejs');
});

app.get('/sign-in', (req, res) => {
   res.render('sign-in.ejs');
});

app.use(commRoutes);
app.use(commApiRoutes);

app.get('/WandaVision', (req, res) => {
   res.render('Wsingle.ejs');
});

app.get('/WinterSoldier', (req, res) => {
   res.render('Fsingle.ejs');
});

app.get('/Hawkeye', (req, res) => {
   res.render('Hsingle.ejs');
});

app.get('/Loki', (req, res) => {
   res.render('Lsingle.ejs');
});

app.get('*', (req, res) => {
   res.render('404.ejs');
});

app.listen(port, () => {
   console.log(chalk.cyan(`Server is run, PORT: ${port}`));
})
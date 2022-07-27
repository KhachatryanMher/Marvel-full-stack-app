# Marvel-full-stack-app
Full-stack Beta web page in node.js

## How to open this app?
npm install | Installing all dependences and packages,
npm run dev | Starts nodejs application

## For what do I can't work with database
Because you should add your own mongoDB database URL in the .env file

## API documentation
`/api/comments` Method = Get | show all comments (it doesn't using tokens)
`/api/comment`  Method = Post | add new comment 
   JSON structure
   {
      text": "Test text",
      "name": "Test name", 
      "email": "text@example.net", 
      "theme": "string"
   } 
`/api/comment/:id` Method = Delete | remove that comment
`/api/comment/:id` Method = Get | show one comment
`/api/comment/:id` Method = Put | Update that comment
   JSON structure
   {
      text": "Test-text",
      "name": "Test-name", 
      "email": "text@examples.net", 
      "theme": "string123"
   }

## availability
the beta version of this site is availabled in heroku
http://marvel-web-app-node.herokuapp.com

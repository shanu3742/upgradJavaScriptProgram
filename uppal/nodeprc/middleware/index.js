const express = require('express');

const App = express();

App.use(firstMiddleWare);
App.use(secondMiddleware);

function firstMiddleWare(req, res, next) {
  console.log('hello');
  next();
}

function secondMiddleware(req, res, next) {
  return res.send('work in progress');
}

App.listen(3200, () => {
  console.log(`listen to the port number${3000}`);
});

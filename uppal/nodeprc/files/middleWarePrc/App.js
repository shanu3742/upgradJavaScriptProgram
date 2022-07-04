// middleWare
const express = require('express');

const app = express();
app.use(catchReaquestTime);
app.use(workInProgress);

app.use('/students', callStudent);
app.use('/students', studentsMiddleWare);
function callStudent(req, res, next) {
  console.log('start working on student');
  next();
}

function studentsMiddleWare(req, res, next) {
  res.send({
    message: 'working at syudent router',
  });
  console.log({
    message: 'end point',
  });
}

function workInProgress(req, res, next) {
  //   return res.status(200).send({
  //     message: 'hey work in progress',
  //   });
  console.log({
    massage: 'work in progress at application level',
  });
  next();
}

// const date = new Date.now();
function catchReaquestTime(req, res, next) {
  console.log(`request created at ${Date.now()}`);
  next();
}

app.listen(6001, () => {
  console.log('server start');
});

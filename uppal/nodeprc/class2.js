const express = require('express');
let PORT = 3000;

//  check the type of express

console.log(typeof express);

const APP = express();

//check the type of App
APP.use(express.json());

console.log(typeof APP);
const BASEURL = '/eductionApp/api/v1/students';
let student = {
  1: {
    shanu: {
      name: 'shanu',
      age: 21,
      DOB: '13/02/199',
    },
    karteek: {
      name: 'karteek',
      age: 21,
      DOB: '13/02/199',
    },
  },
  2: {
    aarya: {
      name: 'aarya',
      age: 21,
      DOB: '13/02/199',
    },
  },
};

/**
 * App.get is use to get request
 * step2 to get all student when app.get call
 * @prams {BASEURL} URI to get call get request
 * @key {req.query} to get all optional parameter
 * http://localhost:3000/eductionApp/api/v1/student?class=1 in this will get {class:'1'}
 * ?class=1 optional parameter
 */
APP.get(BASEURL, (req, res) => {
  console.log(req.query.class);
  if (req?.query?.class) {
    let filterItem = req.query.class;
    res.status(200).send(student[filterItem]);
  }
  res.status(200).send(student);
});

/**
 * post request
 * if we want to pass prams will use :claassId
 *
 */
APP.post('/eductionApp/api/v1/class/:claassId/students', (req, res) => {
  let apiPrams = req.params.claassId;
  student[apiPrams][req.body.name] = req.body;
  // 201 status is use to create new data
  res.status(201).send(student);
});
/**
 * step1 create server
 * @prams {Port} port number where server run
 */
APP.listen(PORT, () => {
  console.log(`server run at port number ${PORT}`);
});

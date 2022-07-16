const express = require('express');

const App = express();
App.use(express.json());
//127.0.01:3000/studentApp/api/v1/students
let students = {
  1: {
    shanu: {
      name: 'shanu',
      age: 23,
      class: 1,
      rank: 23,
    },
    chary: {
      name: 'chary',
      age: 23,
      class: 1,
      rank: 1,
    },
  },
  2: {
    madhuri: {
      name: 'madhuri',
      age: 30,
      class: 2,
      rank: 1,
    },
  },
};

App.get('/studentApp/api/v1/students', (req, res) => {
  if (req?.query?.class) {
    res.status(200).send(students[req?.query?.class]);
  } else {
    res.status(200).send(students);
  }
});

// /students/api/v1/class/:classid/students
App.post('/students/api/v1/class/:classid/students', (req, res) => {
  console.log(req.body.name);
  students[req?.params?.classid][req?.body?.name] = req.body;
  res.status(201).send(students);
});

App.listen(3000, () => {
  console.log('server');
});

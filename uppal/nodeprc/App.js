const express = require('express');

const app = express();

app.use(countRequest);

let count = 0;
function countRequest(req, res, next) {
  count = count + 1;
  console.log(count);
}

app.listen(3001, () => {
  console.log('server');
});

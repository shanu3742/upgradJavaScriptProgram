const express = require('express');
const app = express();
const routes = require('./routes/idea.routes');

app.use(express.json());
// convert json object into js object
routes.getROUTES(app);

app.listen(2001, () => {
  console.log('server start');
});

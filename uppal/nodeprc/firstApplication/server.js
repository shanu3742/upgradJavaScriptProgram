const express = require('express');
const app = express();
app.use(express.json());
require('./routes/idea.routes')(app);
app.listen(8080, () => {
  console.log('start server');
});

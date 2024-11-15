const express = require('express');
const path = require('path');
const app = express();
const port = 4000;


const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 
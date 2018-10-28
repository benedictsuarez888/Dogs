const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const indexRouter = require('./server/routes/indexRouter');
const port = 3300;

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use((req, res, next) => {
    req.viewModel = {
        title: 'Dogs'
    };
    next();
});

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);

app.listen(port, (err) => {
    if(err) {
        return console.error(err);
    }
    console.log(`Dog Application is listening to ${port}...`);
});
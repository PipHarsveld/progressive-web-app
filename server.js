import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import {router} from './router/router.js';

const app = express();
const port = 5000;
const __dirname = path.resolve();


// Link the templating engine to the express app
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use('/', router);
app.use(express.static(__dirname + '/static')); //Css, images en javascript
app.use('/', express.static(__dirname + '/'));

app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials'
}));


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

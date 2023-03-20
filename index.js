import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';


const app = express();
const port = 5000;
const __dirname = path.resolve();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/static'));

app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials'
    }));

app.get('/', (req, res) => {
    res.render('main', {layout : 'index'});
    });
    

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
}); 



// Import modules
import router from './router.js';

async function loadPage() {
  router();
}

loadPage();

import path from 'path';
import express from 'express';

const app = express();
const port = 5000;
const __dirname = path.resolve();


app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
}); 
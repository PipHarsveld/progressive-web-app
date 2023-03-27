import express from 'express';
import request from 'request';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get('/', (req, res) => {
    res.render('main', { layout: 'index' });
})

router.get('/overview', (req, res) => {
    request(`https://www.rijksmuseum.nl/api/nl/collection/?key=${process.env.API_KEY}&ps=8`, {json: true}, function (err, response, data){
        if (err) {
            res.send(err);
            console.error('error:', error);
        } else {
            // console.log('API response:', data.artObjects[0]);
            const artPieces = data.artObjects;
            res.render('overview', {layout : 'index', data: artPieces});
        }
    })
});

router.get('/details/:id', (req, res) => {
    console.log("test params", req.params.id);
    const idWithPrefix = req.params.id;
    const id = idWithPrefix.replace('nl-', '');

    request(`https://www.rijksmuseum.nl/api/nl/collection/${id}?key=${process.env.API_KEY}`, {json: true}, function (err, response, data){
        if (err) {
            res.send(err);
            console.error('error:', error);
        } else {
            const details = data.artObject;
            console.log(details.title);
            res.render('details', { layout: 'index', data: details});
        }
    })

});


router.get('/categorie/:type', (req, res) => {
    const typeArt = req.params['type'];
    console.log(typeArt);

    request(`https://www.rijksmuseum.nl/api/nl/collection/?key=${process.env.API_KEY}&type=${typeArt}`, {json: true}, function (err, response, data){
        if (err) {
            res.send(err);
            console.error('error:', error);
        } else {
            console.log('API response:', data.artObjects[0]);
            const specificArtPieces = data.artObjects;
            res.render('category', {layout : 'index', data: specificArtPieces, categorie: typeArt});
        }
    })
});


router.get('/zoeken', (req, res) => {
    res.render('search', { layout: 'index' });
});

export {router};
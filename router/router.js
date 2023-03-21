import express from 'express';
import request from 'request';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('main', { layout: 'index' });
})

router.get('/overview', (req, res) => {
    request(`https://www.rijksmuseum.nl/api/nl/collection/?key=RYeqgpSb&ps=6`, {json: true}, function (err, response, data){
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

router.get('/details', (req, res) => {
    res.render('details', { layout: 'index' });
});


router.get('/categorie/:type', (req, res) => {
    const typeArt = req.params['type'];
    console.log(typeArt);

    request(`https://www.rijksmuseum.nl/api/nl/collection/?key=RYeqgpSb&type=${typeArt}`, {json: true}, function (err, response, data){
        if (err) {
            res.send(err);
            console.error('error:', error);
        } else {
            console.log('API response:', data.artObjects[0]);
            const specificArtPieces = data.artObjects;
            res.render('paintings', {layout : 'index', data: specificArtPieces});
        }
    })
});



router.get('/schilderijen', (req, res) => {
    
});

router.get('/sculpturen', (req, res) => {
    
});


router.get('/zoeken', (req, res) => {
    res.render('search', { layout: 'index' });
});

export {router};
import express from 'express';
import request from 'request';

const router = express.Router();

router.get('/', (req, res) => {
    request(`https://www.rijksmuseum.nl/api/nl/collection/?key=RYeqgpSb&ps=10`, {json: true}, function (err, response, data){
		if (err) {
			res.send(err);
            console.error('error:', error);
		} else {
            console.log('API response:', data.artObjects[0]); 
            const artPieces = data.artObjects;
			res.render('main', {layout : 'index', data: artPieces});
		}
    })
})

router.get('/overview', (req, res) => {
    res.render('overview', { layout: 'index' });
});

router.get('/detail', (req, res) => {
    res.render('detail', { layout: 'index' });
});

router.get('/schilderijen', (req, res) => {
    res.render('paintings', { layout: 'index' });
});

router.get('/sculpturen', (req, res) => {
    res.render('sculptures', { layout: 'index' });
});

router.get('/zoeken', (req, res) => {
    res.render('search', { layout: 'index' });
});

export {router};
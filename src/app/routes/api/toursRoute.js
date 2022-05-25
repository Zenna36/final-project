const express =  require('express')
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/', (req, res) => {
    const url = '../data.js';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/tours', {
                title: 'Life Tours',
                name: 'Life Tours',
                data    
            });
        })
        .catch(error => {
            console.log('Error', error);
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const url = `../data.js ${id}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if(Object.keys(data).length >= 1) {
                res.render('pages/singleTours', {
                    title: data.tourName,
                    name: data.tourName,
                    data
                });
            } else {
                res.render('pages/error', {
                    title: 404,
                    name: 404,
                });
            }
        })
        .catch(error => {
            console.log('Error:', error);
        })
})

module.exports = router;
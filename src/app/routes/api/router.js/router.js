const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

router.use(express.static('public'))

router.get('/', (req, res) => {
    res.render('pages/', {
        title: 'Life Tours Home',
        name: 'Life Tours Home',
        data
    })
})

router.get('/', (req, res) => {
    res.json('pages/home', {
        'All Tours': `http://localhost:${PORT}/api/alltours`,
    })
})

module.exports = router
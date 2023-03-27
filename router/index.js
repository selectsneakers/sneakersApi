const Router = require('express').Router
const router = new Router()
const dataController = require('../controllers/data-controller')

router.get('/news', dataController.getNews)
router.get('/gifs', dataController.getGifs)
router.get('/products', dataController.getProducts)
router.get('/reviews', dataController.getReviews)
router.get('/filter-items', dataController.getFilterItems)

module.exports = router
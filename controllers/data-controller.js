const gifs = require('../models/gifs/gifs')
const news = require('../models/news/news')
const products = require('../models/products/products')
const reviews = require('../models/reviews/Reviews')


class DataController {
    getNews (req, res) {
        res.send(news)
    }
    
    getGifs (req, res) {
        res.send(gifs)
    }

    getProducts (req, res) {
        const {trands, search, id, similarTo, offset, limit} = req.query
        const initOffset = offset || 0
        const initLimit = limit || 15
        let customized = [...products]

        if(trands) {
            customized = [
                customized[0], 
                customized[5], 
                customized[2],
                customized[11],
                customized[7],
            ]
        }

        if(search) {
            customized = customized.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
        }

        if(id) {
            customized = customized.find(product => +product.id === +id)
        }
        
        if(similarTo) {
            customized = customized.slice(similarTo, 10)
            console.log(customized.length);
            customized.length < 10 && customized.push(...products.slice(0, 10 - customized.length))
        }
        
        customized = !id ? customized.slice(initOffset, initLimit) : customized
        
        res.send(customized)
    }

    getReviews (req, res) {
        res.send(reviews)
    }
}

module.exports = new DataController()
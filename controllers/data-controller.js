const filterIrems = require('../models/filterItems/filterItems')
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
        const {
            trands, search, id, similarTo, offset, limit, type,
            category, brand, size, season, color, minPrice, maxPrice,
            productsById,
        } = req.query
        const initOffset = +offset || 0
        const initLimit = +limit || 12
        let count = products.length
        let customized = [...products]

        if(id) {
            customized = customized.find(product => +product.id === +id)
            
            res.send(customized)
            return
        }

        if(productsById) {
            let idArr = productsById.split(',').map(i => +i)

            customized = customized.filter(product => idArr.includes(+product.id))

            res.send(customized)
            return
        }

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
            
        if(similarTo) {
            customized = customized.slice(similarTo, 10)
            customized.length < 10 && customized.push(...products.slice(0, 10 - customized.length))
        }

        if(category) {
            const categories = category.split(',')
            customized = customized.filter(product => product.categories.some(catg => categories.includes(catg)))
            count = customized.length
        }

        if(brand) {
            const brands = brand.split(',')
            customized = customized.filter(product => brands.includes(product.brand))
            count = customized.length
        }

        if(size) {
            const sizes = size.split(',').map(s => +s)
            customized = customized.filter(product => product.dimensions.some(dim => sizes.includes(+dim)))
            count = customized.length
        }

        if(season) {
            const seasons = season.split(',')
            customized = customized.filter(product => seasons.includes(product.season))
            count = customized.length
        }

        if(color) {
            const colors = color.split(',')
            customized = customized.filter(product => product.colors.some(clr => colors.includes(clr)))
            count = customized.length
        }

        if(minPrice) {
            customized = customized.filter(product => product.price > minPrice)
            count = customized.length
        }

        if(maxPrice) {
            customized = customized.filter(product => product.price < maxPrice)
            count = customized.length
        }

        if(type === 'news') {
            customized = customized.sort((a, b) => {
                if(a.date.year > b.date.year) {
                    return 1
                } else if(b.date.year > a.date.year) {
                    return -1
                } else {
                    return 0
                }
            }).slice(0, 10)
            count = customized.length
        } else if(type) {
            customized = customized.filter(product => product.type.includes(type))
            count = customized.length
        }
        
        customized = customized.slice(initOffset, initOffset + initLimit)

        customized = {
            count,
            limit: initLimit,
            result: [...customized],
            pricesLimit: {
                minPrice: products.reduce((prev, curr) => prev < curr.price ? prev : curr.price, products[0].price),
                maxPrice: products.reduce((prev, curr) => prev > curr.price ? prev : curr.price, products[0].price),
            },
        }
        res.send(customized)
    }

    getReviews (req, res) {
        res.send(reviews)
    }

    getFilterItems (req, res) {
        res.send(filterIrems)
    }
}

module.exports = new DataController()
const serverHost = process.env.SERVER_HOST

const getPhotos = () => {
    let photos = []
    for(let i = 1; i <= 4; i++) {
        photos.push(`${serverHost}images/news/photo${i}.png`)
    }
    return photos
}

const news = {
    title: "ADIDAS REVEAL THE 'AL RIHLA' 2022 WORLD CUP PACK",
    description: `Продолжая давнюю традицию создания комплектов бутс для \n чемпионата мира по футболу,\n Adidas представила свою \n стилистику для Катара 2022 года.`,
    images: getPhotos()
}

module.exports = news
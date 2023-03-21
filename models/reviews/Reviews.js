const getPhoto = id => `${process.env.SERVER_HOST}images/reviews/${id}/ava.png`

const reviews = [
    {
        name: 'Дарья',
        estimates: 5,
        comment: '“Высокое качество по приемлемой цене.Один из лучших магазинов.”',
        photo: getPhoto('review1')
    },
    {
        name: 'Юрий',
        estimates: 5,
        comment: '“ Долго искал в магазинах города бутсы Puma SpeedFlow , заказал у Select Sneakers и очень доволен покупкой.” ',
        photo: getPhoto('review2')
    },
    {
        name: 'Ильяс',
        estimates: 5,
        comment: '“Только оригинал, отличный выбор моделей, быстрая доставка. Все на высшем уровне.”',
        photo: getPhoto('review3')
    },
    {
        name: 'Карина',
        estimates: 5,
        comment: '“Высокое качество по приемлемой цене.Один из лучших магазинов.”',
        photo: getPhoto('review4')
    }
]

module.exports = reviews
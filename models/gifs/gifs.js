const SERVER_HOST = process.env.API_URL
const getGif = (id) => `${SERVER_HOST}images/gifs/gif${id}.gif`


const gifs = [
    {
        id: 1,
        gif: getGif(2),
        link: 'https://geekstudio.kg/'
    }
]

module.exports = gifs
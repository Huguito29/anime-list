

const Jikan = require('jikan-node');
const mal = new Jikan();


function Test() {
    return (
        mal.findAnime('11597', 'episodes', 1)
        .then(info => console.log(info))
        .catch(err => console.log(err))
    )
}
export default Test
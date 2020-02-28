const Jikan = require('jikan-node');
const mal = new Jikan();

var result = '';

function Testando() {
    mal.findAnime('11597', 'episodes', 1)
    .then(info => {
        
        return console.log(info);

    })
    .catch(err => console.log(err));

    
}
Testando();
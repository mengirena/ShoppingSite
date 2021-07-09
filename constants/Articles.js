//import the Article class
const Article = require('../articles/Article');

const Articles = [
    new Article(
        1,
        true,
        'shoes',
        'My Shoes black/white',
        12.99,
        "https://www.publicdomainpictures.net/pictures/190000/nahled/kids-shoes-14690053161ag.jpg"
    ), new Article(
        2,
        true,
        'shoes',
        'Shoes with Colors',
        17.99,
        "https://www.publicdomainpictures.net/pictures/180000/nahled/chaussures-decontractees-.jpg"
    ), new Article(
        3,
        true,
        'tshirt',
        'My TShirt black/white',
        9.99,
        "https://www.publicdomainpictures.net/pictures/170000/nahled/hood-without-face-1463040516IWo.jpg"
    ), new Article(
        4,
        false,
        'tshirt',
        'TShirt with Colors',
        20.99,
        "https://www.publicdomainpictures.net/pictures/210000/nahled/santa-woman-portrait-1481383838pyX.jpg"
    ),
];

module.exports = Articles;
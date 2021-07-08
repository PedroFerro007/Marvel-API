const timeStamp = '1625578811';
const apiKey = 'da361f43dc76037335748e6930b697a3';
const md5 = '6c2b09232495b69ccd4266fc4f618350';

fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`)
.then((response) =>{
    return response.json();
}).then((json) => {
    json.data.results.forEach(valor => {
        console.log(valor);
        const divResults = document.querySelector('.results');
        const nameHero = valor.name;
        const imgUrl = valor.thumbnail.path;
        const imgExtension = valor.thumbnail.extension;
        const img = imgUrl + '.' + imgExtension;

        criaHeroi(nameHero, img, divResults);
    });
})

    const criaHeroi = (nome, img, divR) => {
        const ParagrafoNome = document.createElement('p');
        ParagrafoNome.innerText = nome;
        const image = document.createElement('img');
        image.classList.add('img-hero');
        image.src = img;


        const divElements = document.createElement('div');
        divElements.classList.add('card');
        const divResult = document.createElement('div');

        divElements.appendChild(image);
        divElements.appendChild(ParagrafoNome);
        divResult.appendChild(divElements);
        divR.appendChild(divResult);
    

    };







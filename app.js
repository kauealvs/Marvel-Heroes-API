let number = 20;
let marvelHero = document.querySelector(".hero-list");
const div = document.createElement('div');
const API = `https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=${number}&apikey=7e99323b2679072c3e1119052f1aca13&hash=779d449f29c113e00feddbada3e680af`;

async function heroes(number) {
    const request = await fetch(API);
    const response = await request.json();
    const hero = response.data.results;

    for(var i = 0; i < hero.length ; i++) {
        const name = hero[i].name;
        const pathImage = hero[i].thumbnail.path + "." + hero[i].thumbnail.extension ;
        const div = document.createElement('div');
        div.className = 'hero';
        div.innerHTML = `
         <a href="" target="_blank">
            <img src="${pathImage}" alt="${name}">
         </a>
         <h3 class="title">${name}</h3>`;

        marvelHero.append(div);
    }

}

heroes();


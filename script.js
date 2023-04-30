let apiCardsFilm = document.getElementById('api-cards-film')
let filmsURL = 'https://swapi.dev/api/films/';
const loader = document.getElementById("loader");

try {
    fetch(filmsURL)
.then(Response => Response.json())
.then(data => {
    let films = data.results
    for (let i = 0; i <= 4; i++) {
         
        const imageUrl = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`;
        /* console.log(imageUrl) */

        let film = films[i];

        apiCardsFilm.innerHTML += `
        <div class="card" id="card-flm">
            <div class="card-front">
                <p class="title">${film.title}</p>
                <div class="api-card-img-container"><img src = ${imageUrl}></div>
            </div>
            <div class="card-back">
                <p>
                    ${film.title} is a movie in the Star Wars universe. Created at ${film.created}
                    and directed by ${film.director}, a well known director. The film was finally released
                    on ${film.release_date}. It has been one of a kind ever since 
                </p>
            </div>
        </div>
        ` 

       
        let cards = document.querySelectorAll('.card')
        loader.style.display = "none"
        

        searchItems(cards)  
    }   
 
    
});
} catch (error) {
    apiCardsFilm.innerHTML = `<div class="error-message">${error.message}</div>`;
    loader.style.display = "none"
}
loader.style.display = "block"



let apiCardsCharacters = document.getElementById('api-cards-character');
let charactersURL = 'https://swapi.dev/api/people/';
let character = ""
const loaderCharacter = document.getElementById("loaderCharacter");
try {
fetch(charactersURL)
.then(Response => Response.json())
.then(data => {
    let characters = data.results
    for (let i = 0; i < characters.length; i++) {
       /*  console.log(characters[i]);  */

        let character = characters[i];
            
        const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`;
        /* console.log(imageUrl) */

        apiCardsCharacters.innerHTML += `
        <div class="card" id="card">
            <div class="card-front">
                <p class="title">${character.name}</p>
                <div class="api-card-img-container"><img src = ${imageUrl}></div>
            </div>
            <div class="card-back">
                <p>
                ${character.name} is ${character.gender === 'n/a' ? 'of unknown gender ' : `a ${character.gender}`} born in 
                ${character.birth_year}. Known to have ${character.skin_color} skin color, 
                ${character.eye_color} eyes, and stand at a height of ${character.height}cm.
                </p>
            </div>
        </div>
        ` 
        
        let cards = document.querySelectorAll('.card')
        loaderCharacter.style.display = "none"
        searchItems(cards)
       
    } 
   
     
        /* console.log(characters[i]) */  
});

} catch (error) {
    loaderCharacter.style.display = "none"      
}
loaderCharacter.style.display = "block" 


let apiCardsPlanets = document.getElementById('api-cards-planet');
let planetsURL = 'https://swapi.dev/api/planets/';
let planet = ""
const loaderPlanet = document.getElementById("loaderPlanet");
try {
fetch(planetsURL)
.then(Response => Response.json())
.then(data => {
    let planets = data.results
    for (let i = 0; i < planets.length; i++) {
       /*  console.log(planets[i]);  */

        let planet = planets[i];
            
        const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${i + 1}.jpg`;
        /* console.log(imageUrl) */

        apiCardsPlanets.innerHTML += `
        <div class="card" id="card">
            <div class="card-front">
                <p class="title">${planet.name}</p>
                <div class="api-card-img-container"><img src = ${imageUrl}></div>
            </div>
            <div class="card-back">
                <p>
                planet ${planet.name}, with a diameter of ${planet.diameter} and a terrain type ${planet.terrain}. 
                The climate of the planet is ${planet.climate}, with a population of ${planet.population}
                </p>
            </div>
        </div>
        ` 
        
        let cards = document.querySelectorAll('.card')
        loaderPlanet.style.display = "none"
        searchItems(cards)
       
    }       
    /* console.log(characters[i]) */   
});

} catch (error) {
    loaderPlanet.style.display = "none"
}
loaderPlanet.style.display = "block"


/* functionality for search */

    function searchItems(cards){
        let searcher = document.getElementById("search-input");
        
        searcher.addEventListener("input", function(e){
            e.preventDefault()
            
            let searchWord = searcher.value.toLowerCase();
            
            cards.forEach(card => {
                let title = "";
                let name = "";
                let planet = "";
    
                if (card.querySelector(".title")) {
                    title = card.querySelector(".title").textContent.toLowerCase();
                } else if (card.querySelector(".name")) {
                    name = card.querySelector(".name").textContent.toLowerCase();
                }
                else if (card.querySelector(".planet")) {
                    planet = card.querySelector(".name").textContent.toLowerCase();
                
                }

                if (title.includes(searchWord) || name.includes(searchWord)) {
                    card.style.display = "block"; 
                } else {
                    card.style.display = "none"; 
                }
            });
        });
    }
 

       
   


let apiCardsFilm = document.getElementById('api-cards-film')
let filmsURL = 'https://swapi.dev/api/films/';

fetch(filmsURL)
.then(Response => Response.json())
.then(data => {
    let films = data.results
   /*  console.log(films) */
    for (let i = 0; i < films.length; i++) {
       /*  console.log(films[i]);  */
         
    const imageUrl = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`;
    /* console.log(imageUrl) */

    apiCardsFilm.innerHTML += `
    <div class="card">
        <div class="card-front">
            <p class="title">${films[i].title}</p>
            <div class="api-card-img-container"><img src = ${imageUrl}></div>
        </div>
        <div class="card-back">
            <p>
                ${films[i].title} is a movie in the Star Wars universe. Created at ${films[i].created}
                and directed by ${films[i].director}, a well known director. The film was finally released
                on ${films[i].release_date}. It has been one of a kind ever since 
            </p>
        </div>
    </div>
    ` 
    }
   

   
});


let apiCardsCharacters = document.getElementById('api-cards-people');
let charactersURL = 'https://swapi.dev/api/people/';

fetch(charactersURL)
.then(Response => Response.json())
.then(data => {
    let characters = data.results
    console.log(characters)
    for (let i = 0; i < characters.length; i++) {
        console.log(characters[i]); 
         
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`;
    console.log(imageUrl)

    apiCardsCharacters.innerHTML += `
    <div class="card">
        <div class="card-front">
            <p class="title">${characters[i].name}</p>
            <div class="api-card-img-container"><img src = ${imageUrl}></div>
        </div>
        <div class="card-back">
            <p>
            ${characters[i].name} is ${characters[i].gender === 'n/a' ? 'of unknown gender ' : `a ${characters[i].gender}`} born in 
            ${characters[i].birth_year}. Known to have ${characters[i].skin_color} skin color, 
            ${characters[i].eye_color} eyes, and stand at a height of ${characters[i].height}cm.
            </p>
        </div>
    </div>
    ` 
    }   
});

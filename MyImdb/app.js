const key = '80ef4f2b';
const submitBtn = document.getElementById('submit');
var content = document.querySelector('.content');
const searchBox = document.getElementById('search');
var searchFor = document.getElementById('searchfor');
var Name = document.getElementById('Name');
var year = document.getElementById('Year');
var rated = document.getElementById('Rate');
var released = document.getElementById('Release');
var runtime = document.getElementById('Runtime');
var genre = document.getElementById('Genre');
var actors = document.getElementById('Actors');
var director = document.getElementById('Director');
var writer = document.getElementById('Writer');
var plot = document.getElementById('Plot');
var rating1 = document.getElementById('Rating1');
var rating2 = document.getElementById('Rating2');
var rating3 = document.getElementById('Rating3');
var iMDB = document.getElementById('IMDB');
var production = document.getElementById('Production');
var box = document.getElementById('Box');
var awards = document.getElementById('Awards');
var img = document.querySelector('.image');
submitBtn.addEventListener('click',getSearch);


function getSearch() {

    if (searchBox.value == "") { 
        alert("Sorry no name to search")
        resetDisplay();
    }
    
    else {
        getMovie();
    
    }

}
async function getMovie() {  
    const name = searchBox.value;
    const url = `http://www.omdbapi.com/?t=${name}&apikey=${key}`
    const response = await fetch(url);
    const movie = await response.json();
    setDisplay();
    const {Title, Year, Rated,Released, Runtime, Genre, Director, Writer, Actors, Plot,Language,
            Country, Awards,Poster,Ratings, imdbRating, BoxOffice, Production
    }  = movie;


    Name.innerHTML = Title;
    year.innerHTML = Year;
    rated.innerHTML = Rated;
    released.innerHTML = Released;
    runtime.innerHTML = Runtime;
    genre.innerHTML = Genre;
    director.innerHTML = Director;
    writer.innerHTML = Writer;
    actors.innerHTML = Actors;
    plot.innerHTML = Plot;
    awards.innerHTML = Awards;
    for(i=0;i<1;i++) {
        rating1.innerHTML = Ratings[i].Source +": " + Ratings[i].Value;
    }
    for(i=0;i<2;i++) {
        rating2.innerHTML = Ratings[i].Source +": " + Ratings[i].Value;
    }
    for(i=0;i<3;i++) {
        rating3.innerHTML = Ratings[i].Source +": " + Ratings[i].Value;
    }
   
    iMDB.innerHTML = imdbRating;
    box.innerHTML = BoxOffice;
    production.innerHTML = Production;
    img.src = Poster;
    img.classList = "image";
    img.style = " position: relative; left: 700px;"
    document.content.appendChild(img);
   

}


function setDisplay() {
    content.style.visibility = "visible";
    searchFor.innerText = "You Search For: " + searchBox.value;
   

}

function resetDisplay() {
    content.style.visibility = "hidden";

}

   

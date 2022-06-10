const { createSourceMapSource } = require("typescript");

// COUR
let voiture= 'merco';
let age = 45;
let bonbon = 89;

let bonbonAge= age + bonbon;
let bonbonAge1= age - bonbon;
let bonbonAge2= age * bonbon;
let bonbonAge3= age / bonbon;

let episode= {
    titre:'coucou',
    duréé:45,
    regarder:true,
}

// EXO
let nbrSaison=6;
let nbrEpisode=12;
let tpsEpisode=45;
let tpsPub=5;

let tpsTotalSerie= (tpsPub + tpsEpisode )* nbrEpisode *nbrSaison;

let paragraph = document.querySelector('#info');
paragraph.innerText = `${nbrSaison} seasons, ${nbrEpisode} episodes per season

Total viewing time: ${tpsTotalSerie} minutes`


let numberOfSeasons = 6;
let numberOfEpisodes = 12;



let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season`


//////////////////////////////////////
let title= 'les bronzer chez ta mere';
let regarder= true;

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`


document.write("This is written from JavaScript");
let numberOfSeasons = 6;
let numberOfEpisodes = 12;

// Calculate totalShowTime here
// =====================================

let episodeTime = 45;
let commercialTime = 5;

let totalShowTime = (episodeTime + commercialTime) * numberOfSeasons * numberOfEpisodes;

// =====================================

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season

Total viewing time: ${totalShowTime} minutes`

// Create Object here
// =========================================

let episode = {
    title: 'Dark Beginning',
    duration: 45,
    hasBeenWatched: false
  };
  
  
  // =========================================
  
  document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
  Duration: ${episode.duration} min
  ${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;
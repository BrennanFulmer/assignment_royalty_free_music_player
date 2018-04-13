
/*
  cd Documents/Viking/JS/music_player

  cd Documents/Viking/JS/music_player/assets/styles

  sass --watch input.scss:style.css

  sass input.scss style.css

  TODO
  1. js button and text swapping
    a. look into functions for repeated actions and global variables for
       repeated selections/other methods to reduce repetition

  2. find actual songs - https://freemusicarchive.org/

  3. update html to match songs

  4. js to actually play/pause songs
*/

/* song play button */
var songPlay = document.getElementsByClassName("song-play");

var counter = 0;
while (counter < 5) {
  songPlay[counter].addEventListener("click", function(action) {
    // reset previous song
    var hidden = document.getElementsByClassName("song-play hide")[0];
    var played = document.getElementsByClassName("song-pause playing")[0];

    if (hidden != undefined) {
      hidden.classList.remove("hide");
    }

    if (played != undefined) {
      played.classList.remove("playing");
    }

    // song button change
    var source = action.target;
    var siblings = source.parentNode.children;

    source.classList.add("hide");
    siblings[1].classList.add("playing");

    // status bar button change
    document.getElementsByClassName("status-play")[0].classList.add("hide");
    document.getElementsByClassName("status-pause")[0].classList.add("playing");

    // status bar text change
    document.querySelectorAll("h4")[0].innerHTML = siblings[2].innerHTML;
    document.querySelectorAll("h5")[0].innerHTML = siblings[3].innerHTML;

    /*
      TODO
      actually play song
    */
  });
  counter++;
}
/* song play button */

/* status play button */
var statusPlay = document.getElementsByClassName("status-play")[0];
var songs = document.getElementsByClassName("song");

statusPlay.addEventListener("click", function() {
  // status bar button change
  statusPlay.classList.add("hide");
  document.getElementsByClassName("status-pause")[0].classList.add("playing");

  // find selected song
  var statusSong = document.querySelectorAll("h4")[0].innerHTML;
  var statusArtist = document.querySelectorAll("h5")[0].innerHTML;

  var step = 0;
  while (step < 5) {
    if (
      songs[step].children[2].innerHTML == statusSong &&
      songs[step].children[3].innerHTML == statusArtist
    ) {
      var statusSong = songs[step].children;
      break;
    }
    step++;
  }

  // song button change
  statusSong[0].classList.add("hide");
  statusSong[1].classList.add("playing");

  /*
    TODO
    actually play song
  */
});
/* status play button */

/* song pause button */
var songPause = document.getElementsByClassName("song-pause");

var limit = 0;
while (limit < 5) {
  songPause[limit].addEventListener("click", function(clicky) {
    // song button change
    var origin = clicky.target;

    origin.classList.remove("playing");
    origin.parentNode.children[0].classList.remove("hide");

    // status bar button change
    statusPlay.classList.remove("hide");
    document.getElementsByClassName("status-pause")[0].classList.remove("playing");

    /*
      TODO
      actually pause song
    */
  });
  limit++;
}
/* song pause button */

/* status pause button */
var statusPause = document.getElementsByClassName("status-pause")[0];

statusPause.addEventListener("click", function() {
  // status bar button change
  statusPause.classList.remove("playing");
  document.getElementsByClassName("status-play")[0].classList.remove("hide");

  // find selected song
  var currentSong = document.querySelectorAll("h4")[0].innerHTML;
  var currentArtist = document.querySelectorAll("h5")[0].innerHTML;

  var count = 0;
  while (count < 5) {
    if (
      songs[count].children[2].innerHTML == currentSong &&
      songs[count].children[3].innerHTML == currentArtist
    ) {
      var currentSong = songs[count].children;
      break;
    }
    count++;
  }

  // song button change
  currentSong[0].classList.remove("hide");
  currentSong[1].classList.remove("playing");

  /*
    TODO
    actually pausing song
  */
});
/* status pause button */

/* status previous button */
document.getElementsByClassName("previous-button")[0].addEventListener("click", function() {
  // find selected song
  var selectedSong = document.querySelectorAll("h4")[0].innerHTML;
  var selectedArtist = document.querySelectorAll("h5")[0].innerHTML;

  var tick = 0;
  while (tick < 5) {
    if (
      songs[tick].children[2].innerHTML == selectedSong &&
      songs[tick].children[3].innerHTML == selectedArtist
    ) {
      var selectedSong = songs[tick];
      break;
    }
    tick++;
  }

  // song button change
  selectedSong.children[0].classList.remove("hide");
  selectedSong.children[1].classList.remove("playing");

  /*
    TODO
    actually pausing song
  */

  // determine previous song
  if (selectedSong.getAttribute("num") == 1) {
    var listing = 5;
  } else {
    var listing = selectedSong.getAttribute("num") - 1;
  }

  var sequence = 0;
  while (sequence < 5) {
    if (songs[sequence].getAttribute("num") == listing) {
      var track = songs[sequence].children;
      break;
    }
    sequence++;
  }

  // status bar text change
  document.querySelectorAll("h4")[0].innerHTML = track[2].innerHTML;
  document.querySelectorAll("h5")[0].innerHTML = track[3].innerHTML;

  // status bar button change
  document.getElementsByClassName("status-play")[0].classList.add("hide");
  document.getElementsByClassName("status-pause")[0].classList.add("playing");

  // song button change
  track[0].classList.add("hide");
  track[1].classList.add("playing");

  /*
    TODO
    actually play song
  */
});
/* status previous button */

/* status next button */
document.getElementsByClassName("after-button")[0].addEventListener("click", function() {

});
/* status next button */








// spacing

const {
  isIncomplete,
  incompleteMessage,
  fetchPlaylist,
  savePlaylist
} = require('./helpers');

function playSong(title, artist) {
  if (isIncomplete(title, artist)) {
    console.log(incompleteMessage);
    return incompleteMessage;
  }

  var playlist = fetchPlaylist();

  var song = playlist.filter(
    song => song.title === title && song.artist === artist
  );

  if (song.length !== 0) {
    return console.log(`Now playing "${song[0].title}" by ${song[0].artist}`);
  } else {
    return console.log(
      `Sorry, couldn't find "${title}" by ${artist} in your playlist`
    );
  }
}

module.exports = { playSong };

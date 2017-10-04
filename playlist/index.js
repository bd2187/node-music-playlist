const fs = require('fs');

const jsonPlaylistFile = './playlist/playlist.json';
const incompleteMessage = 'Please specify both title and artist';

function fetchPlaylist() {
  try {
    var playlist = fs.readFileSync(jsonPlaylistFile);
    return JSON.parse(playlist);
  } catch (err) {
    return [];
  }
}

function savePlaylist(playlist) {
  return fs.writeFile(jsonPlaylistFile, JSON.stringify(playlist), err => {
    if (err) {
      console.log(
        `Sorry, looks like we had trouble saving your updated playlist. Please try again`
      );
    }
    console.log('Playlist saved!');
  });
}

function isIncomplete(title, artist) {
  return typeof title === 'undefined' || typeof artist === 'undefined';
}

function addSong(title, artist) {
  if (isIncomplete(title, artist)) {
    console.log(incompleteMessage);
    return incompleteMessage;
  }

  var playlist = fetchPlaylist();
  var song = { title, artist };
  playlist.push(song);

  return savePlaylist(playlist);
}

function removeSong(title, artist) {
  if (isIncomplete(title, artist)) {
    console.log(incompleteMessage);
    return incompleteMessage;
  }

  const successMessage = `${title} by ${artist} was successfully deleted`;
  const failureMessage = `Sorry, we couldn't find ${title} by ${artist}`;

  var playlist = fetchPlaylist();

  var filteredPlaylist = playlist.filter(
    song => song.title !== title || song.artist !== artist
  );

  if (playlist.length !== filteredPlaylist.length) {
    savePlaylist(filteredPlaylist);
    console.log(successMessage);
    return successMessage;
  } else {
    console.log(failureMessage);
    return failureMessage;
  }
}

module.exports = {
  addSong,
  removeSong
};

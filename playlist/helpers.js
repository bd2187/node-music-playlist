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
    console.log(`Playlist saved!`);
  });
}

function isIncomplete(title, artist) {
  return typeof title === 'undefined' || typeof artist === 'undefined';
}

module.exports = {
  jsonPlaylistFile,
  incompleteMessage,
  fetchPlaylist,
  savePlaylist,
  isIncomplete
};

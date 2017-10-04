const fs = require('fs');

const jsonPlaylistFile = './playlist/playlist.json';

function fetchPlaylist() {
  try {
    var playlist = fs.readFileSync(jsonPlaylistFile);
    return JSON.parse(playlist);
  } catch (err) {
    return [];
  }
}

function addSong(title, artist) {
  var playlist = fetchPlaylist();

  var song = { title, artist };
  playlist.push(song);

  fs.writeFileSync('./playlist/playlist.json', JSON.stringify(playlist));
}

module.exports = {
  addSong
};

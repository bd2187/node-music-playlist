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

function savePlaylist(playlist) {
  return fs.writeFileSync(jsonPlaylistFile, JSON.stringify(playlist));
}

function addSong(title, artist) {
  var playlist = fetchPlaylist();
  var song = { title, artist };
  playlist.push(song);

  savePlaylist(playlist);
}

module.exports = {
  addSong
};

const fs = require('fs');

function addSong(title, artist) {
  var playlist;

  try {
    var fetchedPlaylist = fs.readFileSync('./playlist/playlist.json');
    playlist = JSON.parse(fetchedPlaylist);
  } catch (err) {
    playlist = [];
  }

  var song = { title, artist };
  playlist.push(song);

  fs.writeFileSync('./playlist/playlist.json', JSON.stringify(playlist));
}

module.exports = {
  addSong
};

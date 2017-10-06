const { fetchPlaylist } = require('./helpers');

function listAllSongs() {
  var playlist = fetchPlaylist();
  var trackList = '';
  if (playlist.length === 0) {
    return console.log('Playlist is empty');
  } else {
    playlist.forEach((song, index) => {
      trackList += `
        ${index + 1} ${song.title} - ${song.artist}
      `;
    });
    return console.log(trackList);
  }
}

module.exports = { listAllSongs };

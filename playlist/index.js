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

// consider making modules for each function for organization

module.exports = {
  addSong,
  removeSong,
  playSong,
  listAllSongs
};

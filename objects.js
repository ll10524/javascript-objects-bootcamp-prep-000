var playlist = {
  artistName: 'Happy New Year'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[songTitle] = artistName;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}
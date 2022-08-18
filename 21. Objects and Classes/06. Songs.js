function songs(array) {
  class Song {
    constructor(playList, name, time) {
      this.playList = playList;
      this.name = name;
      this.time = time;
      this.print = () => console.log(this.name)
    }
  }

  let numOfSongs = Number(array.shift());
  let wantedSongs = array.pop();

  let allTracks = [];
  for (let index = 0; index < numOfSongs; index++) {
    const tokens = array[index].split(`_`);
    let song = new Song(tokens[0], tokens[1], tokens[2]);
    allTracks.push(song);
  }

  if (wantedSongs === `all`) {
    allTracks.forEach((song) => song.print());
  } else {
    allTracks
      .filter((song) => song.playList === wantedSongs)
      .forEach((song) => song.print());
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
console.log(`-----`);
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
console.log(`-----`);
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);

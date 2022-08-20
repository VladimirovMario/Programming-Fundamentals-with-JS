function movies(array) {
  let filmList = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(`addMovie`)) {
      
      let addMovie = array[i].split(`addMovie `);
      filmList.push({ name: addMovie[1] });
    
    } else if (array[i].includes(`directedBy`)) {

      let [name, director] = array[i].split(` directedBy `);
      let isMovie = filmList.find((el) => el.name === name); 
      
      if (isMovie) {
        isMovie.director = director;
      }
    } else if (array[i].includes(`onDate`)) {

      let addDate = array[i].split(` onDate `);
      let isMovie = filmList.find((el) => el.name === addDate[0]);

      if (isMovie) {
        isMovie.date = addDate[1];
      }
    }
  }
  filmList.forEach((el) => {
    if (el.name && el.director && el.date) {
      console.log(JSON.stringify(el));
    }
  });
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
console.log(`------`);
movies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);

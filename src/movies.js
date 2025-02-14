
const moviesToTest = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      score: 9
    },
    {
      title: '12 Angry Men',
      year: 1957,
      director: 'Sidney Lumet',
      duration: '1h 36min',
      genre: ['Crime', 'Drama'],
      score: 8.9
    },
    {
      title: 'Schindler"s List',
      year: 1993,
      director: 'Steven Spielberg',
      duration: '3h 15min',
      genre: ['Biography', 'Drama', 'History'],
      score: 8.9
    },
    {
      title: 'Pulp Fiction',
      year: 1994,
      director: 'Quentin Tarantino',
      duration: '2h 34min',
      genre: ['Crime', 'Drama'],
      score: 8.9
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
      director: 'Peter Jackson',
      duration: '3h 21min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      score: 8.9
    },
    {
      title: 'Il buono, il brutto, il cattivo',
      year: 1966,
      director: 'Sergio Leone',
      duration: '3h 2min',
      genre: ['Western'],
      score: 8.9
    },
    {
      title: 'Fight Club',
      year: 1999,
      director: 'David Fincher',
      duration: '2h 19min',
      genre: ['Drama'],
      score: 8.8
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
      director: 'Peter Jackson',
      duration: '2h 58min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      score: 8.8
    },
    {
      title: 'Forrest Gump',
      year: 1994,
      director: 'Robert Zemeckis',
      duration: '2h 22min',
      genre: ['Comedy', 'Drama', 'Romance'],
      score: 8.8
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
      director: 'Irvin Kershner',
      duration: '2h 4min',
      genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
      score: 8.8
    },
    {
      title: 'Inception',
      year: 2010,
      director: 'Christopher Nolan',
      duration: '2h 28min',
      genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
      score: 8.8
    },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
      director: 'Peter Jackson',
      duration: '2h 59min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      score: 8.7
    },
    {
      title: 'One Flew Over the Cuckoo"s Nest',
      year: 1975,
      director: 'Milos Forman',
      duration: '2h 13min',
      genre: ['Drama'],
      score: 8.7
    },
    {
      title: 'Goodfellas',
      year: 1990,
      director: 'Martin Scorsese',
      duration: '2h 26min',
      genre: ['Crime', 'Drama'],
      score: 8.7
    },
    {
      title: 'The Matrix',
      year: 1999,
      director: 'Lana Wachowski',
      duration: '2h 16min',
      genre: ['Action', 'Sci-Fi'],
      score: 8.7
    },
    {
      title: 'Shichinin no samurai',
      year: 1954,
      director: 'Akira Kurosawa',
      duration: '3h 27min',
      genre: ['Adventure', 'Drama'],
      score: 8.7
    },
    {
      title: 'Star Wars',
      year: 1977,
      director: 'George Lucas',
      duration: '2h 1min',
      genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
      score: 8.7
    },
    {
      title: 'Cidade de Deus',
      year: 2002,
      director: 'Fernando Meirelles',
      duration: '2h 10min',
      genre: ['Crime', 'Drama'],
      score: 8.7
    },
    {
      title: 'Se7en',
      year: 1995,
      director: 'David Fincher',
      duration: '2h 7min',
      genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
      score: 8.6
    },
    {
      title: 'The Silence of the Lambs',
      year: 1991,
      director: 'Jonathan Demme',
      duration: '1h 58min',
      genre: ['Crime', 'Drama', 'Thriller'],
      score: 8.6
    },
    {
      title: 'It"s a Wonderful Life',
      year: 1946,
      director: 'Frank Capra',
      duration: '2h 10min',
      genre: ['Drama', 'Family', 'Fantasy'],
      score: 8.6
    },
    {
      title: 'La vita è bella',
      year: 1997,
      director: 'Roberto Benigni',
      duration: '1h 56min',
      genre: ['Comedy', 'Drama', 'War'],
      score: 8.6
    },
    {
      title: 'The Usual Suspects',
      year: 1995,
      director: 'Bryan Singer',
      duration: '1h 46min',
      genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
      score: 8.6
    },
    {
      title: 'Léon',
      year: 1988,
      director: 'Luc Besson',
      duration: '1h 50min',
      genre: ['Crime', 'Drama', 'Thriller'],
      score: 8.6
    },
    {
      title: 'Saving Private Ryan',
      year: 1998,
      director: 'Steven Spielberg',
      duration: '2h 49min',
      genre: ['Drama', 'War'],
      score: 8.6
    },
]



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
  let uniqueDirectors = [];
  let storeTheSame = [];

const directors = moviesArray.map(getDirectors => {
  
  if(uniqueDirectors.includes(getDirectors.director)) {
    storeTheSame.push(getDirectors.director);
  } else {
    uniqueDirectors.push(getDirectors.director);
  }
  
} );
return uniqueDirectors;
}

//console.log(`All directors with no repetition:`, getAllDirectors(moviesToTest))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let countStevMovies = 0;

    const StevensMovies = moviesArray.filter(stevensDrama => {
        if (stevensDrama.director === "Steven Spielberg" && stevensDrama.genre.includes('Drama')) {
            countStevMovies ++;
        }
    } );
    return countStevMovies;
}

//console.log(`All drama movies directed by Steven Spielberg: ${howManyMovies(moviesToTest)}`)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const avrOfAllMovies = moviesArray.reduce(function (acc, curVal) { 
       if (curVal.score !== null && curVal.score !== undefined) {
        return acc + curVal.score
       } else {
        return acc;
       }
    },0 );
   
    let avrageScore = avrOfAllMovies / moviesArray.length
    return parseFloat(avrageScore.toFixed(2));
}
    
//console.log(`All score avrage: ${scoresAverage(moviesToTest)}`);


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
        return 0;
};

  const dramaMovies = [...moviesArray].filter(allDramaMovies => {     
        return allDramaMovies.genre.includes('Drama');
});

  if (dramaMovies.length === 0) {
    return 0;
  }

  const ScoreOfDramaMovies = dramaMovies.reduce(function (acc, value) {
        return acc + value.score
},0 );

    let avrScore = (ScoreOfDramaMovies / dramaMovies.length).toFixed(2);

return Number(avrScore);

}

//console.log(`Avrage Drama score: ${dramaMoviesScore(moviesToTest)}`);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let ascendingYearMovies = [...moviesArray].sort((a, b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.year === b.year) {
          return a.title.localeCompare(b.title);
        };
      });
      
      return ascendingYearMovies
}

//console.log(orderByYear(moviesToTest))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  
  const alphabiticalOrder = [...moviesArray].sort((a,b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        if (a.title === b.title) return 0;
    }); 

  const titlesOnly = alphabiticalOrder.map(titleExtract => titleExtract.title)
  
  return titlesOnly.slice(0,20);
  
}

//console.log(orderAlphabetically(moviesToTest))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const durationOnly = [...moviesArray].map((titleExtract) => titleExtract.duration);

// extract strNumber to numbers
  
  const numbersStr = durationOnly.map((extractNumbers) => {
    return extractNumbers.match(/\d+/g);
    });

// convert hours to min...

  const convStrToNumbMin = numbersStr.map((makeNumbers) => {
    let calHours = parseInt(makeNumbers[0]);
    let calMin = parseInt(makeNumbers[1]);
    return calHours * 60 + calMin;
  });

  const chageDuration = [...moviesArray].map((element, index) => {

    element.duration = convStrToNumbMin[index];
    return element;
    });

  return  chageDuration;
}

//console.log(turnHoursToMinutes(moviesToTest))


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    // * working progres ... * //

    let moviesInSameYear = [];
    let singleYearMovies = [];

    const sameYearMovies = moviesArray.filter(sameYears => { sameYears.year 

      if (moviesInSameYear.includes(sameYears.year)) {
        moviesInSameYear.push(sameYears.year);
      } else {
        singleYearMovies.push(sameYears.year);
      }

})
  return moviesInSameYear
}

//console.log(bestYearAvg(moviesToTest))

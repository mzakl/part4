// File  : part4.js
// Desc  : provide answers for part4 of JS AT2
// Author: Mohamad Akl
// Date  : 09/10/2026

// Define Movie class
class Movie {
  constructor(id, title, year, rating) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}

// console.log(Movie);

// Create an array with 10 mock values
const movies = [
  new Movie(7, 'The Godfather', 1972, 9.2),
  new Movie(3, 'Gladiator', 2000, 8.5),
  new Movie(10, 'The Sixth Sense', 1999, 8.2),
  new Movie(1, 'Titanic', 1997, 8.0),
  new Movie(8, 'The Matrix', 1999, 8.7),
  new Movie(5, 'The Dark Knight', 2008, 9.1),
  new Movie(2, 'The Hurricane', 1999, 7.6),
  new Movie(9, 'Braveheart', 1995, 8.3),
  new Movie(4, '300', 2006, 7.6),
  new Movie(6, 'Troy', 2004, 7.3),
];

// console.log(movies);

//Sort the movies array in ascending order
// const sortedMoviesA = movies.sort(function (a, b) {
//   return a.id - b.id;
// });
// console.log(sortedMoviesA);

// ********* Binary Search **********
// Create the search function.
// Parameter: array to search and key to be found
// returns: the index of the element or -1 if not found
function binarySearch(searchArray, target) {
  // binarySeach works only on sorted arrays.
  // Therefore, first thing to do is sort the array.
  const sortedArrayA = searchArray.sort(function (a, b) {
    return a.id - b.id;
  });
  console.log(`Sorted Array for Binary Search:`);
  console.log(sortedArrayA);
  // Set the found value to -1 (not found)
  // If found >= 0, the target was found.
  let found = -1;
  // init the start and end points
  let start = 0;
  let end = sortedArrayA.length - 1;
  // Loop through while the start does not meet the end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);
    // Test if the element is present at the mid.
    if (sortedArrayA[mid].id === target) {
      found = mid;
      break;
    } else if (sortedArrayA[mid].id < target) {
      // look in the right half
      start = mid + 1;
    } else {
      // look in the left half
      end = mid - 1;
    }
  } // End While
  return found;
}

let movieId = 20;
result = binarySearch(movies, movieId);

//Output results
if (result == -1) {
  console.log(`The movie with id ${movieId} was not found`);
} else {
  console.log(`The movie with id ${movieId} was found at index ${result}`);
}

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

console.log(movies);

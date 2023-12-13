//your student id, firstname, and lastname here
//65130500017 yadaajenrongrodsakul

class Movies {
  constructor() {
    this.movies = []
  }
  getAllMovies() {
    return this.movies
  }
  addMovie(title, director, year, genre) {
    if (
      title === undefined ||
      director === undefined ||
      year === undefined ||
      genre === undefined
    )
      return undefined

    const newmovies = {
      title: title,
      director: director,
      year: year,
      genre: genre,
    }
    for (let i = 0; i < this.movies.length; i++) {
      if (
        this.movies[i].title.toLowerCase() === title.toLowerCase() &&
        this.movies[i].director.toLowerCase() === director.toLowerCase()
      ) {
        return undefined
      }
    }
    this.movies.push(newmovies)
    return newmovies
    // if (
    //   this.movies.findIndex((movie) => {
    //     return (
    //       movie.title.toLowerCase() === title.toLowerCase() &&
    //       movie.director.toLowerCase() === director.toLowerCase()
    //     )
    //   }) === -1
    // ) {
    //   this.movies.push(newmovies)
    //   return newmovies
    // }
    // return undefined
  }
  updateMovie(title, updatedDetails) {
    const movieupdate = this.movies.find(
      (movies) => movies.title.toLowerCase() === title.toLowerCase()
    )
    if (movieupdate === undefined) return undefined
    if (updatedDetails.director !== undefined) {
      movieupdate.director = updatedDetails.director //เช็คว่ามี director มั้ย ถ้ามี ให้เอาค่าใหม่ใส่ทับค่าเก่า
    }
    if (updatedDetails.year !== undefined) {
      movieupdate.year = updatedDetails.year
    }
    if (updatedDetails.genre !== undefined) {
      movieupdate.genre = updatedDetails.genre
    }
    return movieupdate
  }
  deleteMovieByTitle(title) {
    const delmovie = this.movies.find(
      (e) => e.title.toLowerCase() === title.toLowerCase()
    )
    console.log(delmovie)
    const indexmov = this.movies.findIndex(
      (p) => p.title.toLowerCase() === title.toLowerCase()
    )
    if (indexmov >= 0) this.movies.splice(indexmov, 1)

    if (delmovie !== undefined) {
      return (
        'a movie object {title: ' +
        delmovie.title +
        ', director: ' +
        delmovie.director +
        ', year: ' +
        delmovie.year +
        ', genre: ' +
        delmovie.genre +
        '} is deleted'
      )
    } else return 'no movie deleted'
  }
}

const moviestest = new Movies()
console.log('-----add--------')
console.log(
  moviestest.addMovie('Inception', 'Christopher Nolan', 2010, 'Science Fiction')
)
console.log(
  moviestest.addMovie('Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime')
)
console.log(
  moviestest.addMovie('The Matrix', 'Lana Wachowski', 1999, 'Science Fiction')
)
console.log('-----update--------')
console.log(
  moviestest.updateMovie('Inception', { director: 'James Cameron', year: 2001 })
)
console.log(
  moviestest.updateMovie('Pulp Fiction', { year: 2011, genre: 'Action' })
)
console.log(
  moviestest.updateMovie('Avatar', {
    director: 'James Cameron',
    year: 2009,
    genre: 'Science Fiction',
  })
)
console.log('----get all---------')
console.log(moviestest.getAllMovies())
console.log('------delete-------')
console.log(moviestest.deleteMovieByTitle('The Matrix'))
console.log('----get all---------')
console.log(moviestest.getAllMovies())
//console.log(moviestest.deleteMovieByTitle('Pulp Fiction'))
module.exports = Movies

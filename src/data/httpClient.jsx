const API = 'https://api.themoviedb.org/3'

export const get = (path) => {
  return fetch(API + path, {
    headers: {
      Authorization: 
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDZmOWY0ZDZiMWU3YmJlODFjNmZjZGJkYWVkNTQwMiIsInN1YiI6IjY0NmZkMDk0NzcwNzAwMDEzNjdlYjNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1NV-HW3qoNKQYyebC4aFsEFOWceeDQomDXkvP8sqo_g",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then( result => result.json());
}

import placeholderImg from '../img/loading.png'

export const getMovieImg = (path, width) => {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholderImg
}

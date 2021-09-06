const getEpisodes = (currentPage, currentQuery) => {
  return fetch(`https://rickandmortyapi.com/api/episode/?page=${currentPage}${currentQuery}`)
    .then(response => response.json())
}

export default getEpisodes
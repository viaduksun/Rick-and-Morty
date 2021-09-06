const getCharacters = (currentPage, currentQuery) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}${currentQuery}`)
    .then(response => response.json())
}

export default getCharacters
const getLocations = (currentPage, currentQuery) => {
  return fetch(`https://rickandmortyapi.com/api/location/?page=${currentPage}${currentQuery}`)
    .then(response => response.json())
}

export default getLocations
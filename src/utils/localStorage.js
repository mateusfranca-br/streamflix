// Adiciona um filme à lista
export function addToList(movie) {
  const stored = JSON.parse(localStorage.getItem('mylist')) || []
  const exists = stored.find(item => item.id === movie.id)

  if (!exists) {
    stored.push(movie)
    localStorage.setItem('mylist', JSON.stringify(stored))
  }
}

// Remove um filme da lista pelo ID
export function removeFromList(id) {
  const stored = JSON.parse(localStorage.getItem('mylist')) || []
  const updated = stored.filter(item => item.id !== id)

  localStorage.setItem('mylist', JSON.stringify(updated))
}

// Retorna toda a lista de filmes
export function getList() {
  return JSON.parse(localStorage.getItem('mylist')) || []
}

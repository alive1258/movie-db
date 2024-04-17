// loadData.js

export const loadData = async () => {
  const data = await import('../data/movieData.json')
  return data.default
}

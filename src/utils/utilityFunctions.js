export const concatenatePrismicQueries = queries =>
  queries
    .map(query => {
      return `q=${encodeURIComponent(`[[${query}]]`)}`
    })
    .join('&')

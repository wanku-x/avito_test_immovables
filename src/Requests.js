const requestGET = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(json => resolve(json))
    .catch(reject)
  })
}

export { requestGET };
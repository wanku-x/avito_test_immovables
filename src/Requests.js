const requestGET = (url) => (
  new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch(reject);
  })
);

export default requestGET;

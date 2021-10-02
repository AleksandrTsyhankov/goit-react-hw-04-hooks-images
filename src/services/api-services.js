function fetchAPI(searchValue, pageNum, KEY, id) {
    return fetch(`https://pixabay.com/api/?q=${searchValue}&page=${pageNum}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
              .then(res => {
                  if (res.ok) {
                      return res.json();
                  }
                    
                  return Promise.reject(
                      new Error('Вы что-то не так ввели:(')
                  );
              })
              .then(res => { return res.hits })
}

const api = { fetchAPI };

export default api;
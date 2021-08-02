const axios = require('axios');

const fetchData = () => {
  console.log('Fetching data...')
  return axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      return response.data
    });
};

const postsLength = () => {
  console.log('Fetch Length....')
  return axios
    .get('https://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      const data = response.data;
      return data.length;
    });
}

exports.fetchData = fetchData;
exports.postsLength = postsLength;
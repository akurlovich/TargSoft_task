const { fetchData } = require('./http');
// const axios = require('axios');

// const postsLength = () => {
//   console.log('Fetch Length....')
//   return axios
//     .get('https://jsonplaceholder.typicode.com/posts/')
//     .then(response => {
//       const data = response.data;
//       return data.length;
//     });
// }

// const fetchData = () => {
//   return axios
//     .get('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => {
//       return response.data
//     });
// };
const loadTitle = () => {
  return fetchData().then(extractedData => {
    const title = extractedData.title;
    const transformData = title.toUpperCase();
    return transformData;
  })
};
const printTitle = () => {
  loadTitle().then(title => {
    // console.log(title);
    return title;
  })
};


exports.printTitle = printTitle;
exports.loadTitle = loadTitle;
// exports.postsLength = postsLength;
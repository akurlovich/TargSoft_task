
const fetchData = () => {
  return Promise.resolve({ title: 'delectus aut autem'})
  
};

const postsLength = () => {
  return Promise.resolve(100)
}

exports.fetchData = fetchData;
exports.postsLength = postsLength;
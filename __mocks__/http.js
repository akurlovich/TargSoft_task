
const fetchData = () => {
  return Promise.resolve({ title: 'delectus aut autem'})
  
};

const postsLength = () => {
  return Promise.resolve(100)
}

const userName = () => {
  return Promise.resolve('Leanne Graham')
}

exports.fetchData = fetchData;
exports.postsLength = postsLength;
exports.userName = userName;
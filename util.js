const { fetchData } = require('./http');

const loadTitle = () => {
  return fetchData().then(extractedData => {
    const title = extractedData.title;
    const transformData = title.toUpperCase();
    return transformData;
  })
};
const printTitle = () => {
  loadTitle().then(title => {
    return title;
  })
};


exports.printTitle = printTitle;
exports.loadTitle = loadTitle;

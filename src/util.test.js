const { loadTitle } = require('./util');

test('should in upper case', () => {
  loadTitle().then(title => {
    expect(title).toBe('DELECTUS AUT AUTEM')
  })
})
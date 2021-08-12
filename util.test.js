jest.mock('./http')

const { loadTitle } = require('./util');
const { postsLength, userName } = require('./http');

test('should in upper case', async () => {
  try {
    const title = await loadTitle();
    expect(title).toBe('DELECTUS AUT AUTEM')
  } catch (e) {
    throw new Error(e)
  }
});

test('user name', async () => {
  try {
    const user = await userName();
    expect(user).toBe('Leanne Graham')
  } catch (e) {
    throw new Error(e)
  }
});

test('posts length async', async () => {
  try {
    const len = await postsLength();
    expect(len).toBe(100)
  }
  catch (e) {
    throw new Error(`Invalid posts count: ${e}`);
}
});



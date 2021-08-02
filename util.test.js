jest.mock('./http')

const { loadTitle } = require('./util');
const { postsLength } = require('./http');

test('should in upper case', async () => {
  // expect.assertions(1);
  try {
    const title = await loadTitle();
    expect(title).toBe('DELECTUS AUT AUTEM')
  } catch (e) {
    throw new Error(e)
  }
});

// test('should in upper case', () => {
//   expect.assertions(1);
//   loadTitle().then(title => {
//     expect(title).toBe('DELECTUS AUT AUTEM')
//   }).catch(e => {
//     throw new Error(`Invalid posts count: ${e}`)
//   })
// });

// test('posts length', () => {
//   postsLength().then(len => {
//     expect(len).toBe(11)
//   }).catch((e) => {
//     throw new Error("Invalid posts count 100");
//   });
// });

test('posts length async', async () => {
  // expect.assertions(2);
  try {
    const len = await postsLength();
    expect(len).toBe(100)
  }
  catch (e) {
    throw new Error(`Invalid posts count: ${e}`);


    
  //   console.log(e)
  //   expect(e.toString()).toMatch('error')
  //   expect(e.message).toBe("UNKNOWN ERROR");
  //   expect(e).toBeInstanceOf(Error);
  //   expect(e).toBe('Invalid action');
  //   expect(e).toEqual({
  //     error: 'User with 1 not found.',
  //   });
  //   expect(() => {
  //     const model = new Sample(resolvedSample)
  //  }).toThrow(ReferenceError);
  // throw new Error(e);
}
});



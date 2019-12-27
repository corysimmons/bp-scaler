const bpScaler = require('./bundle')

test('bpScaler', () => {
  expect(bpScaler(10, 20, {
    d: '0px',
    s: '400px',
    m: '800px',
    l: '1200px'
  })).toEqual({
    d: '1em',
    s: '1.3333333333333335em',
    m: '1.666666666666667em',
    l: '2em'
  })
})
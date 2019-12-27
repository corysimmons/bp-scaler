# bp-scaler

When given an object with named breakpoints, and min/max px values, it returns an `em` scale matching those breakpoints.

`yarn add bp-scaler`

```js
import bpScaler from 'bp-scaler'

bpScaler(10, 20, {
  d: '0px',
  s: '400px',
  m: '800px',
  l: '1200px'
})
// {
//   d: '1em',
//   s: '1.3333333333333335em',
//   m: '1.666666666666667em',
//   l: '2em'
// }
```

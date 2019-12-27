'use strict';

const stepScaler = require('step-scaler');

const bpScaler = (minPx, maxPx, namedBreakpointsObject) => {
  if (typeof minPx !== 'number' || typeof maxPx !== 'number') {
    throw new Error('minPx and maxPx in generateScale() must be numbers')
  }

  const scale = stepScaler(minPx, maxPx, Object.keys(namedBreakpointsObject).length);
  return Object.keys(namedBreakpointsObject).reduce((acc, bp, i) => {
    acc[bp] = `${scale[i] * 0.1}em`;
    return acc
  }, {})
};

module.exports = bpScaler;

/* jshint esnext: true */

import _ from 'lodash';

/**
 * Reduce function.
 *
 * @param {Function} transform
 * @param {*} result
 * @param {*} iterable
 * @return {*} result
 */

export var reduce = (transform, result, iterable) => {
  return _.reduce(iterable, (result, value) => transform(result, value), result);
};

/*
 * Map reducer.
 *
 * @param {Function} transform
 * @return {Function}
 */

export var map = transform => {
  return reduce => {
    return (result, value) => reduce(result, transform(value));
  };
};

/**
 * Filter reducer.
 *
 * @param {Function} test
 * @return {Function}
 */

export var filter = test => {
  return reduce => {
    return (result, value) => test(value) ? reduce(result, value) : result;
  };
};

/**
 * Compose function.
 *
 * @param {Function...} fn
 * @return {Function}
 */

export var compose = (...fns) => {
  return reduce => {
    return (result, value) => {
      let transform = fns.reverse().reduce((reduce, fn) => fn(reduce), reduce);
      return transform(result, value);
    };
  };
};

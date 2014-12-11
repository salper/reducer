/* jshint esnext: true */

/**
 * Identity reducer helper.
 *
 * @param {*} result
 * @param {*} value
 * @return {[*]}
 */

export var identity = (result, value) => [result, value];

/**
 * Concat helper.
 *
 * @param {[*]} result
 * @param {*} value
 * @return {[]}
 */

export var concat = (result, value) => result.concat(value);
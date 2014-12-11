/* jshint esnext:true */

var expect = require('chai').expect;
import {map, filter, compose, reduce} from '../src';
import {identity, concat} from './helper';

describe('A transducer', () => {
  it('should provide a mapper', () => {
    let mapper = map(value => value * 2);

    expect(mapper(identity)(0, 1)).to.eql([0, 2]);
  });

  it('should provide a filter', () => {
    let filterer = filter(value => 0 === value % 2);

    expect(filterer(identity)(0, 2)).to.eql([0, 2]);
    expect(filterer(identity)(0, 3)).to.equal(0);
  });

  it('should compose', () => {
    let composer = compose(
      map(value => value * 2),
      filter(value => 0 === value % 2)
    );

    expect(composer(identity)(0, 1)).to.eql([0, 2]);
    expect(composer(identity)(0, 1.5)).to.equal(0);
  });

  it('should combine map and filter', function () {
    let composer = compose(
      map(value => value * 2),
      filter(value => 0 === value % 2)
    );

    expect(reduce(composer(concat), [], [1, 1.5, 2, 2.5])).to.eql([2, 4]);
  });
});
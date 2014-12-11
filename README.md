Transducer
==========

[![Build Status][status]](https://travis-ci.org/salper/transducer)
[![Dependency Status][deps]](https://david-dm.org/salper/transducer)
[![devDependency Status][devdeps]](https://david-dm.org/salper/transducer#info=devDependencies)
[![Coverage Status][coverage]](https://coveralls.io/r/salper/transducer)

[status]: https://travis-ci.org/salper/transducer.svg?branch=master
[deps]: https://david-dm.org/salper/transducer.svg?theme=shields.io
[devdeps]: https://david-dm.org/salper/transducer/dev-status.svg?theme=shields.io
[coverage]: https://img.shields.io/coveralls/salper/transducer.svg

This is a simple and naive transducer implementation. Transducers allow to apply chained algorithms in a single loop. It also provides more compliant argument positions, for functional programming.

# Example
Using map:
```javascript
import {map, reduce} from 'transducer';

reduce(map(value => value * 2)(concat), [1, 2, 3, 4]);
// => [2, 4, 6];
```
Using filter:
```javascript
import {filter, reduce} from 'transducer';

reduce(filter(value => 0 === value % 2)(concat), [1, 2, 3, 4]);
// => [2, 4]
```
Using compose:
```javascript
import {map, filter, compose, reduce} from 'transducer';

reduce(compose(
  map(value => value * 2),
  filter(value => 0 === value % 2)
)(concat), [1, 1.5, 2, 2.5]);
// => [2, 4]
```

# Licence
MIT.

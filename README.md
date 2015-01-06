Reducer
==========

[![Build Status][status]](https://travis-ci.org/salper/reducer)
[![Dependency Status][deps]](https://david-dm.org/salper/reducer)
[![devDependency Status][devdeps]](https://david-dm.org/salper/reducer#info=devDependencies)

[status]: https://travis-ci.org/salper/reducer.svg?branch=master
[deps]: https://david-dm.org/salper/reducer.svg?theme=shields.io
[devdeps]: https://david-dm.org/salper/reducer/dev-status.svg?theme=shields.io

This is a simple and naive reducer implementation. Reducers allow to apply chained algorithms in a single loop. It also provides more compliant argument positions, for functional programming.

# Example
Using map:
```javascript
import {map, reduce} from 'reducer';

reduce(map(value => value * 2)(concat), [1, 2, 3, 4]);
// => [2, 4, 6];
```
Using filter:
```javascript
import {filter, reduce} from 'reducer';

reduce(filter(value => 0 === value % 2)(concat), [1, 2, 3, 4]);
// => [2, 4]
```
Using compose:
```javascript
import {map, filter, compose, reduce} from 'reducer';

reduce(compose(
  map(value => value * 2),
  filter(value => 0 === value % 2)
)(concat), [1, 1.5, 2, 2.5]);
// => [2, 4]
```

# Licence
MIT.

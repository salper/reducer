Transducer
==========

This is a simple and naive transducer implementation. Transducers allow to apply chained algorithms in a single loop. It also provides more compliant argument positions, for functional programming.

# Example
Using map:
```javascript
import {map, reduce} from 'transducer';

let result = reduce(
  map(value => value * 2)(concat),
  [1, 2, 3, 4]
);
// => result = [2, 4, 6];
```
Using filter:
```javascript
import {filter, reduce} from 'transducer';

let result = reduce(
  filter(value => 0 === value % 2)(concat),
  [1, 2, 3, 4]
);
// result = [2, 4]
```
Using compose:
```javascript
import(map, filter, compose, reduce) from 'transducer';

let result = reduce(compose(
  map(value => value * 2),
  filter(value => 0 === value % 2)
)(concat), [1, 1.5, 2, 2.5]);
// result = [2, 4]
```

# Licence
MIT.

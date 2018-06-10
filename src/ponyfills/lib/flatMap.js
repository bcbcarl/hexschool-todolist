import _flatMap from 'core-js/library/fn/array/flat-map';

const flatMap = (fn, functor) => _flatMap(functor, fn);

export default flatMap;

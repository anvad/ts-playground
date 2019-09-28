
/**
 * from https://stackoverflow.com/questions/208016/how-to-list-the-properties-of-a-javascript-object
 */
function enumProps() {
    var o = Object.create({ base: 0 })
    Object.defineProperty(o, 'yes', { enumerable: true })
    Object.defineProperty(o, 'not', { enumerable: false })
    o[Symbol()] = 4;

    console.log('Object.getOwnPropertyNames=', Object.getOwnPropertyNames(o))
    // [ 'yes', 'not' ]

    console.log('Object.keys=', Object.keys(o))
    // [ 'yes' ]

    for (var x in o)
        console.log('in=', x)
    // yes, base

    console.log('Reflect.ownKeys=', Reflect.ownKeys(o));
    // yes, not, Symbol()

    console.log('Object.getOwnPropertyDescriptors(o)=', Object.getOwnPropertyDescriptors(o))
    console.log(o.properties);
}

enumProps();

Reflect.ownKeys(Symbol)
// output:
// [ 'length',
//   'name',
//   'prototype',
//   'for',
//   'keyFor',
//   'hasInstance',
//   'isConcatSpreadable',
//   'iterator',
//   'match',
//   'replace',
//   'search',
//   'species',
//   'split',
//   'toPrimitive',
//   'toStringTag',
//   'unscopables' ]

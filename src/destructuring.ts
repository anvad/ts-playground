// Like array destructuring, you can have assignment without declaration:

let a: string, b: number;
({ a, b } = { a: "baz", b: 101 });
console.log(`a=${a}, b=${b}`);


module.exports = a;

// object destructuring
let o = {
    a: "foo",
    b: 12,
    c: "bar",
    f: () => { console.log('o.f got called!'); }
};
let { b: first, ...rest } = o;
console.log(`first=${first}, rest=${JSON.stringify(rest, null, 2)}`);
// notice how o.f did not get included in 'rest' variable
//  why?
//  running Object.getOwnPropertyDescriptors(o) shows f is enumarable
//  another way to check the same: o.propertyIsEnumerable('f')
//  so, this explanation from [ts](https://www.typescriptlang.org/docs/handbook/variable-declarations.html) does not make sense
//      Object spread also has a couple of other surprising limits. 
//          First, it only includes an objects’ own, enumerable properties. 
//          Basically, that means you lose methods when you spread instances of an object:

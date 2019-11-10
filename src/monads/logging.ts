export const cube = (n: number) => (n[0]**3);
export const sine = (n: number) => (Math.sin(n[0]));
export const power = (args) => {
    console.log('args=', args);
    console.log(`base= ${args[0]}`);
    console.log(`exponent= ${args[1]}`);
    return args[0]**args[1]};

console.log(sine(cube(3)));
console.log(cube(sine(3)));
console.log(cube(4));
console.log(power([2, 5]));

export const pipe = (...funcs) => (...args) => (funcs.reduce((result, f) => (f(...result)), (args)));
console.log(pipe(cube, sine)(3));
console.log(power([2, 2]));
console.log(pipe(power, cube)(2, 2));

// let pipe2 = (f1) => (f2) => (n) => (f2(f1(n)))
// console.log(pipe2(cube)(sine)(3));
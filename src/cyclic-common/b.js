var a = require('./a'); // (i)
function bar() {
    if (Math.random()) {
        console.log(`in b.bar()`);
        a.foo(); // (ii)
    }
}
exports.bar = bar;
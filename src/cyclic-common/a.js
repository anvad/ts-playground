var b = require('./b');
function foo() {
    console.log('in a.foo');
    b.bar();
}
exports.foo = foo;
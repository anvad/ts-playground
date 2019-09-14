
// testing duck typing.

interface SimpleObject {
    [prop: string]: any;
}

interface Duck {
    name: string;
    quack: () => void;
}

const duck1: Duck = {
    name: 'donald',
    quack: () => { console.log('i am donald. quack!'); },
}

const duckLike1 = {
    name: 'scrooge',
    quack: () => { console.log('i am scrooge. quack!'); },
    rich: true,
}
const duckLike2: SimpleObject = {
    name: 'daisy',
    // quack: () => { console.log('i am scrooge. quack!'); },
    rich: false,
}
duckLike1.newProp = "I am a new prop";
// error since type was implicitly set to the original object

duckLike2.newProp = "I am a new prop";
// no error since SimpleObject allows any string property

function makeDuckQuack(duck: Duck) {
    duck.quack();
}

makeDuckQuack(duck1);


// no errors! so when passing an argument into a function, TS applies duck typing
// i.e. it only cares whether all props required by interface are present.
// note: if duckLike1 did not have a **name** property, TS would still throw an error
// even though makeQuack does not use the **name** property anywhere right now.
makeDuckQuack(duckLike1);

// error! so when passing an argument into a function, TS explicitly statically
// checked whether SimpleObject has all the required props
// TS did not care that I had set name and quack on duckLike2 before calling
// makeDuckQuack
makeDuckQuack(duckLike2);


// forcing type coercion, i am past the error duing TS check/compilation
//  but this will lead to run-time error
//  since TS is not really checking whether duckLike2 has quack function
makeDuckQuack(duckLike2 as Duck);


// and we can even pass duckLike1 to an array of ducks, without errors
const ducks: Duck[] = [duck1, duckLike1];

interface DuckFamily {
    rel1: Duck,
    rel2: Duck,
}

// and no problem assigning duckLike to an object expecting a duck.
const duckFamily: DuckFamily = {
    rel1: duck1,
    rel2: duckLike1,
}



// see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-6.html

class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

class Cat extends Animal {
    meow() {
        console.log('Meow! Meow!');
    }
}

declare let f1: (x: Animal) => void;
declare let f2: (x: Dog) => void;
declare let f3: (x: Cat) => void;

// f1 = f2;  // Error with --strictFunctionTypes
/**
 * this is an error since f2 is a function that expects a Dog as an input
 * So, presumable, f2 is doing something (like make it bark) with the Dog that
 * something like every Animal can't do.
 * So, if we assign f2 to f1, and since f1 accepts any animal, we latter pass 
 * an argument to f1 that is an Animal (but not a Dog), then f1 will fail!
 */


f2 = f1;  // Ok
/**
 * this is Ok, since f1 accepts any Animal and can only do things with the Animal 
 * that the Animal interface allows. So, if we assign f1 to f2, and then later 
 * pass in a dog to f2, we are still OK since a Dog satisfies all the properties 
 * of an Animal.
 */


// f2 = f3;  // Error
/**
 * this is more obviously a problem, since we don't know what property of 
 * a Dog f3 will access and there is no guarantee that Cat implements all of 
 * those properties.
 */
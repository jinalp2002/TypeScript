"use strict";
//example 1
Object.defineProperty(exports, "__esModule", { value: true });
function product(category) {
    if (typeof category === "number") {
        console.log(`Your product is in number ${category.toFixed} `);
    }
    else {
        console.log(`Your product is in string ${category.charAt}`);
    }
}
// product(11);
product("jinal");
//Example 2  INSTANCE OF
//return true false
class Person {
}
const user = new Person();
console.log(user instanceof Person); // true
//console.log(user instanceof ); // true
class dog {
    bark() {
        console.log("it is a dog");
    }
}
class cat {
    xyz() {
        console.log("it is a dog");
    }
}
function animals(anim) {
    if (anim instanceof dog) {
        anim.bark();
    }
    else {
        anim.xyz();
    }
}
console.log(animals);
//type guard
//instanceof
//typeof
//in
//type narrowing
// result 
//# sourceMappingURL=Typenarrowing.js.map
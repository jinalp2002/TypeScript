"use strict";
//Type narrowing is used for check data type 
// such as  formvalidation
// api request 
//input data
Object.defineProperty(exports, "__esModule", { value: true });
function product(category) {
    if (typeof category === "number") {
        console.log(`Your product is in number ${category.toFixed} `);
    }
    else {
        console.log(`Your product is in string ${category.charAt}`);
    }
}
product(11);
product("jinal");
function details(persons) {
    if ("role" in persons) {
        console.log("admin");
    }
    else {
        console.log("user");
    }
}
//details({ name: "Jinal", role: "Manager" });
details({ name: "Raj", email: "raj@gmail.com" });
//# sourceMappingURL=Typenarrowing.js.map
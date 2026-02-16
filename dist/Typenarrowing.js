"use strict";
//Type narrowing is used for check data type 
// such as  formvalidation
// api request 
//input data
Object.defineProperty(exports, "__esModule", { value: true });
function details(persons) {
    if ("role" in persons) {
        console.log({ name: "Jinal", role: "Manager" });
    }
    else {
        console.log({ name: "Raj", email: "raj@gmail.com" });
    }
}
console.log(details);
//# sourceMappingURL=Typenarrowing.js.map
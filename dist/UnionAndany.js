"use strict";
//++++++++++++++++++++= UNION ++++++++++++++++++++++++++++++++++
//Union Type = Ek variable multiple types le sakta hai
Object.defineProperty(exports, "__esModule", { value: true });
let num = 11; // value string pan chalse ne number pan chalse is called Union
//console.log(num);
let value;
value = "Jinal"; //  allowed
value = 25; //  allowed
//value = true;      //  error
function printId(id) {
    console.log("Your ID is:", id);
}
//printId(101);      // allow
//printId("A101");   // allow
//+++++++++++++++++++++++++ ANY +++++++++++++++++++++++++++++++++
//KOI PAN TYPE NA DATA ACCEPT KARE CHHE
let valu;
valu = "jinal";
valu = 11;
valu = true;
valu = false;
console.log(valu); // all type are accepted it use when you don't know datatype
//# sourceMappingURL=UnionAndany.js.map
"use strict";
//++++++++++++++++++++++++++ Type Assertion +++++++++++++++++++++++++
Object.defineProperty(exports, "__esModule", { value: true });
let val = "11";
let value = val.toFixed; // . pachhi suggestion ma number na variables apse
// assertion batave chhhe ke data no type(string) lai lo pan realrun time ma error avi sake chhe
//assertion ma data type jate define karvo pade ke xyz data ne please aa type rakho am (data as string)
//+++++++++++++++++++++++++++++++++ Unknown +++++++++++++++++++++++++++++
// unknwn ma type guard use thay chhe
let data = new Date();
if (data instanceof Date) {
    //console.log(data.getDate()); 
}
//+++++++++++++++++++++++++ ANY ++++++++++++++
let num;
num = 11,
    num = "xyz",
    num = 5.2,
    num = true;
//num.touppercase()  // no error now (realrun time error may be occur)  
//++++++++++++++++++++++++++ Unknown ++++++++++++++++++++++
let newnum;
newnum = "jinal";
if (typeof newnum === "string") {
    console.log(newnum.toUpperCase());
}
//# sourceMappingURL=moretypes.js.map
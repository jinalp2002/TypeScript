//++++++++++++++++++++= UNION ++++++++++++++++++++++++++++++++++
//Union Type = Ek variable multiple types le sakta hai



let num: string | number = 11 // value string pan chalse ne number pan chalse is called Union

//console.log(num);


let value: string | number;

value = "Jinal";   //  allowed
value = 25;        //  allowed
//value = true;      //  error



function printId(id: string | number) {
  console.log("Your ID is:", id);
}

//printId(101);      // allow
//printId("A101");   // allow


//+++++++++++++++++++++++++ ANY +++++++++++++++++++++++++++++++++

//KOI PAN TYPE NA DATA ACCEPT KARE CHHE

let valu: any;
valu = "jinal";
valu = 11;
valu = true;
valu = false;

console.log(valu); // all type are accepted it use when you don't know datatype

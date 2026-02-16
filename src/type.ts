// basic Type 

type User = {
  name: string;
  age: number;
};

const u1: User = {
  name: "Jinal",
  age: 22,
};

//Union type

type name =  string| number;

function Nme(naam:name) {
      if (naam === "string"){
            console.log("it is a string");
            
      }else{
            console.log("it is a number");
            
      }
}
console.log(Nme);


//Function type

type greet= (name:string)=>string;
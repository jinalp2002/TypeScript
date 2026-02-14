// ++++++++++++++++++++++++++++++ Interface +++++++++++++++++++++++++++
// It creates atructure of objects and defines the type of properties
// It used only for object and class


//++++++++++++++++++++++++++++++ Extends +++++++++++++++++++++++++++++++++
interface User {
  name: string;
  age: number;
}

interface Employee extends User {
  salary: number;
}

const c2: Employee = {
  name: "jinal",
  age: 23,
  salary: 10000
};

console.log(c2);



//+++++++++++++++++++++++++++++++ Implement +++++++++++++++++++++++++++++++
// Implements matlab class ko kisi interface ka rule follow karna padega compalsory

interface user{
      name: string;
      age: number;
      lastname: string;
      address: string;
}



class  students implements  user{
       name: string = "jinal"
      age: number = 23;
      lastname: string = "patel";
      address:string =  "xyz";
}

const c1= new students();
console.log(c1);


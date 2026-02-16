//Type narrowing is used for check data type 
// such as  formvalidation
// api request 
//input data

//example 1

type Category = string | number; // type create Category is a type and string number is value of type

function product(category: Category) {
  if (typeof category === "number") {
    console.log(`Your product is in number ${category.toFixed} `);
  } else {
    console.log(`Your product is in string ${category.charAt}`);
  }
}

product(11);
product("jinal");



//Example 2  INSTANCE OF
//return true false
// class Person {}

// const user = new Person();

// console.log(user instanceof Person); // true
// console.log(user instanceof ); // true


// class dog{
//   bark(){
//     console.log("it is a dog");
    
//   }
// }
// class cat{
//   xyz(){
//     console.log("it is a dog");
    
//   }
// }

// function animals(anim:dog | cat) {
//     if(anim instanceof dog){
//       anim.bark()
      
//     }else{
//       anim.xyz()
//     }
// }
//console.log(animals);


//type guard

//instanceof
//typeof
//in

//type narrowing
// result  

// typeof is used when the data is in primitive
// string , number , boolean , bigint , undefined , symbol

//Instanceof is used when the data is in class object base



//Example 3:- In

type admin = {
  name : string;
  role : string;
}
type user ={
  name: string;
  email:string;
}

function details(persons:admin| user) {
     if ("role" in persons ){
      console.log("admin");
    }else{
      console.log("user");
      
    }
}
//details({ name: "Jinal", role: "Manager" });
details({ name: "Raj", email: "raj@gmail.com" });

 

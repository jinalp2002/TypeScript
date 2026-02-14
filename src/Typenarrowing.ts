//example 1

type Category = string | number; // type create Category is a type and string number is value of type

function product(category: Category) {
  if (typeof category === "number") {
    console.log(`Your product is in number ${category.toFixed} `);
  } else {
    console.log(`Your product is in string ${category.charAt}`);
  }
}

// product(11);
product("jinal");



//Example 2  INSTANCE OF
//return true false
class Person {}

const user = new Person();

console.log(user instanceof Person); // true
//console.log(user instanceof ); // true


class dog{
  bark(){
    console.log("it is a dog");
    
  }
}
class cat{
  xyz(){
    console.log("it is a dog");
    
  }
}

function animals(anim:dog | cat) {
    if(anim instanceof dog){
      anim.bark()
      
    }else{
      anim.xyz()
    }
}
console.log(animals);


//type guard

//instanceof
//typeof
//in

//type narrowing
// result 
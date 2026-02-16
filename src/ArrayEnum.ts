const name : string[] = ["jinal" , "dhruvi" ,"patel"] // array string

const num :number[] = [10 , 12 , 13 , 11] // array number

const Name :(string | number)[]= ["jinal" , 11] // array with union

//array with object
type user = {
      name : string;
      age: number;
} 
 
const users :user[] =[
    {name: "jinal" , age: 11 },
    {name: "dhruvi" ,age: 20}
]
    
//Readonly array

const nums: readonly number[] =[1,2,3]

//nums.push(4); // error


//Tuple (fixed length array)

const cartoon : [string , number] = ["doreamon" , 2]
// order important
// 1 string
// 2 number
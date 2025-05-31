//primitive
//7 types : String , number, boolean, null, undefined

const score=false
console.log(typeof score)
const out=null  //define=null
let something; //=> undefined or
let some_thing=undefined   //; or not

const id=Symbol('123')
const another_id=Symbol('123')

console.log(id===another_id); //false since symbol is unique value so diff return val
const bigNum=23245465555n  //big int

//reference/non primitve type
//Array, object, functions
//datatype obj hi hota hai for non primitive
const arr=["yoy","yoyoyo","yyoyoyoyo"] //arrys
let myobj={    //object
    name: "hitesh",
    age: 22,
}


const myfun=function()
{
    console.log("yoyo");
}

console.log(typeof bigNum);



//*********memory */
//stack &  heap
//stack memory: all orimitive type : copy
//heap memory: all non primitive type : reference

let userOne={
    email:"rnreng@gnjr.com",
    upi:"user@fnj"
}
let usertwo=userOne
usertwo.email="nfjn@kkmk"

console.log(userOne.email);
console.log(usertwe.email);//reference: val change go jayegi


function UserCreator(name,score) {
  this.name=name;
  this.score=score;
}
UserCreator.prototype.increment=function() {
  this.score++;
  console.log(this.score);
}
UserCreator.prototype.login=function() {
  console.log('login');
}

const user1= new UserCreator('yash',10);
user1.increment();


// functions in js are a combo of function and object. In the object part it has a property called prototype.
/*
prototype points to an inner object where all the methods of the custom objects that we create by the new keyword are stored.

new keyword does 3 things for us behind the scenes.

When new UserCreator('yash',10) call is made, this keyword inside the userCreator points to an empty object in which name and score properties are made.
This object has a hidden property: __proto__ that points to the prototype object inside the UserCreator(function) object.
So, UserCreator.prototype points to the inner object of the function(UserCreator) object.

And finally new keyword returns that object(the one with binding of this keyword inside the userCreator function).

user1 now has an object which has the properties: name and score in it and its hidden property:__proto__ pointing to the prototype object of UserCreator function.

*/

/*
	Now invoking the user1.increment()
	js do not find increment() inside the user1 object and so it looks to the prototype object through this __proto__ binding to the 
  UserCreator.prototype object.
	It finds increment() there and now an execution context is created for increment().
	the this keyword inside the increment() points to the user1 object( implicit binding). The this keyowrd here is totally different from the this keyword that was used to refer a new object when 
  new UserCreator('yash',10) call was made.
	Since, the this keyword points to the user1 object and we have the score property inside it, so this.score++ is user1.score++ and it has become 11 as the initial value of score was 10 when we made the 
	new UserCreator('yash',10) call.
*/




function UserCreator(name,score) {
	this.name=name;
  	this.score=score;
}
UserCreator.prototype.increment=function() {
/* 	function add1(){
	    this.score++;
	    console.log(this.score);
	  }
	  add1(); */
    	const add1=()=>{
    	    this.score++;
            console.log(this.score);
    }
    add1();
}
UserCreator.prototype.login=function() {
	console.log('login');
}

const user1= new UserCreator('yash',10);
user1.increment();

/*
In this scenario also, we have object in user1 with properties name and score and its hidden property __proto__ pointing to UserCreator.prototype with increment and login methods inside the prototype object of UserCreator function.
on invoking user1.increment() , new execution context is created and this keyword inside the add1() method is now not pointing to user1 but rather window (globalObject) , hence, this.score++ is window.score++ which will be undefined++ and will result in NaN.

To make it work we should implement the add1() as an arrow function. Arrow functions take the value of this keyword from its enclosing lexical scope which in this case is increment() in the prototype object of UserCreator function. Value of this keyword inside the increment() is user1 object (user1.increment()) and so this.score++ is user1.score++ and hence we get the output 11 as in the previous case. 

*/


class UserCreator {
	constructor(name,score) {
  	this.name=name;						
        this.score=score;
  }
  increment() {
  	this.score++;
  }
  login() {
  	console.log('login');
  }

}
const user1=new UserCreator("yash",10);
user1.increment();

	/*
  constructor(name,score) {
  	this.name=name;						
    this.score=score;
  }   
  is playing the role of 
  
  function UserCreator(name,score) {
  this.name=name;
  this.score=score;
}
 increment() {
  	this.score++;
  }
  login() {
  	console.log('login');
  }
The function combo of object and a normal function with prototype property inside that object and the prototype property pointing to the inner object where all the methods of the object 
are stored is now handled by the class keyword in Js.

new keyword is setting the this keyword  to the object created by the constructor(), pointing the __proto__ of that object to the prototype of UserCreator() and returning the object.
  */

// Prototypal chaining and inheritance
/*
	Every object in js has a __proto__ property.
	Every function in js is an object,the prototype property of the function(object and function combo of function) has its own __proto__ property as 
	prototype is itself an object.
	
Also js by default gives us Object, Function and Array as function+object combo with the object combo having the prototype object and their own hidden properties __proto__

If finding a property in functions that are not inside them , their __proto__ (from the object part of the function) looks in the Function prototype property, if not found there then the __proto__ inside the Function.prototype object looks in the Object.prototype object. If not found there then error is thrown as the __proto__ of the Object.prototype object points to null. That is the last in the chain.

If finding a property in objects that are not inside them , their __proto__ looks for that in the Object.prototype object. If not found there then the error is thrown as the __proto__ of the Object.prototype object points to null. That is the last in the chain.

If finding a property in arrays that are not inside them , their __proto__ looks for that in the Array.prototype object. if not found there then js looks for that property inside the Object.prototype object through the __proto__ link of the Array.prototype object. Finally if not found in the Object.prototype object then the error is thrown as the __proto__ of the Object.prototype object points to null. That is the last in the chain.

This chain of __proto__ inside our custom objects, arrays and functions and then the __proto__ property inside the Object.prototype, Funciton.prototype and Array.prototype objects is called the prototypal chaining and due to this link/chaining js helps us in getting the access to the properties 
that are so called hidden from us.


The prototypal chaining looks like this:

custom object,s __proto__ -> Object.prototype object (if not found then) Object.prototype,s __proto__ -> null (error is thrown).
custom function,s __proto__ -> Function.prototype object (if not found then)  Function.prototype,s __proto__ -> Object.prototype,s __proto__ -> null (error is thrown).
custom array,s _proto__ -> Array.prototype object (if not found then) Array.prototype,s __proto__  Object.prototype,s __proto__ -> null (error is thrown).
*/

// Getting the value of __proto__ and setting the value of __proto__, taking an example for that

function UserCreator(name,score) {
  this.name=name;
  this.score=score;
}
UserCreator.prototype.increment=function() {
  this.score++;
  console.log(this.score);
}
UserCreator.prototype.login=function() {
  console.log('login');
}

const user1= new UserCreator('yash',10);

console.log(Object.getPrototypeOf(user1)); // user1 by default (due to new keyword)

console.log(user1.__proto__); // user1 by default (due to new keyword)

console.log(Object.getPrototypeOf(user1)===user1.__proto__) // true

const anotherObject={
	prop:10
}

Object.setPrototypeOf(user1,anotherObject) // setting the prototype of user1 to some other object, can be a function or array as well. The prototype can only be set to either some object or null.

console.log(Object.getPrototypeOf(user1))// anotherObject
console.log(Object.getPrototypeOf(user1)===anotherObject); // true
console.log(user1.__proto__===anotherObject) //true

//Imp-> Usage of Object.setPrototypeOf() and Object.getPrototypeOf() is the preferred way rather than using __proto__

// Object.create(null) or Object.create(<custom object>)
/*
if a custom object is passed in create() then the __proto__ link of the created object is linked to the passed custom object.Then the 
prototypal chaining is same as that of any custom object created in Js.
if null is passed in create() then the object created has no properties in it and is created with null prototype.


*/

 

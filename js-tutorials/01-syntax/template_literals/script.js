/******************************************************************************************************************
OLD SYNTAX
******************************************************************************************************************/
function myFunction1 (name, age) {
    return "Hi, I'm " + name + " and I'm " + age + " years old.";
}
console.log(myFunction1('Mark', 28)); // output: Hi, I'm Mark and I'm 28 years old.
/******************************************************************************************************************
OLD SYNTAX
******************************************************************************************************************/

/******************************************************************************************************************
NEW SYNTAX
******************************************************************************************************************/
const myFunction2 = (name, age) => {
    return `Hi, I'm ${name} and I'm ${age} years old.`;
}
console.log(myFunction2('Mark', 28)); // output: Hi, I'm Mark and I'm 28 years old.
/**************************************************
EQUIVALENT TO
**************************************************/
const myFunction3 = (name, age) => `Hi, I'm ${name} and I'm ${age} years old.`;
console.log(myFunction3('Mark', 28)); // output: Hi, I'm Mark and I'm 28 years old.
/******************************************************************************************************************
NEW SYNTAX
******************************************************************************************************************/

/******************************************************************************************************************
EXTRA
******************************************************************************************************************/
let person = {
    name: 'Mark', 
    age: 68, 
    greeting: 'Hi!' 
};

let oldSyntaxString = 
    "<p>My name is " + person.name + ",</p>\n" + 
    "<p>I am " + person.age + " old</p>\n" + 
    "<strong>\"" + person.greeting + "\" is what I usually say</strong>";
/**************************************************
EQUIVALENT TO
**************************************************/
let newSyntaxString =
 `<p>My name is ${person.name},</p>
  <p>I am ${person.age} old</p>
  <strong>"${person.greeting}" is what I usually say</strong>`;
/******************************************************************************************************************
EXTRA
******************************************************************************************************************/
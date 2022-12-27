/*
QUESTIONS:
1. explain the [key] assignment
 */

/**
 Object Enhancements Exercise:
 In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.
 */

// 1. Same keys and values ES2015

function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  }
}
console.log(createInstructor("jane", "doe"));
console.log(createInstructor("bob", "dole"));

// 2. Computed Property Names ES2015

let favoriteNumber = 42;

let instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

console.log(instructor[favoriteNumber]);

// 3. Object Methods

const instructorr = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
}
  
/* 4. createAnimal function using ES2015: Use one or more of the object enhancements we’ve covered.

Write a function which generates an animal object. The function should accept 3 arguments:
1. species: the species of animal (‘cat’, ‘dog’)
2. verb: a string used to name a function (‘bark’, ‘bleet’)
3. noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
*/

const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            return noise;
        }

    }
}

const dog = createAnimal("dog", "bark", "woof");
console.log(dog.bark());

const cat = createAnimal("cat", "meow", "meow");
console.log(cat.meow());
// Assignment No 10 (JavaScript Objects)

// Task No 1: (Create a Object).
let person = {
    name:'Ali Hassan',
    age:10,
    profession:'software Engineer',


    // Task No 3
    introduce: function(){
        console.log("Hi I'm",this.name," My age is",this.age," I am a",this.profession);

    }
}

person.introduce();
// Task No 2: (Print the Values of Object).
console.log("The Name of Person is:"+ person.name);
console.log("The Age of Person is:"+ person.age);
console.log("The Profession of Person is:"+ person.profession);

// Modify the Value.
person.age = 18;
console.log("The Updated Age of Person is:"+ person.age);

// Add new Property in Person Object.
person.address = 'Faisalabad';
console.log("The Address of the Person is:" + person.address);




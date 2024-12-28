//class declaration
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    const { name, age } = this;
    console.log(`I am a ${name} and I am ${age} years old`);
  }
}
const Pet = class extends Person {
  constructor(name, age, food) {
    super(name, age);
    this.food = food;
  }
  eat() {
    const { name, food } = this;
    console.log(`A ${name} eats ${food}`);
  }
};

const myPet = new Pet("dog", 2, "kibble chips");

console.log(myPet);
console.log(myPet.eat());
console.log(myPet.introduce());

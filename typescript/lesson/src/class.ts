class Person {
  constructor(public readonly name: string, private age: number) {
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
  incrementAge() {
    this.age += 1;
  }
}
const tommy = new Person('Tommy', 24);
console.log(tommy);
console.log(tommy.greeting());

class Person {
  name: string;
  private age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
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

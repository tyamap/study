class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }

  greeting(this: Person) {
    console.log('Hello! My name is ${this.name}.');
  }
}
const tommy = new Person('Tommy');
console.log(tommy);
console.log(tommy.greeting());

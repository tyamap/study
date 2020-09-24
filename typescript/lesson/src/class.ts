class Person {
  constructor(public readonly name: string, protected age: number) {
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

class Teacher extends Person {
  constructor(name: string, age: number, private subject: string) {
    super(name, age);
  }
  get _subject() {
    if (!this.subject){
      throw new Error('There is no subject.');  
    }
    return this.subject;
  }

  set _subject(value) {
    if (!value){
      throw new Error('There is no subject.');  
    }
    this.subject = value;
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`);
  }
}
const green = new Teacher('Green', 28, 'English');
console.log(green);
green.incrementAge();
console.log(green.greeting());
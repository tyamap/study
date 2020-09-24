abstract class Person {
  static species = 'Homo sapiens';
  static isAdult(age: number) {
    if (age >= 20) return true;
    return false;
  }
  constructor(public readonly name: string, protected age: number) {
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    this.explainJob();
  }
  incrementAge() {
    this.age += 1;
  }

  abstract explainJob(): void;
}

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

  explainJob() {
    console.log(`I am a teacher, and teach ${this.subject}.`);
  }
}
const green = new Teacher('Green', 28, 'English');
console.log(green);
green.incrementAge();
console.log(green.greeting());

console.log(Person.species);
console.log(Person.isAdult(32));
console.log(Person.isAdult(18));
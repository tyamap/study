interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number, public expelience: number) {
  }
  greeting(message: string) {
    console.log(`Hi. ${message}`)
  }
}

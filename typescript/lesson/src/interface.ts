interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}

const human: Human = {
  name: 'Tommy',
  age: 24,

  greeting(message: string) {
    console.log(message);
  }
}

let developer: Human;
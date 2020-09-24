type Engineer = {
  name: string;
  role: string;
}
type Blogger = {
  name: string;
  follower: number;
}
type EngineerBlogger = Engineer & Blogger;
const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}

/**
 *  Typeガード 
 */
// typeof で絞り込み
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return '';
}
// in 演算子で絞り込み
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ('follower' in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}
class Dog {
  speak() {
    console.log('bow-wow');
  }
}
class Bird {
  speak() {
    console.log('tweet-tweet');
  }
  fly() {
    console.log('flutter');
  }
}

// instanceof で絞り込み
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  if (pet instanceof Bird) {
    pet.fly();
  }
}

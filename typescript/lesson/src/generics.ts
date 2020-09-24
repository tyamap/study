function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  console.log(value[key]);
  return value;
}
console.log(copy({ name: 'Tom', age: 22 }, 'age'));
// クラスの定義
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }   
}

// interface で、プロパティの型を定義できる。
interface Person{
    firstName: string;
    lastName: string;
}
// コンパイル後のJSファイルは変化しない。

function greeter(person: Person){
    return 'Hello, '+ person.firstName + ' ' + person.lastName;
}

let user = new Student('Jane','M,','User');

document.body.textContent = greeter(user);
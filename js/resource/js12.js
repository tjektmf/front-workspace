
// JS 객체(Object)
// key:value를 사용해 객체를 표현함 java의 map과 같음
// JS는 객체를 표현할 수는 있지만 클래스가 따로 존재하지는 않음
let person1 = {
    name: '김철수',
    age: 25,
    sayHello: () => { console.log(`hello ${person1.name}`) },
    sayHello2: function () {
        console.log(`hello ${this.name}`)
    }
}

person1.sayHello();
person1.sayHello2();

let person2 = {}; // let person2 = new Object(); 두 코드는 같음
person2.name = '김철슈';
person2.age = 26;
person2.sayHello = function () {
    console.log(`hello ${this.name}zz`);
}
person2.sayHello();

// 함수를 사용해 동일한 속성을 지닌 인스턴스를 찍어낼 수 있음
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`ㅎㅇ ${this.name}ㅋㅋ`);
    }

}
let person3 = new Person('dd2', 15);
let person4 = new Person('dtd', 22);
person3.sayHello();
person4.sayHello();

// 객체에 값 넣기
person3.name = '감찰수';
person3.sayHello();
person3['name'] = 88;
person3.sayHello();

// 새로운 속성 추가
person3.gender = 'male';
console.log(person3.gender); // 없는값도 걍 대충넣고 부르면 튀어나옴

// 속성 삭제하기
delete person3.gender; // 여기서 삭제함
console.log(person3.gender); // 언파인드

person4.gender = 'male';
person4.weight = 80.33;
person4.exam = 100;


// for ... in 객체 반복 돌리기
for (let key in person4) {
    console.log(key+ ' : ' + person4[key] );

}

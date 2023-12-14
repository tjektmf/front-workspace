
function Animal(realname, nickname, age) {
    this.realname = realname;
    this.nickname = nickname;
    this.age = age;
}

// 콘솔에 해당 인스턴스를 log()보다 더 계층적으로 출력해주는 메서드

console.dir(Animal);

// 이 함수의 프로토타입 내부에 constructor를 사용해 인스턴스를 생성
let gom = new Animal('곰', '미샤', '7');

// 인스턴스는 자신을 생성하는데 사용된 프로토타입에 접근할때 __proto__를 사용
console.log(gom);
console.log(gom.__proto__ === Animal.prototype); // true
console.log(Animal.prototype);

// 해당 인스턴스의 프로토타입을 수정하면 해당 프로토타입으로 만들어진 모든 인스턴스가 수정되는 효과가 있다
gom.__proto__.attack = function () {
    console.log(`${this.realname} ${this.nickname}가 공격함`)
}

// 해당 인스턴스에 같은 이름의 메서드가 있다면 프로토타입보다 현재 인스턴스의 메서드를 우선한다
gom.attack = function () {
    console.log('만들어진 곰에만 추가한 메서드');
}
gom.attack();

const pig = new Animal('돼지', '킁킁이', 4);
pig.attack();


// 문자열 타입조차 수정이 가능함
// str1의 타입은 문자열, String인데 여기 프로토타입에 attack이라는 함수를 추가함
// str2의 타입도 문자열, 방금 String 프로토타입에 추가한 attack이라는 함수를 str2에서도 사용가능함
var str1 = 'imsi text';
str1.__proto__.attack = function(){
    console.log('공격');
}
str1.attack();
var str2 = 'abc';
str2.attack();
 
/* str3의 타입은 number, 여기서는 attack이라는 함수를 사용할 수 없음 Uncaught TypeError: str3.attack is not a function
var str3 = 123;
str3.attack();
*/
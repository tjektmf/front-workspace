
const out = document.getElementById('out');

function println(value) {
    out.innerHTML += value + '<br>';

}
// Number
let num1 = 1234;
let num2 = 123.1234;

console.log(num1);
console.log(num2);
println(num1);
println(num2);

// typeof 를 사용해 해당 값이 어떤 타입인지 문자열로 알려줌

println(typeof num1);
// 소수도 넘버임
println(typeof num2);

console.log(typeof num1); // number
console.log(typeof num2); // number
console.log(typeof typeof num2); // String

// Number 타입의 신기한 값 : 
println(10 / 0); // Infinity, 무한값이 존재함
println(3 * 'abc'); // NaN, not a number, 숫자가 아니다
println(typeof Infinity); // 무한도 number 타입임
println(typeof NaN); // 숫자가 아닌 것도 number 타입임


// Number 타입의 자양한 진법 리터럴
println(10); // 10진수
println(0b10); // 2진수 바이너리
println(0o10); // 8진수 옥토
println(0x10); // 16진수

println(16 == 0x10);

// String
let str1 = '바보';
let str2 = "123.123";
// 이런거할때 큰따옴표 사용하면 중간에 escape 써야함 손이많이가고 귀찮음
let str3 = '<div id="div1"></div>';

// 딱봐도 귀찮아보임
let str4 = "<div id=\"div1\"></div>";

// Escape seq
// ''를  쓴다면 내부 '에 escape 필요하고 ""를 쓴다면 필요없음
str1 = '김\'철수\'';
str2 = "김'철수'"


println(typeof str1);
println(typeof str2);

// Boolean
let isPrime = true;
isPrime = false;
println(typeof isPrime);

// undefined
let abc;

// 선언하지않으면 값도 타입도 undefined
println(abc); // undefined
println(typeof abc); // undefined
println(typeof typeof abc); // String

// null
let minsu = null;
println(minsu); // null, 현재 가리키는 인스턴스가 없음
println(typeof minsu); // Object

// Array []
let colors = ['red', 'tomato', 'orange', 'skyblue'];
let arr1 = ['str', 13, 17, 12.12, 'abc'];
console.log(colors);
console.log(arr1);
println(colors);
println(arr1);

// Javascript Object (Java의 Map과 비슷함, key와 value를 가짐)
let minwoo = {
    name: '민우',
    age: 20,
    math: 99,
    0: 'red',
    1: 'orange'
};
console.log(minwoo);

// 접근 방식 두가지
console.log(minwoo['name']);
console.log(minwoo['age']);
console.log(minwoo['math']);
console.log(minwoo[0]);
console.log(minwoo[1]);
console.log(minwoo[2]); // undefined, index 2에 해당하는 값을 가져오는게 아니라 key가 2임
console.log(minwoo.name);
console.log(minwoo.age);
console.log(minwoo.math);
// console.log(minwoo.0); 이건 그냥안됨 외않되? 그냥 그렇게 만듬



console.log(add(1, 3));

// 위아래 순서가 존재하지만 함수선언, 변수선언은 코드 위치가 상관없이 우선 실행함
function add(num1, num2) {
    return num1 + num2;
}
function add2(num1) {
    return num1 + x;
}

// 변수선언은 먼저 실행되지만 대입은 나중에 일어나서 undefined가 일어나는 경우가 발생함
console.log(x); // undefined
console.log(add2(1)); // NaN, 아직 x에 대입이 일어나지 않음
var x = 10; // var x; 가 우선실행되고 코드 순서에 따라 x = 10;이 실행된다고 생각하면 됨
console.log(x); // 10
console.log(add2(1)); // 11

// 함수의 기본적인 선언은 function 키워드를 사용함
// 자바의 메서드와 다르게 리턴 타입은 적지 않음
function mul3(num) {
    console.log(num * 3);
}
mul3(123);
console.log(mul3(234)); // 리턴이 없어서 undefined를 리턴함

// JS의 함수는 변수에 넣을 수 있다
let myFunction = mul3; // mul3을 그냥 쓰는 것은 mul3이라는 함수 그 자체를 의미
let myFunctionResult = mul3(); // mul3이라는 함수의 실행 결과를 리턴받아 사용하겠다는 의미

console.log(myFunction); // ƒ mul3(num){console.log(num*3);}
console.log(myFunction(3)); // 9가 나온 후 undefined가 나옴 일단 myFunction이 발동하면서 펑션속 console.log(num * 3); 발동해 9를 출력
// 이후 리턴값이 없으므로 console.log(myFunction(3));는 언디파인드를 출력
mul3(3); // 9

// 함수 표현식 : 변수에 함수를 넣어놓는 방식으로 선언
const gop2 = function (num) { //function 'mul2'(num){
    return num * 2;
}

// 함수 표현식으로 선언한 함수는 변수명으로만 실행할 수 있음
//mul2(123);  mul2 is not defined, 그래서 위에 주석처럼 mul2를 안씀 의미가 없음
console.log(gop2(123)); // 246

// 함수 표현식 축약형 (화살표 함수) 
// 함수 표현식은 변수선언과 같아서 ;를 사용해야함 함수선언은 없어도댐
// 또한 변수선언의 느낌이라 우선실행되지않고 코드의 순서대로 실행됨
const gop4 = (num) => {
    return num * 4;
};
console.log(gop4(5)); // 20

// 화살표 함수 사용시 해당 함수의 내용이 리턴 한 줄이라면 다음과 같이 축약 가능
// 상황에 따라 (), return, {} 생략가능
const gop5 = num => num * 5; // 이거 괜찮은듯
const gop6 = (num1, num2) => num1 * num2; // 매개변수가 2개면 () 써야함

console.log(gop5(5)); // 25
console.log(gop6(2,5)); // 10

// Cannot access 'gop8' before initialization
// 함수 표현식은 함수선언과 다르게 밑에있으면 사용할 수 없음
// 표현식의 일부인 함수선언부분만 먼저 실행되는데 내용이 없어서 오류뜸
const gop8 = num => console.log(num*8);
console.log(gop8(33)); // 264와 언디파인드 두개뜸

/*
function gop9(num){
    var count = 10;
    return num *9;
}
gop9(3);
console.log(count);
*/

// parseInt() : 다양한 타입을 number 타입 정수로 변환
console.log(parseInt(123.123));
console.log(parseInt('123123'));
console.log(parseInt('123.123'));

//숫자가 될 수 없는 값은 NaN이 나옴
console.log(parseInt('FF00'));
console.log(parseInt('Lion'));

// 16진법이라고 값을 추가해주면 변환 가능함
console.log(parseInt('FF00', 16));
console.log(parseInt('F0', 16));
console.log(parseInt('764', 8));

// 숫자를 문자열로 변환
let numStr = (123).toString();
console.log(`value : ${numStr}, type : ${typeof numStr}`);
numStr = (123.123).toString();
console.log(`value : ${numStr}, type : ${typeof numStr}`);

// 숫자 인스턴스 생성
console.log(Number('abc')); // 숫자 아닌건 NaN
console.log(Number('123.123')); // 숫자인 문자열 넣으면 그 숫자가 나옴
console.log(Number(1234)); // 숫자는 당연히 나오고
console.log(Number(true)); // true는 1
console.log(Number(false)); // false는 2
console.log(Number(new Date())); // date에 해당하는 밀리초가 나옴 걍그런갑다

//
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

// Number.## 이것저것 많음 알아서 활용

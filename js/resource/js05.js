console.log(10 + 1);
console.log(10 - 1);
console.log(10 * 3);
console.log(10 / 4); // Java는 2가 나오는데 JS는 2.5가 나옴
console.log(parseInt(10 / 4)); // 소숫점 날려서 2나옴
console.log(255 % 16);
console.log('---------');


let a = 20;
let b = 17;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

let c = 1;
let d = '1';
// == 또는 != 는 1과 '1'을 같은 것으로 판단함
console.log('1==\'1\':', c == d);
console.log('1!=\'1\':', c != d);

// === 또는 !== 는 1과 '1'을 다른 것으로 판단함
console.log('1===\'1\':', c === d);
console.log('1!==\'1\':', c !== d);
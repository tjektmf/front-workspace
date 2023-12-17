


// 배열은 []로 만듬
const fruits = ['야스오', '상어', '귤', '포도', '초코', '푸들', '광어'];

// 콘솔에 출력은 후순위라 콘솔을 보면 아래에서 푸시한 값들이 전부 들어가있음
console.log(fruits);
console.log(typeof fruits);

// push(item) : 배열의 맨 뒤에 요소를 추가하고 배열의 길이를 반환함
fruits.push('apple'); // 1
console.log(fruits.push('kiwi')); // 2
console.log(fruits.push('melon')); // 3
fruits.push('mengo'); // 4
console.log(fruits.push('mengo')); // 5 망고가 4번 5번에 두번 들어갔기 때문임

// pop() : 배열의 맨 뒤 요소를 제거한다. 제거 후 제거한 요소를 반환한다
console.log(fruits.pop()); // 5번 자리에 있는 맹고를 제거하면서 맹고를 반환함
console.log(fruits);

// shift() : 맨 앞의 값을 꺼내면서 삭제
console.log(fruits.shift());
console.log(fruits);

// unshift() : 맨 앞에 값을 추가
console.log(fruits.unshift('아이언맨'));
console.log(fruits);

// reverse() : 현재 배열의 순서를 거꾸로 뒤집는다
console.log(fruits.reverse());
console.log(fruits);

// sort() : 배열안의 데이터를 정렬한다
console.log(fruits.sort());
console.log('정렬 후 : ', fruits);

// sort(compareFn) : 내가 원하는 기준으로 배열안의 내용들을 정렬한다
const numbers = [99, 1, 5, -20, 222, 57, 72, 12];
//   console.log(numbers.sort());

const myComparator = function (a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}
const sorted = numbers.sort(myComparator);
console.log(sorted);


/*
    1. 배열에 랜덤으로 1~45 사이의 숫자를 1000개 추가
    2. 각 숫자들이 나온 횟수를 센다
    3. 가장 많이 나온 숫자 6개를 HTML에 동그란 공모양으로 출력
*/

const richman = [];
const richman2 = []; // 개수
const richman3 = []; // 숫자 자체

let longlong = 1000;
let shortshort = 1000;
for (let i = 0; i < 1000; i++) {
    richman.push(parseInt(Math.random() * 45) + 1);
}
console.log(richman.sort(myComparator));
for (let i = 0; i < 1000; i++) {
    if (richman[0] === richman[1]) {
        console.log(richman[0]);
        richman.shift();
    } else {
        richman2.push(longlong - richman.length);

        richman3.push(richman[0]);
        richman.shift();
        longlong = richman.length;

    }
}
console.log(richman);
console.log(richman2);
console.log(richman3);
console.log('-------------');

let save;
let save2;
let set = 0;
while (set < 100) {

    for (let i = 0; i < 45; i++) {
        if (richman2[i] < richman2[i + 1]) {
            save = richman2[i];
            richman2[i] = richman2[i + 1];
            richman2[i + 1] = save;

            save2 = richman3[i];
            richman3[i] = richman3[i + 1];
            richman3[i + 1] = save2;
        }

    }
    set++;
}
console.log(richman);
console.log(richman2);
console.log(richman3);


const round = document.getElementById('round');
round.style.display = 'grid';
round.style.gridTemplateColumns = 'repeat(6,1fr)';
//round.style.border = '1px solid black';
//round.style.borderRadius = '100px';
//round.style.textAlign = 'center';

for (let i = 0; i < 6; i++) {
    round.innerHTML += '<div>' + ans(i) + '</div>';
}
function ans(index) {
    return richman3[index];
}

const lottoDiv = document.getElementById('lotto');
const lottoCnt = [];
const lottoNums = [];

function LottoNum(num, cnt) {
    this.num = num;
    this.cnt = cnt;
}

for (let i = 0; i < 1000; i++) {
    lottoNums.push(parseInt(Math.random() * 45 + 1));
}

for (let i = 0; i < 45; i++) {
    lottoCnt[i] = new LottoNum(i + 1, 0);
}

for (let i = 0; i < 1000; i++) {
    lottoCnt[lottoNums[i] - 1].cnt++;
}

// 기본적으로 sort는 값이 같을때 0을 리턴, 리턴값이 1일때 순서를 바꾸고 -1일때 순서를 바꾸지 않음
// 즉 a > b 인데 리턴값을 -1을 주면 바꾸지 않겠다는 뜻이므로 큰 수 부터 내림차순으로 정렬하겠다는 의미 descend
// a > b 인데 리턴값을 1을 주는 경우는 순서를 바꾸겠다는 뜻이므로 작은 수가 제일 앞에와서 오름차순으로 정렬함 ascend
// 조건 내용이 참일때 자리를 바꾸겠다 > 1 (positive) 양수를 리턴, 자리를 바꾸지 않겠다 > -1 (negative) 음수를 리턴
lottoCnt.sort((a, b) => { // lottoCnt를 sort함
    if (a.cnt > b.cnt) { // a.cnt < b.cnt 일 때 음수를 리턴하면 내림차순임 descend
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
});

console.log('----------');
console.log(lottoCnt);

for (let i = 0; i < 6; i++) {
    lottoDiv.innerHTML += `<div>${lottoCnt.shift().num}</div>`;
}
/*
lottoDiv.innerHTML += `<div>${lottoCnt.shift().num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt.shift().num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt.shift().num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt.shift().num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt.shift().num}</div>`;
*/

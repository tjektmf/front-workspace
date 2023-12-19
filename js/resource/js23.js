// setItem(key, value) : 해당 스토리지에 데이터를 저장함
sessionStorage.setItem('money', 5000);
localStorage.setItem('age', 30);

// removeItem(key) : key를 사용해 데이터를 삭제
// sessionStorage.removeItem('money');

// getItem(key) : key를 사용해 value를 리턴
const data = sessionStorage.getItem('money');
const data2 = localStorage.getItem('age');
const data3 = sessionStorage.getItem('age');

// 개발자도구 - 어플리케이션 - 스토리지
//console.log(data);
//console.log(data2);
//console.log(data3);

// ---------------

// 처음 25개는 1부터시작, 그다음 25개는 26부터 시작
// 각 1~25, 26~50의 배열을 numberBox에 집어넣음
let gameNum1 = 1;
let gameNum2 = 26;
const numberCheck = document.getElementById('main');
const numberBox = [];
const numberBox2 = [];


// 게임결과로 저장된 기록들 rankSort에 저장, 코드 순서 때문에 올림
let rankSort = [];
let rankS = 1;
while (localStorage.getItem('thx' + rankS) != null) {
    rankSort[rankS - 1] = localStorage.getItem('thx' + rankS);
    rankS++;
}

// numberBox, numberBox2 순서대로 입력
for (let i = 1; i < 26; i++) {
    numberBox[i - 1] = i;
}
for (let i = 1; i < 26; i++) {
    numberBox2[i - 1] = i + 25;
}

// numberBox, numberBox2 셔플
for (let i = 0; i < 1000; i++) {
    let random = parseInt(Math.random() * 25);
    let save = 0;
    save = numberBox[0]
    numberBox[0] = numberBox[random];
    numberBox[random] = save;
}
for (let i = 0; i < 1000; i++) {
    let random = parseInt(Math.random() * 25);
    let save = 0;
    save = numberBox2[0]
    numberBox2[0] = numberBox2[random];
    numberBox2[random] = save;
}

// 잘 섞였나 콘솔에서 확인
console.log(numberBox);
console.log(numberBox2);

// numberBox에서 순서대로 25개 불러옴
for (let i = 0; i < 25; i++) {
    numberCheck.innerHTML += '<div>' + numberBox[i] + '</div>';
}

let gameStart = false;
let clearNumber = 1;
let storageNumber = 'thx' + (rankSort.length + 1);

// 다음 클리어시 랭크되는 숫자
console.log(storageNumber);

// 버튼 순서대로 눌러서 1~25는 numberBox2에서 순서대로 불러오고 26~50은 숨김
document.body.addEventListener('click', (e) => {

    if (gameNum1 === 2) {
        gameStart = true;
    }

    if (e.target.innerHTML == gameNum1 && gameNum2 < 51 && gameNum1 < 26) {
        e.target.innerHTML = numberBox2.shift();
        gameNum1++;
        gameNum2++;
        console.log(timeStart);
    } else if (gameNum1 >= 26 && e.target.innerHTML == gameNum1) {
        e.target.style.visibility = 'hidden';
        gameNum1++;
        gameNum2++;
    } else {
        console.log('틀렸어~');
    }

    if (gameNum1 > 50 && gameStart) {
        console.log('game clear');
        clearInterval(interval_timer);
        localStorage.setItem(storageNumber, timeStart);
        gameStart = false;
    }
})

// 타이머
let timeStart = 0;
const interval_timer2 = setInterval(() => timeStart += 0.1, 100);
const interval_timer = setInterval(() => clock.innerHTML = timeStart.toFixed(1), 15);
const clock = document.querySelector('#clock');
console.log(clock.innerHTML);

// 랭크
const rank = document.querySelector('#rank');
rank.innerHTML += `<div> Thanks for playing </div>`;

// 저장된 기록들을 오름차순으로 sort
rankSort.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    } else {
        return 0;
    }
});

// sort 됐는지 콘솔에서 확인
console.log(rankSort);

// 1~3등만 화면에 보여줌
for (let i = 1; i < 4; i++) {
    rank.innerHTML += `<div> ${i}등 ${rankSort[i - 1]} </div>`;
}

// 테스트용 입력값
localStorage.setItem('thx1', 26.7);
localStorage.setItem('thx2', 42.2);
localStorage.setItem('thx3', 66.5);
localStorage.setItem('thx4', 32.9);
localStorage.setItem('thx5', 52.1);
localStorage.setItem('thx6', 12.4);
localStorage.setItem('thx7', 72.6);
localStorage.setItem('thx8', 48.2);
localStorage.setItem('thx9', 36.4);
localStorage.setItem('thx10', 40.1);
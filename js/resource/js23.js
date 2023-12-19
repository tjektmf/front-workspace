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

const main = document.querySelector('#main');


let startNum = 1;

const makeNumDiv = () => {

    const numDiv = document.createElement('div');
    //  const numText = document.createTextNode(startNum++);
    console.log(numDiv);

    numDiv.classList.add('num');
    //  numDiv.appendChild(numText);


    numDiv.addEventListener('click', (e) => {
        if (e == 5) {
            console.log(e.target);
        } else {

        }
    });

    return numDiv;
};

const num = document.querySelector('.num')


/*
for (let i = 0; i < 25; i++) {
    main.appendChild(makeNumDiv());
};
*/
let gameNum1 = 1;
let gameNum2 = 26;
const numberCheck = document.getElementById('main');
const numberBox = [];

for (let i = 1; i < 26; i++) {
    numberBox[i - 1] = i;
}
for (let i = 0; i < 100; i++) {
    let random = parseInt(Math.random() * 25);
    let save = 0;
    save = numberBox[0]
    numberBox[0] = numberBox[random];
    numberBox[random] = save;
    
}
console.log(numberBox);

for (let i = 0; i < 25; i++) {
    numberCheck.innerHTML += '<div>' + numberBox[i] + '</div>';
}
document.body.addEventListener('click', (e) => {
    if (e.target.innerHTML == gameNum1 && gameNum2 < 51) {
        console.log('ㅇㅇ');
        e.target.innerHTML = gameNum2;
        console.log(e.target.innerHTML)
        gameNum1++;
        gameNum2++;
        if (gameNum1 >= 26) {

        }
    } else {
        console.log('ㄴㄴ');
    }

})


/*
const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000)
*/
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');

// 기본형 : window.setTimeout(() => { }, 1000);

// setTimeout() : 한 번만 실행, 메서드 실행 후 타이머 ID를 반환(타이머 취소에 필요함)

const timeout_id1 = setTimeout(() => box1.style.backgroundColor = 'red', 1000);
const timeout_id2 = setTimeout(() => box1.style.backgroundColor = 'orange', 2000);

// setInterval() : 정해진 초마다 계속 실행, 메서드 실행 후 인터벌 ID를 반환(타이머 취소에 필요함)
// 기본형: setInterval(() => { }, 1000);

let x = 0, y = 0;
const interval_id1 = setInterval(() => box1.style.left = x++ + 'px', 200);
const interval_id2 = setInterval(() => box2.style.left = y++ + 'px', 500);

// clearTimeout(id) : 해당 타임아웃 삭제
// 타암아웃을 비활성화 하기 위해 해당 타이머 id가 필요함
//

document.getElementById('clear1').addEventListener('click', () => {
    clearTimeout(timeout_id2);
    clearTimeout(timeout_id1);
});

// clearInterval(id) : 해당 인터벌 삭제
document.getElementById('clear2').addEventListener('click', () => {
    clearInterval(interval_id1);
    clearInterval(interval_id2);

});

if (123 == '123') {
    console.log('true');
} else {
    console.log('false');
}

const click2Div = document.getElementById('click2');

// 선택한 HTML 요소에 JS로 이벤트 추가하기 1 (HTML 속성에 추가)


click2Div.onclick = (e) => {
    // 이벤트 콜백 함수에서의 this는 이벤트 발생 주체가 아닌 윈도우 객체를 가리킴
    // this.document.body 까지는 내려와야 style 을 사용가능함
    // this 대신 이벤트 객체를 사용해 이벤트 발생 요소를 선택할 수 있다
    console.log(e);

    // e.target : 현재 이벤트가 발생한 요소
    e.target.style.backgroundColor = 'green';
    e.target.style.color = 'white';

}
/*
click2Div.onclick = () => {
    if (click2Div.style.backgroundColor == 'green') {
        click2Div.style.color = 'yellow';
        click2Div.style.backgroundColor = 'skyblue';
    } else {
        click2Div.style.backgroundColor = 'green';
        click2Div.style.color = 'white';
    }
}
*/


// 선택한 HTML 요소에 Js로 이벤트 추가하기 2 (addEventListener 함수로 추가)

click2Div.addEventListener('mouseleave', () => {
    click2Div.style.backgroundColor = 'white';
    click2Div.style.color = 'black';
});

click2Div.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'black';
});

// 이벤트 종류는 구글로 찾으면 됨 너무많음 (javascript event list 검색)

// 이벤트 중첩 테스트
const outer = document.getElementById('outer');
const inner1 = document.getElementById('inner1');
const inner2 = document.getElementById('inner2');

const clickEventHandler = function (e) {
    console.log(e);
    alert(e.target.id, 'clicked');
};
// alert 경고창 띄움

// addEventListener(이벤트 종류, 이벤트 처리 함수, 캡처링 여부)

// e.curruntTarget : 현재 이벤트에 영향을 받고 있는 객체
// e.target : 현재 이벤트를 발생시킨 객체

outer.addEventListener('click', (e) => {
    console.log('outer clicked');
    if (e.currentTarget === e.target) {
        console.log(e.target.id, '잡았따');
    }
}); // true 넣으면 캡처링
inner1.addEventListener('click', (e) => {
    console.log('inner1 clicked');
    if (e.currentTarget === e.target) {
        console.log(e.target.id, '잡았따');
    }
}, true);
inner2.addEventListener('click', (e) => {
    console.log('inner2 clicked');
    if (e.currentTarget === e.target) {
        console.log(e.target.id, '잡았따');
    }
});

/*
outer.addEventListener('click', clickEventHandler);
inner1.addEventListener('click', clickEventHandler);
inner2.addEventListener('click', clickEventHandler);
*/

const userId = document.getElementById('user-id');

// keydown, keyup, keypress : 키보드 이벤트의 종류
userId.addEventListener('keydown', (e) => {
    // 기본동작 취소
    e.preventDefault();

    if (e.key === 'Tab') {
        e.currentTarget.value += '\t';

    } else {

    }

    // 기본 동작 취소 가능 여부 체크
    console.log('기본동작 취소 가능 여부 : ', e.cancelable);
    console.log(e);
})

const userIntro = document.getElementById('user-intro');
userIntro.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        e.currentTarget.value += '\t';
    }
})
const link1 = document.getElementById('link1');

link1.addEventListener('click', (e) => {
    console.log('눌렀음');
    console.log(e.cancelable);
    e.preventDefault();
})

const item = document.getElementById('item');
item.addEventListener('click', (e) => {
    console.log(e.target.id);
    console.log(e);
    alert(e.target.id);
});
// 윈도우 객체
console.log(window);

// 경고창을 띄우는 객체
//window.alert('경고창');

// 입력창과 확인창 메서드는 사용자의 선택 결과를 리턴함
// 입력한걸 그대로 리턴
//let result = window.prompt('입력창');
//console.log('입력창 :', result);

// 확인은 true, 취소는 false 리턴
//result = window.confirm('확인창');
//console.log('확인창 :', result);

// 현재 기기의 모니터에 대한 정보
console.log(window.screen);

// 현재 웹 페이지의 DOM 객체
console.log(document);
console.log(document.head);
console.log(document.body);

// 웹 브라우저의 페이지 이동 내역
console.log(history);

/*
        history.back() : 이전 페이지로 이동
        history.forward() : 다음 페이지로 이동
        history.go(index) : 원하는 페이지로 이동 (-1은 이전 페이지, 0은 현재 페이지, +1은 다음 페이지)
*/

const backBtn = document.querySelector('#backBtn');
const forwardBtn = document.querySelector('#forwardBtn');
const goBtn = document.querySelector('#goBtn');
const historyIndex = document.querySelector('#historyIndex');

backBtn.addEventListener('click', () => history.back());
forwardBtn.addEventListener('click', () => history.forward());
goBtn.addEventListener('click', () => history.go(historyIndex.value));

// history.state - 사용자가 직접 정의할 수 있는 방문 내역

// history에 새로운 방문이력을 추가
// pushState 메서드의 처음 두개의 매개변수는 이제 사용하지않음 그냥 null 주면됨
// fill:// 로 보는 경우 작동하지 않음, 보안상의 이유
// history.pushState(null, null, 'http://op.gg');

// 현재 위치하고 있는 경로에 대한 객체
console.log(location);

// 현재 url을 확인하는 기능
console.log(location.protocol);
console.log(location.pathname);

// location.href = 'http://naver.com'; 
// location을 바꿔 즉시 페이지를 이동함
// location.reload(); // 새로고침

// 브라우저 정보
console.log(navigator);
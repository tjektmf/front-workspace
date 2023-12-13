

// const를 써야 요소가 가지고 있는 선택자 속성들이 .찍고 나와서 사용할 수 있음
const gugudan2 = document.getElementById('gugudan');

function print(value) {

    gugudan2.innerHTML += value;


}
// js파일에서도 css 수정이 가능함 굳이 css로 파일 새로 안만들어도 됨
gugudan2.style.display = 'grid';
gugudan2.style.gridTemplateColumns = 'repeat(8,1fr)';
gugudan2.style.gap = '3px 3px';

// 문자열과 변수를 이어서 사용할때 자바처럼 + 사용가능함 ,만 써야되는게 아님
// <div>는 ''로 감싸서 사용함 2x1=2 이렇게 나오니까 당연히 <div>도 ''로 쓰는게 맞음
for (let second = 1; second < 10; second++) {
    for (let first = 2; first < 10; first++) {
   //     gugudan2.innerHTML += '<div>' + first + 'x' + second + '=' + first * second + '</div>';

    }
}

function gugudan3(dan, gop) {

    // '<div>' + dan + 'x' + gop + '=' + dan * gop + '</div>';
    return `<div>${dan}x${gop}=${dan * gop}</div>`; // JS format String
}

for (let gop = 1; gop < 10; gop++) {
    for (let dan = 2; dan < 10; dan++) {
        gugudan2.innerHTML += gugudan3(dan, gop);
    }
}
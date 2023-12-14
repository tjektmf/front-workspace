

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





const gogodanDiv = document.getElementById('gogodan');

gogodanDiv.style.display = 'grid';
gogodanDiv.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'; // 'repeat(8,1fr)'

// repeat(a, b) = b를 a번 반복함 
// 여기서 문자열을 사용 할 때에는 무조건 ''사이에 사용함 이클립스에서 사용하는 쿼리문 생각하면 이해하기 쉬울듯
// ''로 쌓아서 가져간다음 ''벗겨내고 속에있는 값만 사용하는 것처럼
// 여기도 마찬가지로 예를들어 css파일에서 display: grid; 라고 사용하는걸
// 여기선 display = 'grid' 여야 ''를 빼고 display: grid 로 적용이 되는거임
// display = 'grid' 이거랑 display: grid 이 두개가 같은거임 이걸 일단 받아들여야할듯


function gogos(first, second) {
    return `<div>${first}x${second}=${first * second}</div>`;
}

for (let second = 1; second < 10; second++) {
for (let first = 2; first < 10; first++) {
 //       gogodanDiv.innerHTML += '<div>' + first + 'x' + second + '=' + first * second + '</div>';
        gogodanDiv.innerHTML += gogos(first, second);
    }
}

let i =0;
// 0을 false로 받고 0을 제외한 나머지 숫자를 true로 받음
// infinity = true
// NaN, null = false
while(Infinity){
    console.log(i++);

    if(i===10){
        break;
    }
}
console.log('while문 종료');
const btn3 = document.getElementById('btn3');
const out3 = document.getElementById('out3');

// JS는 배열에서 []사용, 자바는 {}
const colors = ['red', 'green', 'blue', 'orange'];

// const colorss = [out3.style.color = 'red', out3.style.color = 'green', out3.style.color = 'blue', out3.style.color = 'orange']

function getRandomColor() {
    return colors[parseInt(Math.random() * colors.length)];
}
/*
function getRandomColors() {
    return colorss[parseInt(Math.random() * colorss.length)];
}
*/


btn3.onclick = function(){
    out3.style.color = getRandomColor();
}

out3.style.fontSize = '30px';

// btn3.onclick = getRandomColors();
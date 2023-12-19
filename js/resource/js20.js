const pushBtn = document.querySelector('#push');
const out = document.querySelector('#out');
let counting = 0;


// 새 요소 만들어서 자식으로 추가
pushBtn.addEventListener('click', (e) => {
    // 1. Element node를 생성한다
    const newDiv = document.createElement('div');
    // 2. Text node를 생성
    const newText = document.createTextNode('Abc ' + counting);

    // 3. Element node를 설정
    newDiv.classList.add('material-symbols-outlined');
    newDiv.style.fontSize = '30px';
    newDiv.style.color = 'blue';
    newDiv.style.padding = '5px';

    // 4. Element node에 Text node를 부착한다
    newDiv.appendChild(newText);

    // 5. 새 Element node를 out에 추가한다
    out.appendChild(newDiv);
    counting++;

});


const shiftbutton = document.querySelector('#shift');
const unshiftbutton = document.querySelector('#unshift');
const popbutton = document.querySelector('#pop');


shiftbutton.addEventListener('click', (e) => {
    const newDiv2 = document.createElement('div');
    const newDiv3 = document.createElement('div');
    const newDiv4 = document.createElement('div');
    const newText2 = document.createTextNode('Abc');
    const newText3 = document.createTextNode(counting);

    newDiv2.classList.add('material-symbols-outlined');
    newDiv2.style.display = 'grid';
    newDiv2.style.gridTemplateColumns = '1fr 1fr';
    newDiv2.style.fontSize = '30px';
    newDiv2.style.color = 'red';
    newDiv2.style.padding = '5px';
    newDiv2.style.width = '50px';
    

    newDiv4.style.verticalAlign = 'top';
    newDiv4.style.fontSize = '0.3em';
    newDiv3.style.color = 'red';
    newDiv2.appendChild(newDiv3);
    newDiv3.appendChild(newText2);
    newDiv2.appendChild(newDiv4);
    newDiv4.appendChild(newText3);
    out.insertBefore(newDiv2, out.firstChild);
    counting++;

});

unshiftbutton.addEventListener('click', (e) => {
    out.removeChild(out.firstElementChild);
});

popbutton.addEventListener('click', (e) => {
    out.removeChild(out.lastChild);

});



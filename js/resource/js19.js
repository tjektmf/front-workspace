const listItems = document.getElementsByTagName('li');
const importants = document.getElementsByClassName('important');
const datas = document.getElementsByName('data');

// CSS 선택자를 이용한 요소 선택
const head2 = document.querySelector('#head2');
const imports = document.querySelectorAll('.important');
// array가 아니므로 편리한 배열함수 사용불가능(필터, 등)
console.log(listItems);
console.log(importants);
console.log('---------');

// name 속성으로 선택하는 경우 nodeList 타입으로 꺼내는데 forEach만 구현되어 있다
console.log(datas);
console.log(head2);
console.log(imports);
console.log('---------');
const liArr = [...listItems];
console.log(liArr);
for (let i = 0; i < listItems.length; i++) {
    liArr.push(listItems[i]);
}

// liArr.forEach(li => console.log(li));
const test1 = document.querySelector('#test1');
console.log(test1);

// innerHTML : 태그가 적용됨 (보안에 취약함)
test1.innerHTML = '<b>element.innerHTML</b> : 해당 요소의 내용';

// innerText : 태그가 적용되지 않음 (보안 괜찮음)
test1.innerText = '<b>element.innerHTML</b> : 해당 요소의 내용';

// 속성 수정하기
test1.title = '마우스를 <b>올리고</b> 있으면 나옴';
console.log(test1.classList);

// 속성에 메서드로 접근
test1.setAttribute('title', 'title에 들어갈 문구');

// style.property를 이용하는게 더 바람직함
test1.setAttribute('style', 'border: solid black 1px'); 

// className, classList를 이용하는게 더 바람직함
test1.setAttribute('class', 'use');
console.log(test1.getAttribute('title'));

// 클래스 속성에 접근
test1.className = 'important red box';
console.log(test1.className);
console.log(test1.classList[0]);
console.log(test1.classList[1]);
console.log(test1.classList[2]);
console.log(test1.classList[3]);
console.log(test1.classList[4]);

// 클래스 값 추가
test1.className += ' ani';

// classList 객체 사용
test1.classList.add('ani');
test1.classList.replace('ani', 'dog');
test1.classList.remove('important');
console.log(test1.className);
console.log(test1.classList[0]);
console.log(test1.classList[1]);
console.log(test1.classList[2]);
console.log(test1.classList[3]);
console.log(test1.classList[4]);


// toggle : 해당 클래스 값이 없을때는 추가, 있으면 제거
test1.classList.toggle('visible');
test1.classList.toggle('visible');
test1.classList.toggle('visible');
test1.classList.toggle('visible');

console.log(test1.classList.contains('visible'));
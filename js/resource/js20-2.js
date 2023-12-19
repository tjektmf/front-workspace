const pushBtn = document.querySelector('#push');
const popBtn = document.querySelector('#pop');
const shiftBtn = document.querySelector('#shift');
const unshiftBtn = document.querySelector('#unshift');
const out = document.querySelector('#out');

let starCount = 0;
const createStarDiv = () => {
    const starDiv = document.createElement('div');
    const starText = document.createTextNode('Abc');

    // html 파일에서 따로 클래스를 추가하지 않고 js 파일에서 추가해서 css 파일에서 선택자를 활용해 속성추가가 가능함
    // 여기서는 js파일에서 star 클래스와 starNum 클래스를 추가해 css파일에서 .star{ color: yellow; } 이런 형식으로 사용함
    starDiv.classList.add('material-symbols-outlined');
    starDiv.classList.add('star');
    starDiv.appendChild(starText);

    // 하나의 starDiv 안에 starText와 numDiv를 집어넣었고 position을 사용해서 위치를 조정
    // 각각 클래스의 이름도 다르게 부여해서 폰트 색깔 등 조절함
    const numDiv = document.createElement('div');
    const numText = document.createTextNode(starCount++);

    numDiv.classList.add('starNum');
    numDiv.appendChild(numText);
    starDiv.appendChild(numDiv);

    return starDiv;
};

const getLastChild = () => document.querySelector('#out > div:last-child');

const pushChild = () => out.appendChild(createStarDiv());
const popChild = () => out.removeChild(out.lastElementChild);
const shiftChild = () => out.removeChild(out.firstElementChild);
const unshiftChild = () => out.insertBefore(createStarDiv(), out.firstElementChild);

pushBtn.addEventListener('click', (e) => pushChild());
popBtn.addEventListener('click', (e) => popChild());
shiftBtn.addEventListener('click', (e) => shiftChild());
unshiftBtn.addEventListener('click', (e) => unshiftChild());


document.body.addEventListener('keydown', (e) => {
    console.dir(e);
    console.log(e);
    switch (e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            shiftChild();
            break;
        case 'ArrowRight':
            e.preventDefault();
            unshiftChild();
            break;
        case 'ArrowUp':
            e.preventDefault();
            pushChild();
            break;
        case 'ArrowDown':
            e.preventDefault();
            popChild();
            break;
    }
});

/*
out.parentElement.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        pushChild();
    } else if (e.key === 'ArrowDown') {
        popChild();
    } else if (e.key === 'ArrowLeft') {
        shiftChild();
    } else if (e.key === 'ArrowRight') {
        unshiftChild();
    }
});
*/

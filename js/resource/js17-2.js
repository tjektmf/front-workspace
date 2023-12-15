const first_names = ['유라', '다슬', '소영', '영윤', '멍멍'];
const last_names = ['서', '권', '이', '김'];


const getFirstName = () => first_names[parseInt(Math.random() * first_names.length)];
const getLastName = () => last_names[parseInt(Math.random() * last_names.length)];
const getRandomName = () => getLastName() + getFirstName();
const getRandomScore = () => parseInt(Math.random() * 70 + 31);
let stuNum = 0;

function Student() {
    this.stuNum = 'STU' + stuNum++
    this.name = getRandomName();
    this.math = getRandomScore();
    this.eng = getRandomScore();
    this.kor = getRandomScore();
}

// 100명 필드 생성
const students2 = [];
for (let i = 0; i < 100; i++) {
    students2.push(new Student());
}

// 평균 필드 추가
students2.forEach(stu => {
    stu.avg = ((stu.kor + stu.eng + stu.math) / 3).toFixed(2);
});

// 특정 소숫점에서 반올림하는 메서드 toFixed(자릿수);
// number = 0.12345;
// console.log(number.toFixed(3));
// output: 0.123
// 출처: https://7942yongdae.tistory.com/173 [개발자 일지:티스토리]

console.log(students2);

// 평균 60 미만 배열
const fstus = students2.filter(stu => stu.avg < 60);
console.log(fstus);

// 각 과목 평균 점수
// 1. 총점을 구하고 2. 길이로 나눔

// 0을 넣으면 첫번째 반복을 초기값으로 진행함

// sub를 매개변수로 넣은건 과목3개 공통적으로 사용하기 위함
// tot + stu[sub], 0 ----- 이 부분이 tot를 0으로 0+stu[sub]로 시작하고 그다음부터 stu[sub] 다음값이 더해짐 =>(화살표) 뒤가 리턴값이니까
// "= sub =>" 이 부분은 "= function(sub) =>" 과 정확하게 같음 그냥 대충 생략하는거임


const test = [1,2,3,4,5,6,7,8,9,10];
const getTest = () => test.reduce((total, index) => total + index, 0);
console.log('--------------------')
console.log(getTest());
console.log('--------------------')



const getTotal = sub => students2.reduce((tot, stu) => tot + stu[sub], 0);
const getSubjectAvg = sub => getTotal(sub) / students2.length;

/*
total + stu[sub] 는 매개변수로 특정된 stu[sub]값을 total에 더하는건데 
아직 total이라는 값이 초기화가 되지 않은 상태라 계산이 제대로 이루어지지 않음
즉 let total; 이렇게 선언만 되어있는 상태라는 뜻
그래서 let total = 0; 이렇게 초기화를 해주는 용도로 초기값 0을 추가함

const getTotal2 = sub => students2.reduce((tot, stu) => tot + stu[sub]);
const getSubjectAvg2 = sub => getTotal2(sub) / students2.length;
console.log(getSubjectAvg2('kor')); // NaN 뜸
*/
console.log(getSubjectAvg('kor'));
console.log(getSubjectAvg('eng'));
console.log(getSubjectAvg('math'));

const allStudentsTable = document.getElementById('all-students');
const badStudentsTable = document.getElementById('bad-students');
const addRow = (table, stu) => {
    table.innerHTML += `<div>${stu.stuNum}</div>` + `<div>${stu.name}</div>` + `<div>${stu.kor}</div>` + `<div>${stu.eng}</div>` + `<div>${stu.math}</div>` + `<div>${stu.avg}</div>`
}

students2.forEach(stu => addRow(allStudentsTable, stu));
fstus.forEach(stu => addRow(badStudentsTable, stu));


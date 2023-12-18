
const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers[i] = i;
}

console.log(numbers);
/*

    # 배열.prototype.forEach : 배열의 모든 값을 순서대로 꺼내서 전달한 함수를 실행
    첫 번째 인자로 해당 번째 요소, 두 번째 인자로 인덱스, 세 번째로 원본 배열이 전달되며 (item, index, srcArr)
    반드시 모든 인자를 다 받을 필요는 없고 필요한 경우에만 사용

*/
numbers.forEach(function (item, index, srcArr) {    // 함수의 이름은 상관없음 밖에서 이름으로써 사용못함
    console.log(item * 10, `${index}번째 실행`, '원본:', srcArr);
});

const myFunction = function (item, index, srcArr) {    // 함수의 이름은 상관없음 밖에서 이름으로써 사용못함
    console.log(item * 10, `${index}번째 실행`, '원본:', srcArr)
    console.log(`numbers[${index}] : ${item}`)
};

numbers.forEach(myFunction);

/*
    # 배열.prototype.map
    값을 하나씩 순서대로 꺼내면서 해당 값을 사용해 결과를 리턴한다
    리턴한 결과들로 구성된 새로운 배열을 리턴한다
    map에 전달하는 함수는 반드시 결과를 리턴해야함
*/

const scores = [80, 55, 30, 87, 50, 78, 91, 43, 67];
const resultArr = numbers.map((item, index) => {
    return item + 5;
});

const grade = scores.map((score) => { // 맵을 이용해 값을 순서대로 불러오고 그 값을 사용한 특정 결과를 리턴함
    if (score > 100 || score < 0) {
        return 'F';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }

});
const getGrade = (score) => {
    if (score > 100 || score < 0) {
        return 'F';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
const students = scores.map((score) => ({

    score: score,
    grade: getGrade(score)

}));
console.log(grade);
console.log(resultArr);
console.log(students);
/*
        # 배열.prototype.filter
        - 배열의 모든 값을 순차적으로 하나씩 꺼내면서 전달한 함수의 기준에 부합하는 값만 남김
        - filter에 전달하는 콜백함수는 반드시 boolean타입 값을 리턴해야 함
        - true를 리턴하는 요소는 남고 false를 리턴하는 요소는 걸러짐
*/

// 60점 미만만 남기고 싶은 경우
const filtered = scores.filter((score) => {
    return score < 60;

});

const fs = students.filter((student) => {
    return student.grade === 'F';
})

console.log(filtered);
console.log(fs);

/*
        # 배열.prototype.reduce
        - 배열의 모든 요소를 하나로 취합한다
        - 전달한 함수의 결과를 다음 반복에 계속해서 사용한다
        - 값들을 줄여서 하나의 값으로 귀결되기 때문에 reduce인듯
*/

// 총합 구하기
const sum = scores.reduce((prevScore, currScore, index) => {
    console.log(`## ${index}번 반복 ##`);
    console.log('prev:', prevScore);
    console.log('curr:', currScore);

    return prevScore + currScore;
});
const minScore = scores.reduce((minScore, currScore) => {
    return minScore < currScore ? minScore : currScore;
});
const maxScore = scores.reduce((max, curr) => {
    return max < curr ? curr : max;
});

console.log('총합 :', sum);
console.log('최솟값 : ', minScore);
console.log('최댓값 : ', maxScore);

/*
        # 배열.prototype.some
        - 조건을 만족하는 요소가 하나 이상 있는지 검사한다
        - true, false를 리턴
*/
const fruits = ['gogi', 'ramen', 'chicken', 'pork', 'je6', 'pizza', 'piggogi', 'sogogi', 'dakgogi'];
const result1 = fruits.some((fruit) => {
    return fruit === 'gogi';
});
const result2 = fruits.some((fruit) => fruit === 'gogi');
const result3 = fruits.some((fruit) => fruit.includes('gogi'));
console.log(result1);
console.log(result2);
console.log(result3);

/*
        1. 100명의 랜덤 학생 정보를 생성
*/
const studentArr = [];
const randomKorean = parseInt(Math.random() * 70 + 30);
const randomEnglish = parseInt(Math.random() * 70 + 30);
const randomMath = parseInt(Math.random() * 70 + 30);

function randomScore() {
    return parseInt(Math.random() * 70 + 30);
}




function StudentInfo(studentNum, studentName, korean, english, math, avg) {
    this.studentNum = studentNum;
    this.studentName = studentName;
    this.korean = korean;
    this.english = english;
    this.math = math;
    this.avg = avg;
}

for (let i = 0; i < 100; i++) {
    let a1 = randomScore();
    let a2 = randomScore();
    let a3 = randomScore();
    avg = Math.round((a1 + a2 + a3) / 3);

    studentArr[i] = new StudentInfo(i, `No.${i}`, a1, a2, a3, avg);

}

const trash = studentArr.filter((StudentInfo) => {
    return StudentInfo.avg < 50;
});
const englishAvg = studentArr.reduce((prev, curr) => {

    return prev.english + curr.english;
});

// ** 중요 ** 자바에서도 이거 선언만 해놓고 초기화 안해주면 포문에서 사용못함 JS에선 안알려줘서 까먹고있었음
let engavg = 0;
for (let i = 0; i < studentArr.length; i++) {
    engavg += studentArr[i].english;
}
let finaleng = engavg / studentArr.length;

let koravg = 0;
for (let i = 0; i < studentArr.length; i++) {
    koravg += studentArr[i].korean;
}
let finalkor = koravg / studentArr.length;

let mathavg = 0;
for (let i = 0; i < studentArr.length; i++) {
    mathavg += studentArr[i].math;
}
let finalmath = mathavg / studentArr.length;


console.log('1, 2');
console.log(studentArr);
console.log('3');
console.log(trash);
console.log('4');
console.log(finaleng);

const student = document.getElementById('student');

student.style.boxSizing = 'border box';
student.style.display = 'grid';
student.style.gridTemplateColumns = 'repeat(6,1fr)';
student.style.textAlign = 'center';

for (let i = 0; i < studentArr.length; i++) {
    if (i == 0) {
        student.innerHTML += '<div>' + '학번' + '</div>';
        student.innerHTML += '<div>' + '이름' + '</div>';
        student.innerHTML += '<div>' + '국어' + '</div>';
        student.innerHTML += '<div>' + '영어' + '</div>';
        student.innerHTML += '<div>' + '수학' + '</div>';
        student.innerHTML += '<div>' + '평균' + '</div>';
        student.innerHTML += '<div>' + studentArr[i].studentNum + '</div>';
        student.innerHTML += '<div>' + studentArr[i].studentName + '</div>';
        student.innerHTML += '<div>' + studentArr[i].korean + '</div>';
        student.innerHTML += '<div>' + studentArr[i].english + '</div>';
        student.innerHTML += '<div>' + studentArr[i].math + '</div>';
        student.innerHTML += '<div>' + studentArr[i].avg + '</div>';
    } else {
        student.innerHTML += '<div>' + studentArr[i].studentNum + '</div>';
        student.innerHTML += '<div>' + studentArr[i].studentName + '</div>';
        student.innerHTML += '<div>' + studentArr[i].korean + '</div>';
        student.innerHTML += '<div>' + studentArr[i].english + '</div>';
        student.innerHTML += '<div>' + studentArr[i].math + '</div>';
        student.innerHTML += '<div>' + studentArr[i].avg + '</div>';
    }

}

const garbage = document.getElementById('garbage');

for (let i = 0; i < trash.length; i++) {

    if (i == 0) {
        garbage.innerHTML += '<div>' + '학번' + '</div>';
        garbage.innerHTML += '<div>' + '이름' + '</div>';
        garbage.innerHTML += '<div>' + '국어' + '</div>';
        garbage.innerHTML += '<div>' + '영어' + '</div>';
        garbage.innerHTML += '<div>' + '수학' + '</div>';
        garbage.innerHTML += '<div>' + '평균' + '</div>';
        garbage.innerHTML += '<div>' + trash[i].studentNum + '</div>';
        garbage.innerHTML += '<div>' + trash[i].studentName + '</div>';
        garbage.innerHTML += '<div>' + trash[i].korean + '</div>';
        garbage.innerHTML += '<div>' + trash[i].english + '</div>';
        garbage.innerHTML += '<div>' + trash[i].math + '</div>';
        garbage.innerHTML += '<div>' + trash[i].avg + '</div>';
    } else {
        garbage.innerHTML += '<div>' + trash[i].studentNum + '</div>';
        garbage.innerHTML += '<div>' + trash[i].studentName + '</div>';
        garbage.innerHTML += '<div>' + trash[i].korean + '</div>';
        garbage.innerHTML += '<div>' + trash[i].english + '</div>';
        garbage.innerHTML += '<div>' + trash[i].math + '</div>';
        garbage.innerHTML += '<div>' + trash[i].avg + '</div>';
    }
}

const eng = document.getElementById('eng');
eng.innerHTML += '<div>국어 평균</div>'
eng.innerHTML += '<div>영어 평균</div>'
eng.innerHTML += '<div>수학 평균</div>'
eng.innerHTML += '<div>' + finalkor + '</div>';
eng.innerHTML += '<div>' + finaleng + '</div>';
eng.innerHTML += '<div>' + finalmath + '</div>';



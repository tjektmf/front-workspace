
const lottoNum = [];
const lottoCount = [];

// LottoGame 함수는 그냥 한번에 두가지 값을 넣는 정도의 의미?
// 이 함수 자체에 값을 넣는게 아니라 변수에 값을 넣을때 이 함수를 통해 값을 넣는거임
// 그래서 lottoCount[i] = new LottoGame(i + 1, 0);
// 이 부분에서 lottoCount는 LottoGame 함수가 가진 num과 count 두가지 값을 가짐
// num값을 꺼낼때는 lottoCount[i].num 을 사용하고 count값을 꺼낼때는 lottoCount[i].count를 사용함
function LottoGame(num, count) {
    this.num = num;
    this.count = count;
}

// 여기서 두 값을 모두 숫자로 초기화함 안하면 NaN 뜨던데
for (let i = 0; i < 45; i++) {
    lottoCount[i] = new LottoGame(i + 1, 0);
}

// 1부터 45까지 숫자를 lottoNum에 1000번 집어넣음
// 이렇게 되면 lottoNum은 0~999의 인덱스를 가지는 배열이 됨
for (let i = 0; i < 1000; i++) {
    lottoNum.push(parseInt(Math.random() * 45 + 1));
}

// 그럼 lottoNum은 천개의 인덱스를 가질테니까 하나씩 빼서 값추가해줌
// lottoNum에 랜덤하게 입력된 1~45를 인덱스로 해서 1씩 추가함
// lottoNum은 1~45이므로 lottoCount[0]을 채우기 위해 -1을 해줌
for (let i = 0; i < 1000; i++) {
    lottoCount[lottoNum[i] - 1].count++; // lottoCount[lottoNum[i]-1]는 lottoCount와 lottoNum 두가지 값을 가짐
}

// 이제 lottoCount.count를 내림차순으로 정렬해야함 sort를 사용
// 두 값의 위치를 바꿀 때 양수를 리턴 양수는 긍정의 의미니까
// 자리바꿈? ㅇㅇ > 양수라고 생각하면 될듯
// 양수를 리턴하면 두 값의 위치를 바꾸고, 음수를 리턴하면 위치를 바꾸지 않음
const descendLotto = lottoCount.sort((a, b) => {
    if (a.count > b.count) {
        return -1;
    } else if (a.count < b.count) {
        return 1;
    } else {
        return 0;
    }
});


console.log(lottoNum);
console.log(lottoCount);
console.log(descendLotto);
console.log(LottoGame);

const lottoDiv = document.getElementById('lotto');
for (let i = 0; i < 6; i++) {
    lottoDiv.innerHTML += '<div>'+ descendLotto[i].num + '</div>';
}



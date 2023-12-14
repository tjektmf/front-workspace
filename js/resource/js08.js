
const text = 'apple/kiwi/orange/banana/grape';
const url = 'http://naver.com';
const input = '      adfsadasd       '

console.log('length : ' + text.length);
console.log('split : ' + text.split('/'));
console.log('includes : ' + text.includes('apple'));
console.log('includes : ' + text.includes('appla'));
console.log(text.indexOf('kiwi')); // a가 0부터 시작 키위앞 /가 5번이니 kiwi는 6번 

console.log('startWith : ' + url.startsWith('htp://'));
console.log('endsWith : ' + url.endsWith('.com'));
console.log(url.toUpperCase());
console.log(url.toUpperCase().toLowerCase());
console.log(url.substring(3, undefined)); // 3부터 끝까지 잘라주는듯? 뒤가 어딘지 모를때
console.log(url.substring(3, 4)); // a 하나나옴, 3부터 4이전까지니까 3에 해당하는 a만 나옴

console.log(`${input} vs ${input.trim()}`) // trim은 띄어쓰기 없애줌

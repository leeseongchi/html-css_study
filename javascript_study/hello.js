// << 자바스크립트 >>

// 베이스 문법 -> 자바
// 타입리스 - 변수를 지정할 때 자료형을 명시하지 않는다.

var num = 10;
num = "안녕";
console.log(num);

// Object num = 10;
// num = "안녕";

// typeof 키워드

console.log(typeof(10)); // 정수와 실수를 구분하지 않는다.
console.log(typeof("10"));
console.log(typeof(true));
var n;
console.log(typeof(n));
console.log(n);
n = null;
console.log(typeof(n));
console.log(n);
console.log(() => {});
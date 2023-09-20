var hi = "hello";   // 전역 변수

function greeting() {
    hi = "bye";  // 함수 안에서 전역 변수 수정 가능
}

console.log(hi);  // hello
greeting();
console.log(hi);  // bye
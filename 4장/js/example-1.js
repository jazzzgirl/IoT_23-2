// 두 수를 입력 받아 곱한 결과를 리턴하여 화면에 출력하는 함수.
// 함수 선언.
function multiple(num1, num2) {
    // let result = num1 * num2;
    // return result;  // 곱한 결과 돌려준다.
    return num1 * num2;  // 곱하여 결과를 돌려준다.
}

// 2개의 정수 입력 받기
let number1 = parseInt(prompt("첫 번째 정수 입력"));
let number2 = parseInt(prompt("두 번째 정수 입력"));

document.write(`<h1>${number1} * ${number2} = ${multiple(number1, number2)}</h1>`);

let result = multiple(number1, number2);  // 함수 호출하여 돌려받은 결과를 result에 저장.
document.write(`<h1>${number1} * ${number2} = ${result}</h1>`);
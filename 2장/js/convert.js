// 섭씨 온도 = (화씨온도 - 32) / 1.8
// 입력은 프롬프트로 받는다.
// 출력은 alert(), document.write() 중 하나 선택.
// 화씨 온도 00.0도는 섭씨 온도 00.0도 입니다.

// 1. 화씨 온도 입력 받기 - 실수형으로 변환.
let fah = parseFloat(prompt("화씨 온도 입력"))

// 2. 섭씨 온도 계산하기   
let cel = (fah - 32) / 1.8;

// 3. 출력하기.
alert(`화씨 ${fah}도는 섭씨 ${cel}도 입니다.`);
document.write(`화씨 ${fah}도는 섭씨 ${cel}도 입니다.`);
document.write("화씨 " + fah + "도는 섭씨 " + cel + "도 입니다.");


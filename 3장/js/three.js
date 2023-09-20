// 정수 입력 받는다.
// 입력 값이 있나?
// 입력 값을 3으로 나눈 나머지가 0이면 3의 배수이다.
// 아니면 3의 배수가 아니다.
let userNumber = prompt("숫자를 입력하시오.");

if(userNumber != null) {
    userNumber = parseInt(userNumber);
    if(userNumber % 3 === 0) {
        alert(userNumber + "은(는) 3의 배수입니다.");
    }
    else {
        alert(userNumber + "은(는) 3의 배수가 아닙니다.");
    }
}
else {
    alert("입력이 취소되었습니다.");
}
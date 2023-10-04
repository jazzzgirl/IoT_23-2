// 버튼 요소 가져오기
const btn = document.querySelector("#toggle-box button");

// btn.onclick = () => {
//     document.body.classList.toggle("dark");   // toggle() 로 추가, 삭제
// }




// btn 영역을 클릭하면 배경색과 글자색을 바꾼다.
btn.onclick = () => {
    if(!document.body.classList.contains("dark")) {
        document.body.classList.add("dark");  // 스타일 추가.
        btn.innerText = "화이트 모드로 바꾸기"
    }
    else {  
        document.body.classList.remove("dark");  // 스타일 제거.
        btn.innerText = "다크 모드로 바꾸기"
    }
}
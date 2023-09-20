const student = {
    major : "컴퓨터공학부",
    idNum : 202095000,
    name : '김지연'
}

for(key in student) {
    document.write(`${key} : ${student[key]} <br>`);
}
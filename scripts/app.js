
const studentName = "Faisal mohammed";
const studentNumber = "1163069";
const studentInfo = `${studentName} - ${studentNumber}`;
console.log(studentInfo);
const headerContent = document.querySelector('h1');
headerContent.innerHTML = studentInfo;
headerContent.classList.add('heading1');

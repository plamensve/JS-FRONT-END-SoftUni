window.addEventListener('load', showAllStudents);

let host = 'http://localhost:3030/jsonstore/collections/students'
let submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', onSubmit)

async function showAllStudents() {
    let res = await fetch(host);
    let data = await res.json();
    let students = Object.values(data);

    let body = document.querySelector('tbody');
    body.innerHTML = '';

    students.forEach(student => {
        let row = document.createElement('tr');

        let tdFirstName = document.createElement('td');
        tdFirstName.textContent = student.firstName;
        row.appendChild(tdFirstName);

        let tdLastName = document.createElement('td');
        tdLastName.textContent = student.lastName;
        row.appendChild(tdLastName);

        let tdFacultyNumber = document.createElement('td');
        tdFacultyNumber.textContent = student.facultyNumber;
        row.appendChild(tdFacultyNumber);

        let tdGrade = document.createElement('td');
        tdGrade.textContent = student.grade;
        row.appendChild(tdGrade);

        body.appendChild(row);
    });
}


async function onSubmit() {
    let firstName = document.querySelector("[name='firstName']").value;
    let lastName = document.querySelector("[name='lastName']").value;
    let facultyNumber = document.querySelector("[name='facultyNumber']").value;
    let grade = document.querySelector("[name='grade']").value;

    if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
    }

    await fetch(host, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    });

    await showAllStudents();


    document.querySelector("[name='firstName']").value = '';
    document.querySelector("[name='lastName']").value = '';
    document.querySelector("[name='facultyNumber']").value = '';
    document.querySelector("[name='grade']").value = '';
}

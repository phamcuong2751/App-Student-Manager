let readlineSync = require('readline-sync');
let fs = require('fs');
let allStudents = [];
let student = {};

function loadData() {

}

function mainMenu() {
    console.log('1. Show list students');
    console.log('2. Create and additon a new student');
    console.log('3. Save and exit');
}


function inputAStuent(student) {
    let name = readlineSync.question('Name: ');
    let age = readlineSync.question('Age: ');
    let sex = readlineSync.question('Sex: ');
    student.name = name;
    student.age = age;
    student.sex = sex;
    return student;
}

function showStudents() {

}

function createStudent() {

}

function saveAndExit() {

}

//xoa code nay di ne
function main() {
    function loadData()
    mainMenu()
    let interchoose = parseInt(readlineSync.question('Nhap lua chon cua ban: '));
    switch (interchoose) {
        case 1:
            showStudents()
            break;
        case 2:
            createStudent()
            break;
        case 3:
            saveAndExit()
            break;
        default:
            break;
    }
}

main();
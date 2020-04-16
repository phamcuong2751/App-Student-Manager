let readlineSync = require('readline-sync');
let allStudents = [];

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

function createStudent() {
    do {
        mainMenu()
        let interchoose = readlineSync.question('Nhập lựa chọn của bạn: ')
        interchoose;
        switch (interchoose) {
            case 1:
                console.log(allStudents);
                break;
            case 2:
                allStudents.unshift(inputAStuent(student));
                break;
            case 3:

                break;
        }
    } while (interchoose < 4);

}
//xoa code nay di ne
function main() {
    mainMenu()

}

main();
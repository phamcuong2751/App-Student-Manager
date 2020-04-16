let readlineSync = require('readline-sync');
let fs = require('fs');
let allStudents = [];

function loadData() {
    let fileContent = fs.readFileSync('./data.json');
    allStudents = JSON.parse(fileContent);
}

function mainMenu() {
    console.log('1. Show list students');
    console.log('2. Create and additon a new student');
    console.log('3. Save and exit');
    let interchoose = parseInt(readlineSync.question("Nhap lua chon cua ban: "));
    switch (interchoose) {
        case 1:
            showStudents()
            mainMenu()
            break;
        case 2:
            createStudent()
            mainMenu()
            break;
        case 3:
            saveAndExit()
            break;
        default:
            console.log('Chon sai!');
            mainMenu();
            break;
    }
}


function showStudents() {
    for (let studentX of allStudents) {
        console.log(studentX.name, studentX.age, studentX.sex)
    }
}

function createStudent() {
    let name = readlineSync.question('Name: ');
    let age = readlineSync.question('Age: ');
    let sex = readlineSync.question('Sex: ');
    student = {
        name: name,
        age: parseInt(age),
        sex: sex
    }
    allStudents.push(student);
}

function saveAndExit() {
    let content = JSON.stringify(allStudents);
    fs.writeFileSync('./data.json', content, { encoding: 'utf8' });
}

function main() {
    loadData();
    mainMenu();

}

main();
let fs = require('fs');


//to add new student 
let addStudent = (id, fname, grades, comment) => {
    let students = loadStudents();
    let duplID = students.filter((student) => {
        return student.id === id;
    })

    if (duplID.length === 0) {
        students.push({
            id,
            fname,
            grades,
            comment
        });

        saveStudents(students);
        console.log('saved successfully')
    } else {
        console.log(duplID)
        console.log("Can't save ,This ID is existed")
    }
}

//to return data and load data
let loadStudents = () => {
    try {
        let data = fs.readFileSync("students.json").toString();
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

//to save data in file
let saveStudents = (students) => {
    let saveData = JSON.stringify(students);
    fs.writeFileSync("students.json", saveData)
}


//to delete student by id

let deleteStudent = (id) => {
    let students = loadStudents();
    let keepedStudents = students.filter((student) => {
        return student.id != id
    })
    console.log(keepedStudents)
    saveStudents(keepedStudents)
    console.log("Student is deleted")
}

// to search on student

let readStudent = (id) => {
    let students = loadStudents();
    let selectedStudent = students.find((student) => {
        return student.id === id;
    })
    if (selectedStudent) {
        console.log(selectedStudent)
    } else {
        console.log("This id is not found")
    }

}

//to display all students data

let listStudents = () => {
    let students = loadStudents();
    students.forEach((student) => {
        console.log("--Name: " + student.fname, " --Total: " + student.grades[student.grades.length - 1])
    });
}

// let gradesSum = () => {

//     let students = loadStudents();

//     students.forEach(student => {
//         let total = 0;
//         for (let grade in student.grades) {
//             total += student.grades[grade]

//         }
//         // students.grades.push(total)
//         return total
//             // console.log(total)

//     })

// }

module.exports = {
    addStudent,
    deleteStudent,
    readStudent,
    listStudents,
    // gradesSum
}
let yargs = require('yargs');
yargs.array('grades')
let data = require('./data.js')

//to add to file
yargs.command({
    command: 'add',
    describe: 'Add new Student',
    builder: {
        id: {
            describe: 'This is student ID',
            demandOption: true,
            type: 'number'
        },
        fname: {
            describe: 'This is student name',
            demandOption: true,
            type: 'string'
        },
        grades: {
            describe: 'This is student grades',
            demandOption: true,
            type: 'array', // to add the grades to array by --grades 10 --grades 20

        },
        comment: {
            describe: 'This is a comment',
            type: 'string'
        },

    },
    handler: (argv) => {
        // console.log(yargs.argv)
        // console.log('add student')
        let total = 0;
        argv.grades.forEach(grade => {
            total += grade

        });
        argv.grades.push(total)
            // console.log(data.gradesSum()) 
        data.addStudent(argv.id, argv.fname, argv.grades, argv.comment)
    }
})

//to delete 
yargs.command({
    command: 'delete',
    describe: 'Delete a Student',
    builder: {
        id: {
            describe: 'This is student ID',
            demandOption: true,
            type: 'number'
        }

    },
    handler: (argv) => {
        // console.log(yargs.argv)
        // console.log('delete student')
        data.deleteStudent(argv.id)
    }
})

//To search and read
yargs.command({
    command: 'read',
    describe: 'read selected Student',
    builder: {
        id: {
            describe: 'This is student ID',
            demandOption: true,
            type: 'number'
        },

    },
    handler: (argv) => {
        // console.log(yargs.argv)
        // console.log('read student')
        data.readStudent(argv.id)
    }
})

//to list all data
yargs.command({
    command: 'list',
    describe: 'list all Students',
    handler: () => {
        // console.log(yargs.argv)
        // console.log('add student')
        data.listStudents()
    }
})

//to match all another commands
yargs.command({
    command: '*',
    describe: 'match all commands',

    handler: () => {
        console.log(yargs.argv)
        console.log('add student')
    }
})

yargs.parse()
// CODE here for your Lambda Classes
//You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes
class Person {
    constructor ({name, age, location, gender}) {
        this.name =name;
        this.age = age;
        this.location = location;
        this.gender = gender
    }

    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor ({specialty, favLanguage, catchPhrase, ...rest}){
        super(rest);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo (subject) {
        console.log(`Today we are learning about ${subject}.`)
    }

    grade (student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor ({previousBackground, className, favSubjects, ...rest}) {
        super(rest);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listsSubjects() {
        console.log(`${this.name}'s favorite subjects are ${this.favSubjects}.`);
    }

    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge (subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}

class ProjectManager extends Instructor {
    constructor({gradClassName, favInstructor, ...rest}){
        super(rest);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp (channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times! `);
    }

    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
} 

//Create random Persons
const bill = new Person ({
    name: 'Bill',
    age: 30,
    location: 'Liverpool',
    gender: 'Male'
})

const jill = new Person ({
    name: 'Jill',
    age: 57,
    location: 'Barcelona',
    gender: 'Female'
})

const steph = new Person ({
    name: 'Steph',
    age: 28,
    location: 'Oakland',
    gender: 'Male'
})

//Create random Instructors

const dan = new Instructor({
    name: 'Dan',
    age: 42,
    location: 'Denver',
    gender: 'Male',
    specialty: 'node.js',
    favLanguage: 'JavaScript',
    catchPhrase: 'I love cats!'
})

const rick = new Instructor ({
    name: 'Rick',
    age: 17,
    location: 'Boston',
    gender: 'Male',
    specialty: 'redux',
    favLanguage: 'Python',
    catchPhrase: 'What am I doing here>'
})

//Create random Students

const ethan = new Student ({
    name: 'Ethan',
    age: 29,
    location: 'Orlando',
    gender: 'Male',
    previousBackground: 'Teacher',
    className: 'Web20',
    favSubjects: ['Html', ' CSS', ' JavaScript']
})

const joe = new Student ({
    name: 'Joe',
    age: 71,
    location: 'Augusta',
    gender: 'Male',
    previousBackground: 'NFL Quarterback',
    className: 'Web18',
    favSubjects: ['React' , ' Python', ' AJAX']
})

//Create random PMs

const josh = new ProjectManager({
    name: 'Josh',
    age: 32,
    location: 'Austin',
    gender: 'Male',
    specialty: 'node.js',
    favLanguage: 'JavaScript',
    catchPhrase: 'I love dogs!',
    gradClassName: 'Web19',
    favInstructor: 'Sean'
})

const jeremiah = new ProjectManager({
    name: 'Jeremiah',
    age: 35,
    location: 'Utah',
    gender: 'Male',
    specialty: 'PHP',
    favLanguage: 'Ruby',
    catchPhrase: 'Good job man!',
    gradClassName: 'Web5',
    favInstructor: 'Austen'
})
//Test Persons

console.log(`\n*****Persons*****`);
console.log(bill, jill, steph);
bill.speak();
jill.speak();
steph.speak();

//Test Instructors

console.log(`\n*****Instructors*****`);
console.log(dan, rick);
dan.demo('Advanced CSS');
dan.speak();
rick.grade(ethan, 'Javascript IV');

//Test Students

console.log(`\n****Students*****`);
console.log(ethan, joe);
ethan.listsSubjects();
joe.PRAssignment();
ethan.sprintChallenge('JavaScript');

//Test Project Managers

console.log(`\n****Project Managers*****`);
console.log(josh, jeremiah);
josh.standUp('web20_help');
jeremiah.debugsCode(joe, 'CSS');
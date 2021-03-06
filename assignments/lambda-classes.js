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

    randomGradeChange (student) {
        const valueChange = Math.floor(Math.random()*10);
        const direction = Math.random();
        const origGrade = student.grade;

            if(direction>=0.50){
                student.grade += valueChange;
            } else {
                student.grade -= valueChange;
            }
        
        console.log(`${student.name}'s grade was changed from ${origGrade} to ${student.grade} by ${this.name}.`)
    }
}

class Student extends Person {
    constructor ({grade, previousBackground, className, favSubjects, ...rest}) {
        super(rest);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = grade;
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
    
    graduate () {
        if(this.grade>70){
            console.log(`Congrats! ${this.name}, you have graduated from Lambda School!`);
        } else {
            console.log(`You are close to graduating. Redo some assignments and see if an instructor or Project Manager will change your grade.`)
        }
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

    randomGradeChange (student){//just wanted to practice inheriting a method and slightly changing that method
        super.randomGradeChange(student);
        console.log(`Only Project Manager's should be changing grades. What was our instructor doing?`);
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
    favSubjects: ['Html', ' CSS', ' JavaScript'],
    grade: 52
})

const joe = new Student ({
    name: 'Joe',
    age: 71,
    location: 'Augusta',
    gender: 'Male',
    previousBackground: 'NFL Quarterback',
    className: 'Web18',
    favSubjects: ['React' , ' Python', ' AJAX'],
    grade: 91
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

//Stretch

console.log(`\n*****Stretch Work*****\n`);
console.log('Joe\'s grade:', joe.grade);
dan.randomGradeChange(joe, '\n');
jeremiah.randomGradeChange(joe, '\n');

let count = 0;
while (ethan.grade<=70){
    josh.randomGradeChange(ethan);
    count ++;
}
console.log(`\nWell it took ${count} grade changes, but we finally made it!\n`)
ethan.graduate();

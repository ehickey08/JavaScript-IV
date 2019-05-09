// CODE here for your Lambda Classes
//You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes
class Person {
    constructor (props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender
    }

    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor (props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo (subject) {
        console.log(`Today we are learning about ${subject}.`)
    }

    grade (student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Students extends Person {
    constructor (props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }

    listsSubjects() {
        console.log(`${this.name}'s favorite subjects are ${this.favSubjects}.`);
    }

    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge (subject) {
        console.log(`${this.name} has begun sprint challnege on ${subject}.`)
    }
}

class ProjectManager extends Instructor {
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp (channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times! `);
    }

    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
} 
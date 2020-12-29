class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    
    constructor(name, age, major) {
        super(name,age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name,age);
        this.home = home;
    }

    getGreeting() {

        let greeting = super.getGreeting();

        if(this.home) {
            greeting = `I am ${this.name}. I am from ${this.home}.`
        } else {
            greeting = `I am ${this.name}.`
        }

        return greeting
    }


}

const me = new Traveler("James Fisher", 43, 'Seattle');
console.log(me.getGreeting());

const you = new Traveler();
console.log(you.getGreeting());
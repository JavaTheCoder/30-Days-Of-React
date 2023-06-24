const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// Find the person who has many skills in the users object.
let max = 0;
for (let val of Object.values(users)) {
    if (val.skills.length >= max) {
        max = val.skills.length
    }
}
console.log(max)

// Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedInCount = 0
let pointsCount = 0
for (let val of Object.values(users)) {
    if (val.isLoggedIn) {
        loggedInCount += 1
    }
    if (val.points >= 50) {
        pointsCount += 1
    }
}
console.log(loggedInCount)
console.log(pointsCount)

// Find people who are MERN stack developer from the users object
let mernStackDevs = []
for (let val of Object.values(users)) {
    if (val.skills.includes("MongoDB") &&
        val.skills.includes("Express") &&
        val.skills.includes("React") &&
        val.skills.includes("Node")) {
        mernStackDevs.push(val.email)
    }
}

// Set your name in the users object without modifying the original users object
const usersCopy = Object.assign({}, users)
usersCopy.Javokhir = {
    email: 'javokhir@gmail.com',
    skills: ['.NET', 'C#', 'SQL Server', 'Postgres', 'MongoDB', 'Typescript', 'NUnit'],
    age: 20,
    isLoggedIn: false,
    points: 50
}
console.log(usersCopy)

// Get all keys or properties of users object
console.log(Object.keys(users))

// Get all the values of users object
console.log(Object.values(users))

// Classes ------------------------------------------------------------------------------------------------------
// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {

}

// Override the method you create in Animal class
class Cat extends Animal {
    getAnimalInfo() {
        return `${this.name} is a cat. He/She is ${this.age} y.o.`
    }
}


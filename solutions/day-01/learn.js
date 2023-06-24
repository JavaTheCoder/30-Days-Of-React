// Desctructuring
const countries = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland',
]

let [gem, fra, , ...nordicCountries] = countries
console.log(gem, fra, nordicCountries)

const countries1 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]

for (const [country, city] of countries1) {
    console.log(country, city)
}

let [x, y] = [2, (value) => value ** 2]
y = y(5)
y // 25

const rectangle = {
    width: 20,
    height: 10,
}

let { width, height } = rectangle
console.log(width, height) // 20, 10

let { width: w, height: h, perimeter: p = 200 } = rectangle
console.log(w, h, p) // 20, 10, 200

const props1 = {
    user: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        age: 250
    },
    post: {
        title: 'Destructuring and Spread',
        subtitle: 'ES6',
        year: 2020
    },
    skills: ['JS', 'React', 'Redux', 'Node', 'Python']

}

const {
    user: { firstName, lastName, age },
    post: { title, subtitle, year },
    skills: [skillOne, skillTwo, skillThree, skillFour, skillFive]
} = props1


// Spread Operator
const countriess = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland',
]

let [ger, fran, , ...nordicCs] = countriess

console.log(ger)
console.log(fran)
console.log(nordicCs)

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]

console.log(fullStack)

const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4, 5))

// Functional Programming

// Filter
const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens1 = numbers1.filter((n) => n % 2 === 0)
const odds1 = numbers1.filter((n) => n % 2 !== 0)
console.log(evens1) // [0, 2, 4, 6, 8, 10]
console.log(odds1) // [1, 3, 5, 7, 9]

// Reduce
const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((acc, cur) => acc + ' ' + cur)
console.log(helloWorld) // "Hello world !"

// Find
const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenNum = numbers2.find((n) => n % 2 === 0)
const firstOddNum = numbers2.find((n) => n % 2 !== 0)
console.log(firstEvenNum) // 0
console.log(firstOddNum) // 1

// FindIndex
const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenIndex = numbers3.findIndex((n) => n % 2 === 0)
const firstOddIndex = numbers3.findIndex((n) => n % 2 !== 0)
console.log(firstEvenIndex) // 0
console.log(firstOddIndex) // 1

// Exercise
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]


// Print the price of each product using forEach
products.forEach(p => {
    console.log(p.price)
})

// Print the product items as follows using forEach
// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros.
// The price of coffee is 10 euros.
// The price of tea is unknown.
products.forEach(p => {
    console.log(`The price of ${p.product} is ${p.price} euros.`)
})

// Calculate the sum of all the prices using forEach
let sum = 0;
products.forEach(p => {
    if (p.price !== ' ' && p.price !== '')
        sum += p.price
})

// Create an array of prices using map and store it in a variable prices
let prices = []
products.map(p => prices.push(p.price))

// Filter products with prices
products.filter(p => p.price)

// Use method chaining to get the sum of the prices(map, filter, reduce)
products.map(p => p.price)
    .filter(p => p != "" && p != " ")
    .reduce((acc, cur) => acc + cur)

// Calculate the sum of all the prices using reduce only
products.reduce((acc, cur) => {
    return acc + cur.price
}, 0)

// Find the first product which doesn't have a price value
products.find(p => p.price === '' || p.price === ' ')

// Find the index of the first product which does not have price value
products.findIndex(p => p.price === '' || p.price === ' ')

// Check if some products do not have a price value
products.some(p => p.price === '' || p.price === ' ')

// Check if all the products have price value
products.every(p => p.price !== '' || p.price !== ' ')

// Explain the difference between forEach, map, filter and reduce
// forEach iterates through array and doesn't mutate it
// map iterates through array and mutates it
// filter mutates the array based on a certain criteria
// reduce reduces array into a single value

// Explain the difference between filter, find and findIndex
// filter mutates the array based on a certain criteria
// find returns first occurence of a value
// findIndex returns an idx of the first occurence of a value

// Explain the difference between some and every
// some checks if at least one element satisfies the condition
// every checks if all elements satisfy the condition

// Classes
class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getSkills() {
        return this.skills
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`

        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}

// console.log(Person.favoriteSkill())
// console.log(Person.showDateTime())

// Inheritance
class Student extends Person {
    saySomething() {
        console.log('I am a child of the person class')
    }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())
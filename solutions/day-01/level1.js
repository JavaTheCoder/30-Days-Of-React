// Create an empty object called dog
const dog = {}

// Print the the dog object on the console
console.log(dog)

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Amogus"
dog.legs = 4
dog.color = "white"
dog.age = 7
dog.bark = function () {
	return "woof woof"
}

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog["age"])
console.log(dog.bark())

// Set new properties the dog object: breed, getDogInfo
dog.breed = "i don't know"
dog.getDogInfo = function () {
	return `${dog.name} is a ${dog.color} dog`
}

// Functions ----------------------------------------------------------------------------------------------------

// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
	return `${firstName} ${lastName}`
}

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(p1, p2) {
	return p1 + p2
}

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
const _areaOfCircle = function (r) {
	return Math.PI * r * r
}

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
// Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(oC) {
	return (oC * 9 / 5) + 32
}

// Calculate BMI
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function calcBMI(height, weight) {
	const bmi = weight / (height * height)
	if (bmi <= 18.5) {
		return "Underweight"
	} else if (bmi > 18.5 && bmi <= 24.9) {
		return "Normal weight"
	} else if (bmi >= 25 && bmi <= 29.9) {
		return "Overweight"
	}
	return "Obese"
}

// Write a function called checkSeason, it takes a month parameter and returns the season:
// Fall, Winter, Spring or Summer
function checkSeason(month) {
	switch (month) {
		case 1: case 2: case 12:
			return "Winter"
		case 3: case 4: case 5:
			return "Spring"
		case 6: case 7: case 8:
			return "Summer"
		case 9: case 10: case 11:
			return "Fall"
		default:
			return "Incorrect Input"
	}
}

// Classes ------------------------------------------------------------------------------------------------------
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
	constructor(name, age, color, legs) {
		this.name = name
		this.age = age
		this.color = color
		this.legs = legs
	}

	getAnimalInfo() {
		return `${this.name} is ${this.age} y.o. And he has ${this.legs} legs and he's ${this.color}`
	}

	setAge(age) {
		this.age = age
	}

	getAge() {
		return this.age
	}
}

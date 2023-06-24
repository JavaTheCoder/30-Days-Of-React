// Create an object literal called personAccount.It has firstName, lastName, incomes, expenses properties
// and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
    it: {
        firstName: "Amogus",
        lastName: "Amogusov",
        incomes: [],
        expenses: [],
        totalIncome: function () {
            let total = 0;
            for (let income of this.incomes) {
                total += income.amount;
            }
            return total;
        },
        totalExpenses: function () {
            let total = 0;
            for (let expense of this.expenses) {
                total += expense.amount;
            }
            return total;
        },
        accountInfo: function () {
            return `${this.firstName} ${this.lastName} is a human`
        },
        addIncome: function (description, value) {
            this.incomes.push({ description, value })
        },
        addExpense: function (description, value) {
            this.expenses.push({ description, value })
        },
        accountBalance: function () {
            return this.totalIncome() - this.totalExpenses()
        }
    }
}

// Other questions are based on the following two arrays: users and products
const appUsers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]

// Imagine you are getting the above users collection from a MongoDB database.
// a.Create a function called signUp which allows user to add to the collection.
//      If user exists, inform the user that he has already an account.
function signUp(user) {
    if (appUsers.includes(user)) {
        console.log("You already have an account")
    } else {
        appUsers.push(user)
        console.log("Successfully signed in")
    }
}

// b.Create a function called signIn which allows user to sign in to the application
function signIn(user) {
    let appUser = appUsers.find(u => u._id == user._id)
    appUser.isLoggedIn = true
}

// The products array has three elements and each of them has six properties.
// a.Create a function called rateProduct which rates the product 
function rateProduct(id, rating) {
    let product = products.find(p => p._id == id)
    product.ratings.push(rating)
}

// b.Create a function called averageRating which calculate the average rating of a product
function averageRating() {
    let ratings = Object.values(products.ratings)
    const sum = ratings.reduce((acc, curr) => acc + curr, 0);
    return sum / ratings.length;
}

// Create a function called likeProduct.This function will help like the product
//  if it is not liked and remove like if it was liked.
function likeProduct(product, userId) {
    let pr = products.find(p => p._id == product._id)
    if (pr.likes.includes(userId)) {
        pr.likes = pr.likes.filter((id) => id !== userId);
    } else {
        pr.likes.push(userId)
    }
}

// Classes ------------------------------------------------------------------------------------------------------
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode)
// and measure of variability(range, variance, standard deviation). In addition to those measures find the
// min, max, count, percentile, and frequency distribution of the sample. You can create a class called
// Statistics and create all the functions which do statistical calculations as method for the Statistics class. 
class Statistics {
    constructor(mean, median, mode, range, variance, standardDeviation) {
        this.mean = mean
        this.median = median
        this.mode = mode
        this.range = range
        this.variance = variance
        this.standardDeviation = standardDeviation
    }

    calcMeasureOfCentralTendency() {
        return this.mean * this.median * this.mode;
    }

    calcMeasureOfVariability(count, percentile, frequency) {
        return this.mean * this.median * count * percentile * frequency
    }
}

let s = new Statistics(1, 2, 7, 2, 3, 1)
console.log(s.calcMeasureOfCentralTendency())
console.log(s.calcMeasureOfVariability(5, 2, 4))

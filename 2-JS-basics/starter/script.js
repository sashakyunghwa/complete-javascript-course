/****************************** 
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;


/****************************** 
* Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);


/********************************
 * Basic operators
 */

var year, yearJohn, yearMark; 
now = 2018;
ageJohn = 28;
ageMark =33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

/*********************************
* Operator precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y; 
x = y = (3 + 5) * 4 -6; // 8 * 4 -6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++
console.log(x);
x--;
console.log(x);


/******************************
* CODING CHALLENGE 1 
*/
var johnMass = 120; // kg 
var johnHeight = 1.8; // meters
var markMass = 140; // kg
var markHeight = 2.7; // meters

var johnBMI = johnMass / (johnHeight * johnHeight);
var markBMI = markMass / (markHeight * markHeight);
console.log(johnBMI, markBMI);

var higherBMI = markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\'s BMI? ' + higherBMI);

/******************************
* If / else statements 
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var johnMass = 120; // kg 
var johnHeight = 1.8; // meters
var markMass = 440; // kg
var markHeight = 2.7; // meters

var johnBMI = johnMass / (johnHeight * johnHeight);
var markBMI = markMass / (markHeight * markHeight);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}

// var higherBMI = markBMI > johnBMI;
// console.log('Is Mark\'s BMI higher than John\'s BMI? ' + higherBMI);

/******************************
* Boolean logic 
*/

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20 = age >=13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else { 
    console.log(firstName + ' is a man.');
}


/******************************
* The Ternary Operator and Switch Statements
*/

var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher': 
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver': 
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer': 
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}


/******************************
* Truthy and Falsy values and equality operators
*/

// falsey values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values;

var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}


/******************************
* CODING CHALLENGE 2
*/

var johnScoreAverage = (99 + 134 + 105) / 3;
var mikeScoreAverage = (97 + 134 + 105) / 3;
var maryScoreAverage = (97 + 134 + 105) / 3;
console.log(johnScoreAverage, mikeScoreAverage, maryScoreAverage);

if (johnScoreAverage > mikeScoreAverage && johnScoreAverage > maryScoreAverage) {
    console.log('John\'s team is the winner with an average score of ' + johnScoreAverage);
} else if (mikeScoreAverage > johnScoreAverage && mikeScoreAverage > maryScoreAverage) {
    console.log('Mike\'s team is the winner with an average score of ' + mikeScoreAverage);
} else if (maryScoreAverage > johnScoreAverage && maryScoreAverage > mikeScoreAverage) {
    console.log('Mary\'s team is the winner with an average score of ' + maryScoreAverage);
} else {
    console.log('It\'s a draw with all having the same average score');
}


/******************************
* Functions
*/

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');


/******************************
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));


/******************************
* Arrays
*/

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);


/******************************
* CODING CHALLENGE 3
*/

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);


/******************************
* Objects and properties
*/

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);


/******************************
* Objects and methods
*/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);


/******************************
* CODING CHALLENGE 4
*/

var john = {
    fullName: 'John Smith',
    mass: 400, // kg
    height: 1.8, // meters
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Bowers',
    mass: 200, // kg
    height: 1.9, // meters
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}


/******************************
* Loops and iteration
*/

// For loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
// ...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 false, exit the loop!

// var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// // While loop
// var i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}


/******************************
* CODING CHALLENGE 5
*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [],
        this.finalAmount = []
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2
            } else if (bill >= 50 && bill <= 200) {
                percentage = .15;
            } else {
                percentage = .1;
            } 
            this.tips[i] = percentage * bill;
            this.finalAmount[i] = bill + bill * percentage;
        }
    }
}

john.calcTips();
console.log(john);

var mark = {
    fullName: 'Mark Bowler',
    bills: [77, 5, 110, 45],
    calcTips: function() {
        this.tips = [],
        this.finalAmount = []
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2
            } else if (bill >= 100 && bill <= 300) {
                percentage = .1;
            } else {
                percentage = .25;
            } 
            this.tips[i] = percentage * bill;
            this.finalAmount[i] = bill + bill * percentage;
        }
    }
}

mark.calcTips();
console.log(mark);

function tipAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
        return sum / tips.length;
}

john.average = tipAverage(john.tips);
mark.average = tipAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips with an average of $' + mark.average);
}
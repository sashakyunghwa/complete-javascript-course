///////////////////////////////////////
// Lecture: Hoisting

// hoisting works up here with function declaration
calculateAge(1965);

// function declaration
function calculateAge(year) {
    console.log(2016 - year);
}

// hoisting does not work up here for function expression
// retirement(1965);

// function expression
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

// variables 
// must declare variable before you can use the variable 
console.log(age);
var age = 23;


function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);














///////////////////////////////////////
// Lecture: Scoping


// First scoping example

// Lexical Scoping (scope chain)
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

// calculateAge(1985);

// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

// this keyword only becomes something/part of an object as soon as the method/function gets called (very important!)



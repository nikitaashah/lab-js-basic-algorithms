// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Edward Cullen";

// 1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}.`);

// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Jacob Black";

// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}.`);

// ========== End of Iteration 1 ========== //



// Iteration 2: Conditionals

/* 
2.1. Depending on which name is longer, print:
     1. The driver has the longest name, it has XX characters. or
     2. It seems that the navigator has the longest name, it has XX characters. or
     3. Wow, you both have equally long names, XX characters!.
*/

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
} else if (hacker1Length < hacker2Length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2Length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}

// ========== End of Iteration 2 ========== //



// Iteration 3: Loops

/*
3.1 Print all the characters of the driver's name, separated by a space and in capitals
i.e. "J O H N"
*/

let driverName = "";

for (let i = 0; i < hacker1Length; i++) {
    if (hacker1.charAt(i) !== " ") {
        driverName += hacker1.charAt(i).toUpperCase();
        if (i < hacker1Length - 1) {
            driverName += " ";
        }
    }
}

console.log(driverName);

/*
3.2 Print all the characters of the navigator's name, in reverse order.
i.e. "nhoJ"
*/

let navigatorName = "";

for (let j = hacker2Length -1; j >= 0; j--) {
    navigatorName += hacker2[j];
}

console.log(navigatorName);

/*
3.3 Depending on the lexicographic order of the strings, print:
    1. The driver's name goes first.
    2. Yo, the navigator goes first definitely.
    3. What?! You both have the same name?
*/

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?");
}

// ========== End of Iteration 3 ========== //
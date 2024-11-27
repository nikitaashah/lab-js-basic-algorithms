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



// ========== Bonus 1 ========== //

/*
Go to lorem ipsum generator and:
• Generate 3 paragraphs. Store the text in a variable type of string.
• Make your program count the number of words in the string.
• Make your program count the number of times the Latin word et appears.
*/

// Step 1: Store the Lorem Ipsum text in a string variable
let loremText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at et dui. 
Pellentesque et facilisis ligula. Ut pharetra, nisi a fermentum aliquet, 
et volutpat nisi sapien id purus. Sed et lectus lorem. 

Vestibulum et orci eu metus malesuada tincidunt. Etiam vel nisl at lacus facilisis euismod. 
Maecenas et elit varius, hendrerit nunc sed, viverra est. Duis et nisi vitae felis consectetur pharetra. 

Curabitur at metus sit amet tortor viverra luctus et nec elit. Integer id nibh et magna sollicitudin iaculis. 
Suspendisse potenti. Fusce eget et purus a massa lacinia mollis. Vivamus et magna arcu.
`;

// Step 2: Initialize counters
let wordCount = 0;
let etCount = 0;
let currentWord = "";

// Step 3: Loop through the text character by character
for (let i = 0; i <= loremText.length; i++) {
    let char = loremText[i];
    
    // If we encounter a space, punctuation, or end of string, process the word
    if (char === " " || char === "\n" || char === "\t" || i === loremText.length || /[.,!?]/.test(char)) {
        if (currentWord) {
            wordCount++; // Increment the word count
            if (currentWord.toLowerCase() === "et") {
                etCount++; // Increment the "et" count if it's a match
            }
            currentWord = ""; // Reset the word
        }
    } else {
        // Build the current word
        currentWord += char;
    }
}

// Step 4: Output the results
console.log(`Word Count: ${wordCount}`);
console.log(`Occurrences of "et": ${etCount}`);

// ========== End of Bonus 1 ========== //



// ========== Bonus 2 ========== //

/*
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

// Step 1: Initialize the variable
let phraseToCheck = "A man, a plan, a canal, Panama!";

// Step 2: Checking if a string is palindrome or not

// Normalize the string: remove non-alphanumeric characters and convert to lowercase
let cleanedPhrase = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    let temp = phraseToCheck[i];
    if (temp === " " || temp === "\n" || temp === "\t" || i === phraseToCheck.length || /[.,!?]/.test(temp)) {
        continue;
    } else {
        cleanedPhrase += temp.toLowerCase();
    }
}

// Use two pointers to compare characters from the start and end
let left = 0;

let right = cleanedPhrase.length - 1;

let palindrome = true;

while(left < right) {
    if (cleanedPhrase[left] !== cleanedPhrase[right]) {
        palindrome = false;
        break;
    } else {
        left++;
        right--;
        continue;
    }
}

// If we complete the loop without mismatches, it's a palindrome
if (palindrome === true) {
    console.log(`"${phraseToCheck}" is a palindrome string.`);
} else {
    console.log(`"${phraseToCheck}" is not a palindrom string.`);
}
// ========== End of Bonus 2 ========== //

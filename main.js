// const theWord = "Eldalatony is the BEST"

// const randomLetters = ["c", "&", "b", "g", "i", "$", "z", "?", "r", "e"]

// const container = document.getElementById("container")

// const generateRandomColor = () => {
//   let v1 = Math.round(Math.random() * 255)
//   let v2 = Math.round(Math.random() * 255)
//   let v3 = Math.round(Math.random() * 255)
//   let randomColor = `${v1},${v2},${v3} `
//   return randomColor
// }

// let wordIndex = 0

// const animateWords = function (word) {
//   let letter = document.createElement("span")
//   container.appendChild(letter)
//   for (let i = 0; i < randomLetters.length; i++) {
//     setTimeout(() => {
//       const color = generateRandomColor()
//       if (wordIndex < word.length) {

//         letter.textContent = randomLetters[i]
//       }

//       letter.style.color = `rgb(${color})`

//       if (i == randomLetters.length - 1 && wordIndex < word.length) {
//         letter.textContent = word[wordIndex]

//         letter.style.color = "white"
//         animateWords(theWord)
//         wordIndex += 1
//       }
//     }, 20 * i);

//   }
// }

// animateWords(theWord)




// Define the text to be animated
const theWord = "Eldalatony is the BEST";

// Array of random letters for animation
const randomLetters = ["c", "&", "b", "g", "i", "$", "z", "?", "r", "e"];

// Select the container element
const container = document.getElementById("container");

// Function to generate a random RGB color
const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `${r},${g},${b}`;
};

// Keep track of the current character index in the word
let wordIndex = 0;

// Function to animate the word
const animateWords = (word) => {
  // Create a new span element for the current character
  const letter = document.createElement("span");
  container.appendChild(letter);

  // Animate the letter by cycling through random letters
  randomLetters.forEach((randomLetter, i) => {
    setTimeout(() => {
      // Generate a random color
      const color = generateRandomColor();

      if (wordIndex < word.length) {
        // Display the random letter
        letter.textContent = randomLetter;
      }

      // Apply the random color to the letter
      letter.style.color = `rgb(${color})`;

      // Once we've cycled through all random letters, display the actual letter
      if (i === randomLetters.length - 1 && wordIndex < word.length) {
        letter.textContent = word[wordIndex];
        letter.style.color = "white"; // Final color for the letter

        // Move to the next letter in the word
        wordIndex += 1;

        // Recursively animate the next letter
        animateWords(word);
      }
    }, 20 * i); // Delay increases with each iteration
  });
};

// Start animating the word
animateWords(theWord);

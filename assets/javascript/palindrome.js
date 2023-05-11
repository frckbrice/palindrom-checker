

const btnCheck = document.querySelector(".btn-check");
const display = document.querySelector(".display-result");

btnCheck.addEventListener("click", Palindrome);

function isPalindrome () {
 
  const text = document.querySelector('.input-palindrom').value;
  const inputText = normalizedText(text);
  let long = inputText.length;
  let n = Math.trunc(long / 2);
  for (let i = 0; i < n + 1; i++) {
    if (inputText[i] !== inputText[long - 1 - i]) {
      return `NO!   The chaine "${inputText}" is not a palindrom`;
    } 
  }
 return `YES!   The chaine "${inputText}" is a palindrom`;;
}

function Palindrome(e) {
   e.preventDefault();
  display.innerHTML = isPalindrome(); 
 document.querySelector(".input-palindrom").value = '';
}

//* function to remove special characters and space from input text 
//function to normalize a text

const normalizedText = (chaine) => {
  let newArray = [];
  // Array for the differents punctuation mark that exist in english both US/UK
  let listOfPunctuationMark = [
    ".",
    "?",
    "!",
    "-",
    ",",
    "{",
    "}",
    "[",
    "]",
    "...",
    "&",
    "@",
    "/",
    "*",
    "(",
    ")",
    ":",
    ";",
    "”",
    "“",
    "–",
    " ",
    "‘",
    "’",
  ];
  for (let elem of chaine.split('')) {
    if (listOfPunctuationMark.includes(elem) == 0) {
      newArray.push(elem);
    }
  }
  return newArray.join("").toLowerCase();
};

 let str = 'do geese see god';
 console.log(normalizedText(str));
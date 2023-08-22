

const btnCheck = document.querySelector(".btn-check");
const display = document.querySelector(".display-result");

btnCheck.addEventListener("click", Palindrome);

function isPalindrome () {
  const inputText = document.querySelector('.input-palindrom').value;
  let long = inputText.length;
  let n = Math.trunc(long / 2);
  for (let i = 0; i < n + 1; i++) {
    if (inputText[i] !== inputText[long - 1 - i]) {
      return `NO!   The word ${inputText} is not a palindrom`;
    } 
  }
 return `YES!   The word "${inputText}" is a palindrom`;;
}

function Palindrome() {
  display.innerHTML = isPalindrome(); 
 document.querySelector(".input-palindrom").value = '';
}

// let str = isPalindrome("Palindrome");
// console.log(str);
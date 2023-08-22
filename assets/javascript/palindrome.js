const btnCheck = document.querySelector(".btn-check");

btnCheck.addEventListener("click", Palindrome);

function isPalindrome() {
  const text = document.querySelector(".input-palindrom").value;
  const inputText = normalizedText(text);
  const long = inputText.length;
  const n = Math.trunc(long / 2);
  for (let i = 0; i < n + 1; i++) {
    console.log(i);
    if (inputText[i] !== inputText[long - 1 - i]) {
      return `<span class="bad-result"> NO! The chaine "${inputText}" is not a palindrom</span>`;
    }
  }
  return `<span class="good-result">YES!   The chaine "${inputText}" is a palindrom</span>`;
}

function Palindrome(e) {
  e.preventDefault();
  document.getElementById("display-result").innerHTML = isPalindrome();
  document.querySelector(".input-palindrom").value = "";
}

//*function to normalize a text
/**
 *
 * @param {string} chaine
 * @returns a normalized string
 */
const normalizedText = (chaine) => {
  let newArray = [];
  chaine = chaine.split("");

  for (let elem of chaine) {
    if (/\w/.test(elem)) {
      newArray.push(elem);
    }
  }
  return newArray.join("").toLowerCase();
};

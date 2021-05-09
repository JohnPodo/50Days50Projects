const result = document.getElementById("result");
const lenghtEl = document.getElementById("length");
const upperCaseEl = document.getElementById("uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  hasLower: GetRandomLower,
  hasUpper: GetRandomUpper,
  hasNumbers: GetRandomNumber,
  hasSymbols: GetRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = result.innerText;
  if (!password) return;
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});

function GeneratePassword(hasLower, hasUpper, hasNumbers, hasSymbols, lenght) {
  let generatedPassword = "";
  const typesCount = hasLower + hasUpper + hasNumbers + hasSymbols;
  const typesArr = [
    { hasLower },
    { hasUpper },
    { hasNumbers },
    { hasSymbols },
  ].filter((item) => Object.values(item)[0]);

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < lenght; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, lenght);
  return finalPassword;
}

generateEl.addEventListener("click", () => {
  const lenght = +lenghtEl.value;
  const hasLower = lowerCaseEl.checked;
  const hasUpper = upperCaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  result.innerText = GeneratePassword(
    hasLower,
    hasUpper,
    hasNumbers,
    hasSymbols,
    lenght
  );
});

function GetRandomLower() {
  //ASCI letters starts from 97 and after for lower
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function GetRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function GetRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function GetRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

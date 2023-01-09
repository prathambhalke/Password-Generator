import "./styles.css";

const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lcase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+";

const plength = document.querySelector(".p-length");
const upperCase = document.querySelector(".Uppercase");
const lowerCase = document.querySelector(".Lowercase");
const pNumber = document.querySelector(".p-number");
const pSymbol = document.querySelector(".p-symbol");
const submit = document.querySelector(".generate");
const password = document.querySelector(".password");

submit.addEventListener("click", () => {
  let initialPassword = empty;

  upperCase.checked ? (initialPassword += uCase) : "";
  lowerCase.checked ? (initialPassword += lcase) : "";
  pNumber.checked ? (initialPassword += number) : "";
  pSymbol.checked ? (initialPassword += symbol) : "";

  password.value = generatePassword(plength.value, initialPassword);
});

function generatePassword(l, initialPassword) {
  let pass = "";

  for (let i = 0; i < l; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }
  return pass;
}

const copy = document.querySelector(".copy");

copy.addEventListener("click", () => {
  if (password.value == "") {
    alert("Please generate the password");
  } else {
    password.select();
    document.execCommand("copy");
    alert("Password has been copied to clipboard !");
  }
});

const firstName = document.querySelector('#FirstName'),
  secondName = document.querySelector('#SecondNAme'),
  email = document.querySelector('#email'),
  password = document.querySelector('#password'),
  button = document.querySelector("#button"),
  secondpassword = document.querySelector("#secondPassword"),
  pasw = document.querySelector(".errorPas ");
const selectElement = document.getElementById('nationality');
let isfalse = false;

const form = document.querySelector("form")


selectElement.addEventListener('change', (event) => {
  const selectedOption = event.target.value;
  console.log(selectedOption);

});

let inpust = [firstName, secondName, email, selectElement];
inpust.forEach((item) => {
  item.addEventListener("input", (e) => {
    let target = e.target
    if (target.name === "ism" && target.value.length <= 3) {
      setError(target.nextElementSibling, "Ism 3ta harfdan ko'p bulishi kerak")
      isfalse = false;
    }

    else if ((target.name === "ism" || target.name === "familya") && ![...target.value].every((l) => isNaN(Number(l)))) {
      setError(target.nextElementSibling, "ism va familyada faqat harflar qatnashishi kerak")
      isfalse = false;

    }
    else if (target.name === "familya" && target.value.length <= 4) {
      setError(target.nextElementSibling, "Ism 4ta harfdan ko'p bulishi kerak")
      isfalse = false;
    }
    else if (target.name === "emailInp" && !target.value.includes("@")) {
      setError(target.nextElementSibling, "Email xato kiritildi")
      isfalse = false;

    }
    else if (secondpassword.value !== password.value) {
      pasw.innerText = "kodni tasdiqlash xato buldi";
      isfalse = false;
    }
    else {
      clearError(target.nextElementSibling)
      isfalse = true;
    }
  })
})

// button.addEventListener('click', () => {

//   if (secondpassword.value !== password.value) {
//     pasw.innerText = "kodni tasdiqlash xato buldi"
//   }
// })
form.addEventListener("submit", (e) => {
  e.preventDefault()
  let formData = new FormData(form)
  let data = Object.fromEntries(formData)
  console.log('submit', data)

})












function setError(errorElem, errorMessage) {
  errorElem.innerText = errorMessage
}
function clearError(errorElem) {
  errorElem.innerText = ""
}
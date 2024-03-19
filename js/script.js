const firstName = document.querySelector('#FirstName'),
  secondName = document.querySelector('#SecondNAme'),
  email = document.querySelector('#email'),
  password = document.querySelector('#password'),
  button = document.querySelector("#button"),
  secondpassword = document.querySelector("#secondPassword"),
  pasw = document.querySelector(".errorPas ");


let inpust = [firstName, secondName, email];
inpust.forEach((item) => {
  item.addEventListener("input", (e) => {
    let target = e.target
    if (target.name === "ism" && target.value.length <= 3) {
      setError(target.nextElementSibling, "Ism 3ta harfdan ko'p bulishi kerak")
    }
    else if ((target.name === "ism" || target.name === "familya") && ![...target.value].every((l) => isNaN(Number(l)))) {
      setError(target.nextElementSibling, "ism va familyada faqat harflar qatnashishi kerak")

    }
    else if (target.name === "familya" && target.value.length <= 4) {
      setError(target.nextElementSibling, "Ism 3ta harfdan ko'p bulishi kerak")

    }
    else if (target.name === "emailInp" && !target.value.includes("@")) {
      setError(target.nextElementSibling, "Email xato kiritildi")
    }
    else {
      clearError(target.nextElementSibling)
    }

  })

})


button.addEventListener('click', () => {
  if (secondpassword.value !== password.value) {
    pasw.innerText = "kodni tasdiqlash xato buldi"
  }
})



function setError(errorElem, errorMessage) {
  errorElem.innerText = errorMessage
}

function clearError(errorElem) {
  errorElem.innerText = ""
}



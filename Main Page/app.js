/* JS For the pre-loader */

$(window).ready(() => {
  setTimeout(() => {
    $("#preloader").css("display", "none")
    $("html").css({ overflow: "scroll" })
  }, 200)
})

/* JS for the NavBar */

document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)

    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show")
        // change icon
        toggle.classList.toggle("bx-x")
        // add padding to body
        bodypd.classList.toggle("body-pd")
        // add padding to header
        headerpd.classList.toggle("body-pd")
      })
    }
  }

  showNavbar("header-toggle", "nav-bar", "body-pd", "header")

  const linkColor = document.querySelectorAll(".nav_link")

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"))
      this.classList.add("active")
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink))
})

/* JS For the profile acc Number */

const accNum = document.getElementById("accNum")
let zeroNums = 20
let accLength = 1
for (let i = 0; i < zeroNums; i++) {
  accLength *= 10
}
let accountNumber = Math.floor(Math.random() * accLength).toString()
console.log(accountNumber)

let newNum = ""
for (let i = 0; i < accountNumber.length; i++) {
  let counter = i + 1
  counter % 5 == 0 ? (newNum += " ") : (newNum += accountNumber[i])
}

accNum.textContent = newNum

console.log(`\n${newNum}`)

let testString = newNum
for (let i = 0; i < testString.length; i++) {
  if (testString[i] !== " ") {
    testString[i] = "*"
  }
}
console.log(testString)

/* JS For the table of money section */

$(window)
  .on("load resize ", () => {
    let scrollWidth =
      $(".tbl-content").width() - $(".tbl-content table").width()
    $(".tbl-header").css({ "padding-right": scrollWidth })
  })
  .resize()

/* JS For the money forms */

const dateInputA = $(".dateInputA")
const dateInputB = $(".dateInputB")

const fillDate = () => {
  const date = new Date()
  let today = `${date.getFullYear()}-${date.getMonth() + 1}-${
    date.getDate() + 1
  }`

  let formattedDate = new Date(today).toLocaleString("en-us", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
  return formattedDate
}

dateInputA.text(fillDate())
dateInputB.text(fillDate())

/* styling the amount input */

const currencyInput = document.querySelectorAll('input[type="currency"]')
const currency = "USD"

Array.from(currencyInput).forEach((eachInput) => {
  // format initial value
  onBlur({ target: currencyInput })

  // bind event listeners
  eachInput.addEventListener("focus", onFocus)
  eachInput.addEventListener("blur", onBlur)
})

function localStringToNumber(s) {
  return Number(String(s).replace(/[^0-9.-]+/g, ""))
}

function onFocus(e) {
  let value = e.target.value
  e.target.value = value ? localStringToNumber(value) : ""
}

function onBlur(e) {
  let value = e.target.value

  let options = {
    maximumFractionDigits: 2,
    currency: currency,
    style: "currency",
    currencyDisplay: "symbol",
  }

  e.target.value =
    value || value === 0
      ? localStringToNumber(value).toLocaleString(undefined, options)
      : ""
}

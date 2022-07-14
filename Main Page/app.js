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
  let today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

  let formattedDate = new Date(today).toLocaleString("en-us", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
  return formattedDate
}

dateInputA.text(fillDate())
dateInputB.text(fillDate())

/* JS For styling the amount input */

var currencyInput = document.querySelector('input[type="currency"]')
var currency = "USD"

// format inital value
onBlur({ target: currencyInput })

// bind event listeners
currencyInput.addEventListener("focus", onFocus)
currencyInput.addEventListener("blur", onBlur)

function localStringToNumber(s) {
  return Number(String(s).replace(/[^0-9.-]+/g, ""))
}

function onFocus(e) {
  var value = e.target.value
  e.target.value = value ? localStringToNumber(value) : ""
}

function onBlur(e) {
  var value = e.target.value

  var options = {
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

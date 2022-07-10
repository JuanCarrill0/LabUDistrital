/* JS For the pre-loader */

$(window).ready(() => {
  setTimeout(() => {
    $("#preloader").css("display", "none")
    $("html").css({ overflow: "scroll" })
  }, 2000)
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
    var scrollWidth =
      $(".tbl-content").width() - $(".tbl-content table").width()
    $(".tbl-header").css({ "padding-right": scrollWidth })
  })
  .resize()

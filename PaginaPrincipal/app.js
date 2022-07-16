document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
});

const labels = ["January", "February", "March", "April", "May", "June"];
const ctx = document.getElementById("balanceChart").getContext("2d");

const data = {
  labels: labels,

  datasets: [
    {
      label: "Deposits",
      backgroundColor: "rgb(92, 206, 72)",
      borderColor: "rgb(92, 206, 72)",
      data: [0, 10, 5, 2, 20, 30, 45],
      color: "rgb(255,255,255)",
    },
    {
      label: "Spends",
      backgroundColor: "#FF4365",
      borderColor: "#FF4365",
      data: [0, 3, 4, 8, 45, 6, 10],
      color: "rgb(255,255,255)",
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    scales: {
      x: {
        ticks: {
          color: "rgb(255,255,255)",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        color: "rgb(255,255,255)",
      },
    },
    color: "rgb(255,255,255)",
    plugins: {
      legend: {
        labels: {
          font: {
            size: "14",
            family: "Poppins",
          },
        },
      },
    },
  },
};
var balanceChart = new Chart(ctx, config);

Chart.defaults.global.defaultColor = "rgb(255,255,255)";

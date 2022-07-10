const ButtonRegister = document.getElementById("button-register")

ButtonRegister.addEventListener("click", (e) => {
  document.getElementById("topBox").innerHTML =
    " <p><span class='text-White'> Crea tu cuenta - </span> <span class='text-Green'>Cuidar tu economía empieza ahora</span> </p> "
  document.getElementById("form-sesion").style.display = "none"
  document.getElementById("form-register").style.display = "initial"
})

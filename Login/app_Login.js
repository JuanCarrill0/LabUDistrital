const formSesion =document.getElementById("EnterPrincipalPage")
const ButtonRegister = document.getElementById("button-register");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const login = document.getElementById("login");



ButtonRegister.addEventListener("click",(e)=>{
        document.getElementById("topBox").innerHTML = "<p><span class='text-White'> Create your account- </span> <span class='text-Green'>Taking care of your economy starts now</span> </p> "
        document.getElementById("form-sesion").style.display = "none";
        document.getElementById("form-register").style.display = "initial";

});

login.addEventListener("click",(e)=>{
        if(userName.value == "admin" && password.value == "admin"){
                document.getElementById("EnterPrincipalPage").setAttribute('action', '/LabUDistrital/PaginaPrincipal/index.html');
                
        }else{
                e.preventDefault(); // <--- prevent form from submitting

                Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'User/Password Incorrect. Please Try Again'
                }).then(function(isConfirm) {
                if (isConfirm) {
                        formSesion.submit(); // <--- form submit
                }
                })
        }
});


    



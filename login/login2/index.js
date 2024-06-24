

function mostrarContraseña() {
  console.log("Función mostrarContraseña() ejecutada");
  var passwordInput = document.getElementById("password");
  var showPasswordCheckbox = document.getElementById("showPassword");

  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
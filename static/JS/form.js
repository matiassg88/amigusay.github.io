const formRegister = document.querySelector("#formRegister");

const validarFormulario = (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const mail = document.querySelector("#mail");
  const usuario = document.querySelector("#usuario");
  const contrasena = document.querySelector("#contraseña");

  const radioButtons = document.querySelectorAll('input[type="radio"]');   

  var selectedValue;
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
        selectedValue = radioButtons[i].value;
        break;
    }
  }

  let validation = true;

  if (!selectedValue) {
    document.querySelector("#errorRadio").textContent =
      "Debe completar el campo Rango";
    validation = false;
  }
  if (nombre.value.trim() === "") {
    document.querySelector("#errorNombre").textContent =
      "Debe completar el campo Nombre";
    validation = false;
  }
  if (apellido.value.trim() === "") {
    document.querySelector("#errorApellido").textContent =
      "Debe completar el campo Apellido";
    validation = false;
  }
  if (mail.value.trim() === "") {
    document.querySelector("#errorMail").textContent =
      "Debe completar el campo Mail";
    validation = false;
  }
  if (usuario.value.trim() === "") {
    document.querySelector("#errorUsuario").textContent =
      "Debe completar el campo Usuario";
    validation = false;
  }
  if (contrasena.value.trim() === "") {
    document.querySelector("#errorContrasena").textContent =
      "Debe completar el campo Contraseña";
    validation = false;
  }

  if (validation) {
    formRegister.submit();
  } else {
    return false;
  }
};

formRegister.addEventListener("submit", validarFormulario);

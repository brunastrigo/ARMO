document.addEventListener("DOMContentLoaded", function() {
  const registerForm = document.getElementById("register-form");
  const errorMessage = document.getElementById("error-message");

  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = registerForm.email.value;
    const password = registerForm.senha.value;
    const confirmPassword = registerForm["confirmar-senha"].value;

    if (!validateEmail(email)) {
      showErrorMessage("Por favor, insira um e-mail válido.");
      return;
    }

    if (password !== confirmPassword) {
      showErrorMessage("As senhas não coincidem.");
      return;
    }

    alert("Cadastro realizado com sucesso!");
    registerForm.reset();
  });

  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }

  function showErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
});

function validateForm(event) {
    event.preventDefault();

    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = '';
    errorMessage.style.display = 'none';

    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;
    let valid = true;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailPattern.test(email)) {
      valid = false;
      const emailError = document.createElement('p');
      emailError.textContent = 'Por favor, insira um e-mail válido.';
      errorMessage.appendChild(emailError);
    }

    if (password.trim() === '') {
      valid = false;
      const passwordError = document.createElement('p');
      passwordError.textContent = 'A senha não pode ser vazia.';
      errorMessage.appendChild(passwordError);
    }

    if (!valid) {
      errorMessage.style.display = 'block';
    } else {
      document.getElementById('login-form').submit();
    }
  }
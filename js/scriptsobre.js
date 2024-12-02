function validateContactForm(event) {
    event.preventDefault();
    
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = '';
    errorMessage.style.display = 'none';
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    let valid = true;

    if (!name || !email || !phone || !message) {
      valid = false;
      errorMessage.innerHTML += '<p>Por favor, preencha todos os campos.</p>';
    }
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailPattern.test(email)) {
      valid = false;
      errorMessage.innerHTML += '<p>Por favor, insira um e-mail válido.</p>';
    }
  
    if (!valid) {
      errorMessage.style.display = 'block';
    } else {
      alert("Formulário enviado com sucesso!");
      document.getElementById('contact-form').reset();
    }
  }
  
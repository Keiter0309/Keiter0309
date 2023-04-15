function register(e) {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = form.elements['username'].value;
      const password = form.elements['password'].value;
      const email = form.elements['email'].value;
      const confirmPassword = form.elements['confirmPassword'].value;

      if (password !== confirmPassword) {
        alert('Passwords do not match!');
      } else {
        // Save user registration data to database or localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email)
        localStorage.setItem('password', password);
        alert('Registration successful!');
        // Redirect to the login page
        window.location.href = 'login.html';
      }
    });
}

function login(e) {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = form.elements['username'].value;
      const email = form.elements['email'].value;
      const password = form.elements['password'].value;
      if (!username && !email && !password) {
        alert('Invalid username or password!');
      } else {
        alert('Login successful!');
        window.location.href = 'project.html';
      }
    });
}

// Maneja el inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado de recargar la página
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Aquí puedes agregar la lógica de validación o conexión a un backend
    // Simulación de inicio de sesión exitoso
    alert('Inicio de sesión exitoso');
    
    // Redirige a la página de selección de perfil
    window.location.href = "perfil.html"; // Asegúrate de tener el archivo perfil.html
  });
  
  // Lógica para el enlace de registro
  document.getElementById('register-link').addEventListener('click', function(event) {
    event.preventDefault();
    // Redirige a una página de registro o muestra el formulario de registro en esta página
    alert('Mostrar formulario de registro');
  });
  
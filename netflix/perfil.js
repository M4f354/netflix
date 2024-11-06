const profiles = document.querySelectorAll('.profile');
profiles.forEach(profile => {
  profile.addEventListener('click', () => {
    // Captura el nombre del perfil seleccionado
    const perfilSeleccionado = profile.querySelector('p').textContent;

    // Muestra una alerta con el perfil seleccionado (opcional)
    alert(`Has seleccionado el ${perfilSeleccionado}`);

    // Podrías guardar el perfil seleccionado en el LocalStorage si lo necesitas en la página siguiente
    localStorage.setItem('perfil', perfilSeleccionado);

    // Redirige a la página de inicio
    window.location.href = 'inicio.html'; // Redirige a la página de inicio
  });
});

  
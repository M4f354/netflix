// Cambiar la vista según el menú
const inicioBtn = document.getElementById('inicio');
const peliculasBtn = document.getElementById('peliculas');
const seriesBtn = document.getElementById('series');
const moviesSection = document.querySelector('.movies');
const seriesSection = document.querySelector('.series');

// Mostrar secciones según el menú
inicioBtn.addEventListener('click', () => {
  moviesSection.style.display = 'block';
  seriesSection.style.display = 'block';
});

peliculasBtn.addEventListener('click', () => {
  moviesSection.style.display = 'block';
  seriesSection.style.display = 'none';
});

seriesBtn.addEventListener('click', () => {
  moviesSection.style.display = 'none';
  seriesSection.style.display = 'block';
});

// Toggle search input visibility
document.getElementById('searchButton').addEventListener('click', function() {
  const searchInput = document.getElementById('searchInput');
  searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
  searchInput.focus();
});

// Search filter functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
  const filter = searchInput.value.toLowerCase();
  const movies = document.querySelectorAll('.movie');
  const series = document.querySelectorAll('.serie');

  movies.forEach(movie => {
    const title = movie.getAttribute('data-title').toLowerCase();
    movie.style.display = title.includes(filter) ? 'block' : 'none';
  });

  series.forEach(serie => {
    const title = serie.getAttribute('data-title').toLowerCase();
    serie.style.display = title.includes(filter) ? 'block' : 'none';
  });
});

// Modal for description
const modal = document.getElementById('description-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalGenre = document.getElementById('modal-genre');
const modalTrailer = document.getElementById('modal-trailer');
const closeButton = document.querySelector('.close-button');

// Function to show modal with title, description, genre, and trailer
function showModal(title, description, genre, trailer) {
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalGenre.textContent = genre;
  modalTrailer.href = trailer;
  modal.style.display = 'block';
}

// Close modal
closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Add click event to all series and movies
const titles = document.querySelectorAll('.serie, .movie');
titles.forEach(title => {
  title.addEventListener('click', function() {
    const titleText = this.getAttribute('data-title');
    const description = this.getAttribute('data-description');
    const genre = this.getAttribute('data-genre');
    const trailer = this.getAttribute('data-trailer');
    showModal(titleText, description, genre, trailer);
  });
});

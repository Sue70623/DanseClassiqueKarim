<script>
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Ajoute ou supprime la classe "show" au menu
  });
</script>

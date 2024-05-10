  // Funzione per mostrare la card e l'overlay
  function showCard() {
    var overlay = document.getElementById('overlay');
    var card = document.getElementById('alertCard');
    overlay.style.display = 'block';
    card.style.display = 'block';
}

// Funzione per chiudere la card e nascondere l'overlay
function closeCard() {
    var overlay = document.getElementById('overlay');
    var card = document.getElementById('alertCard');
    overlay.style.display = 'none';
    card.style.display = 'none';
}

// Mostra la card al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    showCard();
});
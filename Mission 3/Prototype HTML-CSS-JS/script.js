
// Code JavaScript
document.addEventListener('DOMContentLoaded', function() {
  var selectElement = document.getElementById('nature-select');
  var table = document.getElementById('tableau-carburant'); // L'ID de votre tableau
  var table2 = document.getElementById('tableau-hotel'); // L'ID de votre tableau
  var table3 = document.getElementById('tableau-repas'); // L'ID de votre tableau
  var table4 = document.getElementById('tableau-peage'); // L'ID de votre tableau
  var connexion = document.getElementById('connexion'); // L'ID de votre tableau


  selectElement.addEventListener('change', function(event) {
    var value = event.target.value;
    if (value === 'carburant') {
      table2.style.display = 'none'; // Cachez le tableau
      table3.style.display = 'none'; // Cachez le tableau
      table4.style.display = 'none'; // Cachez le tableau
      table.style.display = 'block'; // Affichez le tableau
    } else if (value === 'nuit_hotel') {
      table.style.display = 'none'; // Cachez le tableau
      table3.style.display = 'none'; // Cachez le tableau
      table4.style.display = 'none'; // Cachez le tableau
      table2.style.display = 'block'; // Affichez le tableau
    }else if (value === 'repas') {
      table.style.display = 'none'; // Cachez le tableau
      table2.style.display = 'none'; // Cachez le tableau
      table4.style.display = 'none'; // Cachez le tableau
      table3.style.display = 'block'; // Affichez le tableau
    }else if (value === 'peage') {
      table.style.display = 'none'; // Cachez le tableau
      table2.style.display = 'none'; // Cachez le tableau
      table3.style.display = 'none'; // Cachez le tableau
      table4.style.display = 'block'; // Affichez le tableau
    } else {
      table.style.display = 'none'; // Cachez le tableau
      table3.style.display = 'none'; // Cachez le tableau
      table2.style.display = 'none'; // Cachez le tableau
      table4.style.display = 'none'; // Cachez le tableau
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Sélectionnez le bouton de connexion et ajoutez un gestionnaire d'événement de clic
  var connexionBtn = document.getElementById('connexion');
  connexionBtn.addEventListener('click', function() {
    // Sélectionnez les champs d'identifiant et de mot de passe
    var identifiant = document.querySelector('.identifiant-input').value;
    var motDePasse = document.querySelector('.mdp-input').value;

    // Vérifiez si les deux sont 'admin'
    if (identifiant === 'admin' && motDePasse === 'admin') {
      // Si c'est le cas, redirigez vers la page d'accueil
      window.location.href = '../accueil/index.html'; // Mettez à jour avec le chemin correct de votre page d'accueil
    } else {
      // Sinon, alertez l'utilisateur
      alert('Identifiant ou mot de passe incorrect.');
    }
  });
});


document.addEventListener("DOMContentLoaded" , function() {
    // Génère un nombre aléatoire entre 1 et 100 et le stocke dans la variable randomNumber
    const nombreAleatoire = Math.floor(Math.random() * 100) + 1;

    // Récupère les références des éléments HTML nécessaires à partir de leur ID
    const input = document.getElementById("input"); // Champ de texte pour la devinette de l'utilisateur
    const boutton = document.getElementById("boutton"); // Bouton de soumission
    const result = document.getElementById("result"); // Zone d'affichage du résultat

    // Ajoute un écouteur d'événements pour le clic sur le bouton de soumission
    boutton.addEventListener("click", function() {
        // Convertit la valeur saisie par l'utilisateur en un nombre entier
        const nombreSaisie = parseInt(input.value);

        // Vérifie si la valeur saisie par l'utilisateur est un nombre valide entre 1 et 100
        if (isNaN(nombreSaisie) || nombreSaisie < 1 || nombreSaisie > 100) {
            // Affiche un message d'erreur si la valeur saisie n'est pas valide
            result.textContent = "Veuillez saisir un nombre valide entre 1 et 100.";
        } else {
            // Compare la valeur saisie par l'utilisateur avec le nombre aléatoire généré précédemment
            if (nombreSaisie === nombreAleatoire) {
                // Affiche un message de félicitations si la devinette de l'utilisateur est correcte
                result.textContent = "Bravo ! Vous avez deviné le bon nombre !";
            } else if (nombreSaisie < nombreAleatoire) {
                // Affiche un message si la devinette de l'utilisateur est trop petite
                result.textContent = "Le nombre est trop petit.";
            } else {
                // Affiche un message si la devinette de l'utilisateur est trop grande
                result.textContent = "Le nombre est trop grand.";
            }
        }
    });
});

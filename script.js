


    // Fonction pour récupérer les données météorologiques
function fetchWeatherData() {
    const apiKey = '9a2023692f61cafc07c2352caca43ade'; // Remplacez 'YOUR_API_KEY' par votre clé API réelle
    const country = document.getElementById('country-input').value.toUpperCase();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const temperature = data.main.temp;

            // Mettre à jour les informations météorologiques affichées
            document.getElementById('location').innerHTML = `${location}`;
            document.getElementById('temp').innerHTML = `${temperature}°C`;

            // Récupérer la saison actuelle
            const season = getSeason(new Date());
            // Mettre à jour la saison affichée
            document.getElementById('seas').innerHTML = `${season}`;
        })
        .catch(error => {
            console.log('Erreur lors de la récupération des données météorologiques :', error);
            // Afficher un message d'erreur
            document.getElementById('location').innerHTML = "Erreur : Pays non trouvé";
            document.getElementById('temp').innerHTML = "";
            document.getElementById('seas').innerHTML = "";
        });
}

// Fonction pour obtenir la saison en fonction de la date
function getSeason(date) {
    const month = date.getMonth() + 1;
    if (month >= 3 && month <= 5) {
        return "Printemps";
    } else if (month >= 6 && month <= 8) {
        return "Été";
    } else if (month >= 9 && month <= 11) {
        return "Automne";
    } else {
        return "Hiver";
    }
}
///////////


new fJs.AutoWriteText({
    separator: '|',
    timeout: 100
});


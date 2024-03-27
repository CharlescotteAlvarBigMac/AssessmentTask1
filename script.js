document.addEventListener("DOMContentLoaded", function() {
    const indicators = document.querySelectorAll(".indicator");
    const continentName = document.getElementById("continent-name");
    const continentInfo = document.getElementById("continent-info");
    const infoContainer = document.getElementById("info-container");

    indicators.forEach(indicator => {
        indicator.addEventListener("click", function() {
            const continent = indicator.id;
            displayContinentInfo(continent);
        });
    });

    function displayContinentInfo(continent) {
        switch (continent) {
            case "africa":
                continentName.textContent = "Africa";
                continentInfo.textContent = "Information about Africa.";
                break;
            case "asia":
                continentName.textContent = "Asia";
                continentInfo.textContent = "Information about Asia.";
                break;
            case "europe":
                continentName.textContent = "Europe";
                continentInfo.textContent = "Information about Europe.";
                break;
            case "north-america":
                continentName.textContent = "North America";
                continentInfo.textContent = "Information about North America.";
                break;
            case "south-america":
                continentName.textContent = "South America";
                continentInfo.textContent = "Information about South America.";
                break;
            case "oceania":
                continentName.textContent = "Oceania";
                continentInfo.textContent = "Information about Oceania.";
                break;
            case "antarctica":
                continentName.textContent = "Antarctica";
                continentInfo.textContent = "Information about Antarctica.";
                break;
            default:
                break;
        }

        infoContainer.style.display = "block";
    }
});

const fungusData = [
    { name: "Phyllactinia guttata", image: "https://inaturalist-open-data.s3.amazonaws.com/photos/158232141/medium.jpg" },
    { name: "Blumeria graminis", image: "https://inaturalist-open-data.s3.amazonaws.com/photos/237099909/medium.jpeg" },
    { name: "Erysiphe necator", image: "https://inaturalist-open-data.s3.amazonaws.com/photos/159236695/medium.jpg" },
    { name: "Neoerysiphe galeopsidis", image: "https://inaturalist-open-data.s3.amazonaws.com/photos/250270034/medium.jpeg" },
];

let currentIndex = 0;

function nextCard() {
    currentIndex++;
    if (currentIndex >= fungusData.length) {
        currentIndex = 0; // Начать сначала
    }

    document.getElementById("fungus-image").src = fungusData[currentIndex].image;
    document.getElementById("fungus-name").innerText = fungusData[currentIndex].name;
}

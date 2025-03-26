const fungusData = [
    { name: "Гриб 1", image: "images/fungus1.jpg" },
    { name: "Гриб 2", image: "images/fungus2.jpg" },
    { name: "Гриб 3", image: "images/fungus3.jpg" },
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

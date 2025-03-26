const fungusData = [
    { name: "Phyllactinia guttata", image: "https://inaturalist-open-data.s3.amazonaws.com/photos/158232141/medium.jpg" },
    { name: "Blumeria graminis", image: "https://inaturalist-open-data.s3.amazonaws.com/photos/237099909/medium.jpeg" },
    { name: "Erysiphe necator", image: "https://inaturalist-open-data.s3.amazonaws.com/photos/159236695/medium.jpg" },
    { name: "Neoerysiphe galeopsidis", image: "https://inaturalist-open-data.s3.amazonaws.com/photos/250270034/medium.jpeg" },
    { name: "Podosphaera leucotricha", image: "https://inaturalist-open-data.s3.amazonaws.com/photos/280981335/large.jpeg" },
];

let currentIndex = 0;

function nextCard() {
    currentIndex++;
    if (currentIndex >= fungusData.length) {
        currentIndex = 0; // Начать сначала
    }

    // Обновление изображения и названия гриба
    document.getElementById("fungus-image").src = fungusData[currentIndex].image;
    document.getElementById("fungus-name").innerText = fungusData[currentIndex].name;
    
    // Убираем текст с ответом
    document.getElementById("answer").innerText = ""; // Скрываем ответ после переключения карточки
}

function showAnswer() {
    // Показать ответ на картинку
    document.getElementById("answer").innerText = "Ответ: " + fungusData[currentIndex].name;
}

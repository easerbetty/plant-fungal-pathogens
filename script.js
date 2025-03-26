const fungusData = [
    { 
        name: "Blumeria graminis (Мучнистая роса злаков)", 
        images: [
            "https://www.inaturalist.org/photos/16545123.jpg", 
            "https://www.inaturalist.org/photos/16253456.jpg",
            "https://www.inaturalist.org/photos/15874129.jpg"
        ] 
    },
    { 
        name: "Phyllactinia guttata (Мучнистая роса фундука)", 
        images: [
            "https://www.inaturalist.org/photos/20035509.jpg", 
            "https://www.inaturalist.org/photos/20250312163932.png",
            "https://www.inaturalist.org/photos/20250312163907.png"
        ] 
    },
    { 
        name: "Erysiphe cichoracearum (Мучнистая роса тыквенных, бегонии, хризантемы, циннии)", 
        images: [
            "https://www.inaturalist.org/photos/20499067.jpg",
            "https://www.inaturalist.org/photos/20005361.jpg",
            "https://www.inaturalist.org/photos/20519176.jpg"
        ] 
    },
    { 
        name: "Erysiphe polygoni (Мучнистая роса бобовых, свеклы, крестоцветных)", 
        images: [
            "https://www.inaturalist.org/photos/20352108.jpg",
            "https://www.inaturalist.org/photos/20292019.jpg",
            "https://www.inaturalist.org/photos/20513401.jpg"
        ] 
    },
    { 
        name: "Erysiphe betae (Мучнистая роса свеклы)", 
        images: [
            "https://www.inaturalist.org/photos/20100015.jpg",
            "https://www.inaturalist.org/photos/20245123.jpg",
            "https://www.inaturalist.org/photos/20245318.jpg"
        ] 
    },
    { 
        name: "Erysiphe orontii (Мучнистая роса томата)", 
        images: [
            "https://www.inaturalist.org/photos/20100021.jpg",
            "https://www.inaturalist.org/photos/20240234.jpg",
            "https://www.inaturalist.org/photos/20403212.jpg"
        ] 
    },
    { 
        name: "Erysiphe grossularie (Мучнистая роса крыжовника и смородины)", 
        images: [
            "https://www.inaturalist.org/photos/20656120.jpg",
            "https://www.inaturalist.org/photos/20654356.jpg",
            "https://www.inaturalist.org/photos/20667234.jpg"
        ] 
    },
    { 
        name: "Erysiphe necator (Мучнистая роса винограда)", 
        images: [
            "https://www.inaturalist.org/photos/20683123.jpg",
            "https://www.inaturalist.org/photos/20574351.jpg",
            "https://www.inaturalist.org/photos/20674357.jpg"
        ] 
    },
    { 
        name: "Erysiphe bivonae (Мучнистая роса конопляных и вязов)", 
        images: [
            "https://www.inaturalist.org/photos/20382034.jpg",
            "https://www.inaturalist.org/photos/20231190.jpg",
            "https://www.inaturalist.org/photos/20132090.jpg"
        ] 
    },
    { 
        name: "Neoerysiphe galeopsidis (Мучнистая роса мяты, мелисы)", 
        images: [
            "https://www.inaturalist.org/photos/20250311092425.png",
            "https://www.inaturalist.org/photos/20250311091858.png",
            "https://www.inaturalist.org/photos/20250311092454.png"
        ] 
    },
    { 
        name: "Podosphaera leucotricha (Мучнистая роса яблони, груши, айвы)", 
        images: [
            "https://www.inaturalist.org/photos/20250312171236.png",
            "https://www.inaturalist.org/photos/20250312171028.png",
            "https://www.inaturalist.org/photos/20250312170805.png"
        ] 
    }
];

let currentIndex = 0;

function nextCard() {
    currentIndex++;
    if (currentIndex >= fungusData.length) {
        currentIndex = 0; // Начать сначала
    }

    // Обновление картинок для гриба
    const images = fungusData[currentIndex].images;
    const fungusImages = document.querySelectorAll(".fungus-image");
    
    fungusImages.forEach((img, index) => {
        img.src = images[index]; // Обновление каждого изображения
    });

    document.getElementById("fungus-name").innerText = ""; // Сбросим название после переключения
    document.getElementById("answer").innerText = ""; // Скрыть ответ
}

function showAnswer() {
    // Показать название гриба и ответ при клике на любую картинку
    document.getElementById("fungus-name").innerText = fungusData[currentIndex].name;
    document.getElementById("answer").innerText = "Ответ: " + fungusData[currentIndex].name;
}

const phrases = [
    "Ты - причина моей самой искренней улыбки ❤️",
    "Омггг, самая красивая девушка в мире открыла эту вкладку!",
    "Я люблю твою улыбку!",
    "Просто хочу напомнить, что ты невероятная!",
    "Спасибо, что ты есть ❤️",
    "Привет (флирт), одна здесь отдыхаешь?))",
    "Твои руки - мое самое любимые место!"
];

const photos = [
    "us1.jpg", "us2.jpg", "us3.jpg", "us4.jpg", "us5.jpg", 
    "us6.jpg", "us7.jpg", "us8.jpg", "us9.jpg", "us10.jpg", "us11.jpg"
];

function setup() {
    console.log("Скрипт запустился!"); // Это для проверки
    
    const textElement = document.getElementById('compliment');
    const photoElement = document.getElementById('myPhoto');
    const counterElement = document.getElementById('counter');

    // Ставим случайную фразу
    textElement.innerText = phrases[Math.floor(Math.random() * phrases.length)];
    
    // Ставим случайное фото
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    photoElement.src = "images/" + randomPhoto;

    // Считаем дни (подставь свою дату!)
    const startDate = new Date('2025-11-29'); 
    const diff = new Date() - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    counterElement.innerText = `Капееец вместе уже ${days} дней ✨`;
}

// Запускаем через небольшую паузу, чтобы всё успело прогрузиться
window.onload = setup;
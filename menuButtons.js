document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById("playerAudio");
    const body = document.querySelector("body");
    const mainmenu = document.getElementById('mainmenu');
    const controls = document.getElementById('controls');
    const previous = document.getElementById("previous");
    const next = document.getElementById("next");

    audio.volume = 0.1;

    let dairy = 0;

    const pages = [
        {
            block: document.getElementById("first"),
            image: "img/1.png",
            audio: "audio/1.mp3"
        },
        {
            block: document.getElementById("second"),
            image: "img/2.png",
            audio: "audio/2.mp3"
        },
        {
            block: document.getElementById("third"),
            image: "img/3.png",
            audio: "audio/3.mp3"
        },
        {
            block: document.getElementById("fourth"),
            image: "img/4.png",
            audio: "audio/4.mp3"
        },
        {
            block: document.getElementById("fifth"),
            image: "img/5.png",
            audio: "audio/5.mp3"
        },
        {
            block: document.getElementById("sixth"),
            image: "img/6.png",
            audio: "audio/6.mp3"
        },
        {
            block: document.getElementById("seventh"),
            image: "img/7.png",
            audio: "audio/7.mp3"
        }
    ];

    function updatePage(index) {
        // Скрыть все блоки
        pages.forEach(p => p.block.style.display = "none");

        // Показать нужный
        const current = pages[index];
        current.block.style.display = "flex"; // Или "block" — как у тебя надо

        // Обновить фон и музыку
        body.style.backgroundImage = `url('${current.image}')`;
        audio.src = current.audio;
        audio.play();

        // Обновить состояние кнопок
        previous.disabled = (index === 0);
        next.disabled = (index === pages.length - 1);
    }

    document.getElementById("start").addEventListener('click', function () {
        mainmenu.remove();
        controls.style.display = "flex";
        updatePage(dairy);
    });

    previous.addEventListener('click', function () {
        if (dairy > 0) {
            dairy--;
            updatePage(dairy);
        }
    });

    next.addEventListener('click', function () {
        if (dairy < pages.length - 1) {
            dairy++;
            updatePage(dairy);
        }
    });

    document.getElementById("quit").addEventListener('click', function () {
        window.close(); // Работает только в некоторых условиях (например, Electron)
    });
});

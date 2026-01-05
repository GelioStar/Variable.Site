document.querySelectorAll('.clickable').forEach(elem => {
    elem.addEventListener('click', () => {
    const text = elem.textContent.trim();

    // Clipboard API — современный способ
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
        .then(() => alert('Скопировано: ' + text, 10))
        .catch(err => console.error('Ошибка копирования:', err));
    } else {
        // Фоллбэк для старых браузеров
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('Скопировано: ' + text, 10);
    }
    });
});
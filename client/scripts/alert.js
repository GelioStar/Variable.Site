// Переопределяем window.alert (опционально)
window.alert = function(message, timeout = 3000) {
  const alertEl = document.createElement('div');
  // const alertBtn = document.createElement('button');

  // alertBtn.innerText = 'OK';
  alertEl.className = 'custom-alert';
  alertEl.innerHTML = `<span class="custom-alert__text">${message}</span>`;
  // alertEl.appendChild(alertBtn);
  document.body.appendChild(alertEl);

  // Показываем с анимацией (обеспечиваем начальный рендер -> затем добавляем класс)
  requestAnimationFrame(() => alertEl.classList.add('visible'));

  // Функция плавного скрытия и удаления
  let timeoutId = null;
  function hideAndRemove() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    // убираем класс visible -> начинается transition
    alertEl.classList.remove('visible');

    // удаляем после окончания transition
    function onEnd(e) {
      if (e.target === alertEl) {
        alertEl.removeEventListener('transitionend', onEnd);
        alertEl.remove();
      }
    }
    alertEl.addEventListener('transitionend', onEnd);

    // страховка на случай, если transitionend не сработает
    setTimeout(() => { if (alertEl.parentNode) alertEl.remove(); }, 500);
  }

  // Кнопка закрытия
  // alertBtn.addEventListener('click', hideAndRemove);

  // Таймаут 자동ический (если указан)
  if (timeout != null) {
    timeoutId = setTimeout(hideAndRemove, Number(timeout));
  }
};

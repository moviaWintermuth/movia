window.addEventListener('load', () => {
  const hash = window.location.hash;  // Получаем якорь из URL (например, #k)
  if (hash) {
    const target = document.querySelector(hash); // Находим элемент с этим ID
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',  // Плавная прокрутка
        block: 'center'      // Центрирование элемента по вертикали
      });
    }
  }
});
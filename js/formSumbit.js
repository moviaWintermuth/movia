document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const inputs = form.querySelectorAll("input, textarea, select");
  const cyrillicRegex = /[а-яёіїєґА-ЯЁІЇЄҐ]/;

  // Проверка встроенной HTML5-валидации
  if (!form.checkValidity()) {
    form.reportValidity();
    showCustomAlert("fill_all_fields");
    return;
  }

  // Проверка на кириллицу
  for (const input of inputs) {
    if (
      input.type !== "checkbox" &&
      input.type !== "radio" &&
      cyrillicRegex.test(input.value)
    ) {
      showCustomAlert("no_cyrillic");
      return;
    }
  }

  // Блокировка повторной отправки
  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;

  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData.entries()) {
    if (key.endsWith("[]")) {
      if (!data[key]) data[key] = [];
      data[key].push(value);
    } else {
      data[key] = value;
    }
  }

  try {
    const response = await fetch("https://server-q9yh.onrender.com/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // alert("Anfrage erfolgreich gesendet!");
      // showCustomAlert("sent");
      form.reset(); // раскомментируй, если нужно очищать
    } else {
      showCustomAlert("form.error");
    }
  } catch (error) {
    // console.error("Ошибка запроса:", error);
    showCustomAlert("network_error");
  } finally {
    alert("Anfrage erfolgreich gesendet!");
    if (submitButton) submitButton.disabled = false;
  }
});

function showCustomAlert(i18nKey) {
  const alertBox = document.getElementById("custom-alert");
  const messageElement = alertBox.querySelector(".message");

  if (!alertBox || !messageElement) {
    console.warn("Alert box or message element not found!");
    return;
  }

  messageElement.setAttribute("data-i18n", i18nKey);
  messageElement.textContent = i18next?.t ? i18next.t(i18nKey) : i18nKey;

  alertBox.classList.remove("hidden");

  const line = alertBox.querySelector(".progress-line");
  if (line) {
    line.style.animation = "none";
    line.offsetHeight; // перезапуск анимации
    line.style.animation = null;
  }

  setTimeout(() => {
    alertBox.classList.add("hidden");
  }, 3000);
}

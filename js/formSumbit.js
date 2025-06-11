document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData.entries()) {
    if (key.endsWith('[]')) {
      if (!data[key]) data[key] = [];
      data[key].push(value);
    } else {
      data[key] = value;
    }
  }

  try {
    const response = await fetch("http://localhost:3000/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Форма успешно отправлена!");
    } else {
      alert("Ошибка при отправке формы.");
    }
  } catch (error) {
    console.error("Ошибка запроса:", error);
    alert("Произошла ошибка сети.");
  }
});
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
    const response = await fetch("https://server-q9yh.onrender.com/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

if (response.ok) {
  alert("Das Formular wurde erfolgreich gesendet!");
} else {
  alert("Fehler beim Senden des Formulars.");
}
} catch (error) {
  console.error("Fehler bei der Anfrage:", error);
  alert("Ein Netzwerkfehler ist aufgetreten.");
}
});

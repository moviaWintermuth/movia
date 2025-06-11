const MAX_PERSONS = 7;

function addPerson() {
  const tableBody = document.querySelector("#personTable tbody");
  const currentRows = tableBody.getElementsByTagName('tr').length;

  if (currentRows < MAX_PERSONS) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td><input type="text" name="name[]" required></td>
      <td><input type="text" name="vorname[]" required></td>
      <td><input type="date" name="geb[]" required></td>
      <td><input type="text" name="taetigkeit[]" required></td>
      <td><button class="delete-button" type="button" onclick="deletePerson(this)">L.</button></td>
    `;
    tableBody.appendChild(newRow);
  }

  if (currentRows + 1 >= MAX_PERSONS) {
    const btn = document.getElementById("addBtn");
    btn.disabled = true;
    btn.textContent = "Maximale Anzahl erreicht";
  }
}

function deletePerson(button) {
  const row = button.closest("tr");
  row.remove();

  const tableBody = document.querySelector("#personTable tbody");
  const currentRows = tableBody.getElementsByTagName('tr').length;

  // Включаем кнопку добавления, если удалили строку и стало меньше MAX_PERSONS
  const btn = document.getElementById("addBtn");
  if (currentRows < MAX_PERSONS) {
    btn.disabled = false;
    btn.textContent = "➕ Neue Person hinzufügen";
  }
}



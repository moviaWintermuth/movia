  document.addEventListener('DOMContentLoaded', () => {
    const radioJa = document.getElementById('berufTaetigJa');
    const radioNein = document.getElementById('berufTaetigNein');
    const berufBlocks = document.querySelectorAll('.beruf-block');
    const berufInputs = document.querySelectorAll('.beruf-input'); 

    function updateVisibility() {
      if (radioNein.checked) {

        berufBlocks.forEach(block => {
          block.style.opacity = '0.6';
        });
        berufInputs.forEach(input => {
          input.disabled = true;
          input.classList.add('disabled');
          // input.removeAttribute('required');
        });

      } else {
        berufBlocks.forEach(block => block.style.opacity = '1');
        berufInputs.forEach(input => {
          input.disabled = false;
          input.classList.remove('disabled');
          // input.setAttribute('required', 'required');
        });
      }
    }

    radioJa.addEventListener('change', updateVisibility);
    radioNein.addEventListener('change', updateVisibility);

    // Вызовем при загрузке, если уже выбрано "Nein"
    updateVisibility();
  });



const MAX_PERSONS = 7;

function addPerson() {
  const tableBody = document.querySelector("#personTable tbody");
  const currentRows = tableBody.getElementsByTagName('tr').length;

  if (currentRows < MAX_PERSONS) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td><input type="text" name="name[]" ></td>
      <td><input type="text" name="vorname[]" ></td>
      <td><input type="date" name="geb[]" ></td>
      <td><input type="text" name="taetigkeit[]" ></td>
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


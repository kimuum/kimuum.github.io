document.addEventListener('DOMContentLoaded', function () {
  let fileListCount = 1;

  function generateRandomID() {
    return 'text-input-' + Math.random().toString(36).substr(2, 9);
  }

  function addInputBox(event) {
    if (fileListCount >= 5) {
      return;
    }

    const addButton = event.target;
    const inputBox = addButton.closest('.field-form').children[0];
    const fieldForm = inputBox.parentNode;

    const newInputBox = inputBox.cloneNode(true);

    // Clear the value of the cloned input element
    const input = newInputBox.querySelector('input');

    input.value = '';

    // Generate new unique IDs and names for the cloned input element
    const randomID = generateRandomID();
    input.id = randomID;
    input.name = 'text-input-' + fileListCount;

    const buttonBox = newInputBox.querySelector('.button-box');
    const newAddButton = newInputBox.querySelector('.btn-add-field');

    if (!buttonBox.querySelector('.btn-delete-field')) {
      const deleteButton = document.createElement('button');
      const deleteButtonSpan = document.createElement('span');
      deleteButton.type = 'button';
      deleteButton.className = 'btn btn-delete-field';
      deleteButtonSpan.textContent = '삭제';
      deleteButton.appendChild(deleteButtonSpan);
      deleteButton.addEventListener('click', function () {
        newInputBox.remove();
        fileListCount--;
      });

      buttonBox.appendChild(deleteButton);
    }

    const inputInputDel = newInputBox.querySelector('.btn-delete');
    if (inputInputDel) {
      inputInputDel.remove();
    }

    fieldForm.insertBefore(newInputBox, inputBox.nextSibling);

    newAddButton.addEventListener('click', addInputBox);

    fileListCount++;
  }

  const initialAddButtons = document.querySelectorAll('.btn-add-field');
  for (const initialAddButton of initialAddButtons) {
    initialAddButton.addEventListener('click', addInputBox);
  }
});

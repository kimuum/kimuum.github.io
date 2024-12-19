document.addEventListener('DOMContentLoaded', function () {
  let fileListCount = document.querySelectorAll('.invite-list-box').length;
  const maxCount = 100;

  function generateRandomID() {
    return 'text-input-' + Math.random().toString(36).substr(2, 9);
  }

  function deleteButtonHandler(e) {
    const target = e.target.closest('.invite-list-box');
    if (fileListCount > 1) {
      target.remove();
      fileListCount--;
      formLableHandler();
    }
  }

  function formLableHandler() {
    const titles = document.querySelectorAll('.invite-list-box .title');
    for (var i = 0; i < titles.length; i++) {
      let count = i + 1;
      titles[i].textContent = '임직원 ' + count;
    }
  }

  function addInputBox(event) {
    if (fileListCount >= maxCount) {
      return;
    }

    const addButton = event.target;
    const formBox = addButton.closest('.invite-middle-box').children[0];
    const fieldForm = formBox.parentNode;
    const newFormBox = formBox.cloneNode(true);
    const inputs = newFormBox.querySelectorAll('input');

    inputs.forEach((input) => {
      const randomID = generateRandomID();
      input.value = '';
      input.id = randomID;
      input.name = randomID;
      if (input.closest('.input').querySelector('.btn-delete')) {
        input.closest('.input').querySelector('.btn-delete').remove();
      }
    });

    const buttonBox = newFormBox.querySelector('.title-box');
    let count = fileListCount + 1;
    buttonBox.querySelector('.title').textContent = '임직원 ' + count;
    const deleteButton = buttonBox.querySelector('.btn-list-remove');
    fieldForm.insertBefore(newFormBox, document.querySelector('.invite-add-box').previousSibling);
    deleteButton.addEventListener('click', deleteButtonHandler);
    fileListCount++;

    if (fileListCount === maxCount) {
      document.querySelector('.invite-add-box').classList.add('disabeld');
    }
  }

  const initialAddButtons = document.querySelectorAll('.btn-list-add');
  for (const initialAddButton of initialAddButtons) {
    initialAddButton.addEventListener('click', addInputBox);
  }

  const initialRemoveButtons = document.querySelectorAll('.btn-list-remove');
  for (const initialRemoveButton of initialRemoveButtons) {
    initialRemoveButton.addEventListener('click', deleteButtonHandler);
  }
});

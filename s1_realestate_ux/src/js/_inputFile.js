/*
 ** comment : file
 */
 document.addEventListener('DOMContentLoaded', function () {
  let fileListCount = 1;

  function generateRandomID() {
    return 'input-file-' + Math.random().toString(36).substr(2, 9);
  }

  function updateFileNameLabel(event) {
    const fileInput = event.target;
    const fileNameLabel = fileInput.parentNode.querySelector('.file-name');

    if (fileInput.files.length > 0) {
      fileNameLabel.value = fileInput.files[0].name;
    } else {
      fileNameLabel.value = '';
    }
  }

  function addFileList() {
    if (fileListCount >= 5) {
      return;
    }

    const fileArea = document.querySelector('.file-area');
    const fileList = document.querySelector('.file-list');
    const newFileList = fileList.cloneNode(true);
    const randomID = generateRandomID();

    const fileUpload = newFileList.querySelector('.file-upload');
    fileUpload.id = randomID;
    fileUpload.addEventListener('change', updateFileNameLabel);

    const fileNameLabel = newFileList.querySelector('.file-label');
    fileNameLabel.setAttribute('for', randomID);

    const deleteButton = document.createElement('button');
    const deleteButtonSpan = document.createElement('span');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-delete-file-field';
    deleteButtonSpan.textContent = '삭제';
    deleteButton.appendChild(deleteButtonSpan);
    deleteButton.addEventListener('click', function () {
      newFileList.remove(); 
      fileListCount--;
    });

    const addButton = newFileList.querySelector('.btn-add-file-field');
    addButton.parentNode.insertBefore(deleteButton, addButton);

    const fileNameInput = newFileList.querySelector('.file-name');
    fileNameInput.value = '';

    fileArea.appendChild(newFileList);

    addButton.addEventListener('click', addFileList);

    fileListCount++;
  }

  const initialAddButtons = document.querySelectorAll('.btn-add-file-field');
  for( const initialAddButton of initialAddButtons) {
    initialAddButton.addEventListener('click', addFileList);
  }
  
  const initialFileUploads = document.querySelectorAll('.file-upload');
  for( const initialFileUpload of initialFileUploads) {
    initialFileUpload.addEventListener('change', updateFileNameLabel);
  }
});


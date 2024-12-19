document.addEventListener('DOMContentLoaded', function () {
  const files = document.querySelectorAll('.input-file');
  if (files) {
    files.forEach((file) => {
      const fileField = file.closest('.field-file-box');
      const fileName = fileField.querySelector('.file-name');
      const btnRemove = fileField.querySelector('.btn-file-remove');
      file.addEventListener('change', function () {
        const fileValue = file.value;
        fileName.value = fileValue;
        fileName.style.color = '#000000';
      });
      btnRemove.addEventListener('click', function () {
        file.value = '';
        fileName.value = '파일 선택';
        fileName.style.color = '#b7b7b7';
      });
    });
  }
});

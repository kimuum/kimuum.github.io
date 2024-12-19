/*
 ** comment : Input ( Text, Search ) 입력 시 X버튼 노출
 */
document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('.field-input');
  if (inputs) {
    for (const input of inputs) {
      input.addEventListener('input', function (event) {
        const target = event.target;
        if (target.className.indexOf('input-field') > -1) {
          const parent = target.closest('.input');
          const deleteBtn = parent.querySelector('.btn-delete');
          let deleteBtnEle = document.createElement('button');
          deleteBtnEle.className = 'btn-delete';
          deleteBtnEle.setAttribute('type', 'button');
          deleteBtnEle.setAttribute('title', 'delete');
          if (target.value.length > 0) {
            if (!deleteBtn) {
              parent.prepend(deleteBtnEle);
            }
          } else {
            if (deleteBtn) {
              parent.querySelector('.btn-delete').remove();
            }
          }
        }
      });
    }
  }

  const eyeButtons = document.querySelectorAll('.btn-eye');
  for (const eyeButton of eyeButtons) {
    eyeButton.addEventListener('click', function (event) {
      const target = event.target.closest('.btn-eye');
      const passwordInput = this.closest('.input').querySelector('.input-field');
      if (passwordInput) {
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          target.classList.add('active');
        } else {
          passwordInput.type = 'password';
          target.classList.remove('active');
        }
      }
    });
  }

  document.addEventListener('click', (event) => deleteInputFunc(event));
});

function deleteInputFunc(e) {
  const target = e.target;
  if (target.className.indexOf('btn-delete') > -1) {
    const parent = target.closest('.input');

    if (parent) {
      parent.querySelector('input').value = '';
    }
    target.remove();
  }
}

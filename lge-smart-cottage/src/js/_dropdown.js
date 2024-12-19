// Dropdown
document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown-container');
  if (dropdowns) {
    dropdowns.forEach((dropdown) => {
      const dropdownBtn = dropdown.querySelector('.btn-dropdown');
      let label;

      if (dropdown.getAttribute('data-label')) {
        label = dropdown.getAttribute('data-label');
      }

      dropdownBtn.addEventListener('click', function () {
        if (dropdown.classList.contains('show')) {
          close();
        } else {
          open();
        }
      });

      const lists = dropdown.querySelectorAll('.dropdown-list');
      lists.forEach((list) => {
        list.addEventListener('click', function (e) {
          const target = e.target.closest('.dropdown-list');
          const targetText = target.innerText;
          lists.forEach((list) => {
            list.classList.remove('active');
          });

          list.classList.add('active');
          if (label) {
            dropdownBtn.innerText = `${label} : ${targetText}`;
          } else {
            dropdownBtn.innerText = targetText;
          }
          close();
        });
      });

      document.addEventListener('click', function (e) {
        const target = dropdown.contains(e.target);
        if (!target) {
          close();
        }
      });

      function close() {
        dropdown.classList.remove('show');
        dropdownBtn.classList.remove('active');
      }
      function open() {
        dropdown.classList.add('show');
        dropdownBtn.classList.add('active');
      }
    });
  }
});

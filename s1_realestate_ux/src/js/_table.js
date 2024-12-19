/*
 ** comment : table
 */
document.addEventListener('DOMContentLoaded', function () {
  var tableAllChks = document.querySelectorAll('[class="table-checkbox-all"]');
  if (tableAllChks) {
    for (const tableAllChk of tableAllChks) {
      tableAllChk.addEventListener('click', (event) => {
        const target = event.target;
        const checked = event.target.checked;
        const childChks = target.closest('.table').querySelector('tbody').querySelectorAll('[type="checkbox"]');

        for (const childChk of childChks) {
          const childTr = childChk.closest('tr');
          if (checked) {
            childChk.checked = true;
            childTr.classList.add('active');
          } else {
            childChk.checked = false;
            childTr.classList.remove('active');
          }
        }
      });
    }
  }

  var tableChks = document.querySelectorAll('[type="checkbox"]');
  if (tableChks) {
    for (const tableChk of tableChks) {
      if(tableChk.closest('.table') && tableChk.className.indexOf('table-checkbox-all') === -1) {
        tableChk.addEventListener('change', (event) => {
          const target = event.target;
          const checked = event.target.checked;
          const targetTd = target.closest('tr');
          const allChk = target.closest('.table').querySelector('[class="table-checkbox-all"]');
          let totalChkCount = null;
          let totalChkCheckedCount = null;
          if (target.closest('tbody') !== null) {
            totalChkCount = target.closest('tbody').querySelectorAll('[type="checkbox"]').length;
            totalChkCheckedCount = target.closest('tbody').querySelectorAll('[type="checkbox"]:checked').length;
          }
  
          if (checked) {
            targetTd.classList.add('active');
          } else {
            targetTd.classList.remove('active');
          }
  
          if (totalChkCount === totalChkCheckedCount) {
            allChk.checked = true;
          } else {
            allChk.checked = false;
          }
        });
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var allChk = document.getElementById('check-all');
  if (allChk) {
    allChk.addEventListener('click', (event) => {
      const target = event.target;
      const checked = event.target.checked;
      const childChks = target
        .closest('.management-container')
        .querySelector('.management-lists')
        .querySelectorAll('[type="checkbox"]');

      for (const childChk of childChks) {
        if (checked) {
          childChk.checked = true;
        } else {
          childChk.checked = false;
        }
      }
    });
  }

  var chks = document.querySelectorAll('.management-lists [type="checkbox"]');
  if (chks) {
    for (const chk of chks) {
      chk.addEventListener('change', (event) => {
        const target = event.target;
        let totalChkCount = null;
        let totalChkCheckedCount = null;
        if (target.closest('.management-lists') !== null) {
          totalChkCount = target.closest('.management-lists').querySelectorAll('[type="checkbox"]').length;
          totalChkCheckedCount = target
            .closest('.management-lists')
            .querySelectorAll('[type="checkbox"]:checked').length;
        }

        if (totalChkCount === totalChkCheckedCount) {
          allChk.checked = true;
        } else {
          allChk.checked = false;
        }
      });
    }
  }
});

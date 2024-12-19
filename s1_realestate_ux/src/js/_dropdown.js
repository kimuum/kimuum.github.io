/*
 ** comment : dropdown
 */

document.addEventListener('DOMContentLoaded', function () {
  const dropdownContainers = document.querySelectorAll('.field-dropdown');
  for (const dropdownContainer of dropdownContainers) {
    // 클릭 이벤트 위임 //
    if (
      dropdownContainer.className.indexOf('disabled') === -1 &&
      dropdownContainer.className.indexOf('readonly') === -1
    ) {
      dropdownContainer.checkOptionTextArry = [];
      dropdownContainer.addEventListener('click', (event) => dropdownHandler(event, dropdownContainer));

      window.addEventListener('click', (event) => closeDropdownHandler(event));
    }
  }
  const radios = document.querySelectorAll('.dropdown-list-container input[type="radio"]');
  for (const radio of radios) {
    radio.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }
});

function dropdownHandler(event, cont) {
  const target = event.target; // 이벤트가 발생한 대상
  const dropdownContainers = document.querySelectorAll('.field-dropdown');
  const dropdownContainer = cont;
  const targetClass = target.className;
  const targetOption = target.closest('.dropdown-list');

  const optionList = dropdownContainer.querySelector('.dropdown-list-box');
  const btnDropdown = dropdownContainer.querySelector('.btn-dropdown');
  const option = dropdownContainer.querySelectorAll('.dropdown-list');
  const optionArray = Array.prototype.slice.call(option);

  let checkOptionTextArry = dropdownContainer.checkOptionTextArry;
  let optionClass = optionList.closest('.dropdown-container');
  let checkOption = false;
  const htmlElement = document.documentElement;
  const hasClass = htmlElement.classList.contains('mobile');

  // 자신을 제외한 다른 드롭다운 닫기
  dropdownContainers.forEach(function (dropList) {
    if (dropList !== dropdownContainer) {
      dropList.querySelector('.dropdown-container').classList.remove('show');
    }
  });

  if (optionList.className.indexOf('chckbox') > -1) {
    checkOption = true;
  }

  if (target.closest('.btn-confirm')) {
    dropdownContainer.querySelector('.dropdown-container').classList.remove('show');
  }

  if (
    targetClass.indexOf('btn-dropdown') > -1 ||
    targetClass.indexOf('placeholder') > -1 ||
    targetClass.indexOf('text') > -1
  ) {
    // Callpsing Dropdown //
    if (optionClass.className.indexOf('show') > -1) {
      optionClass.classList.remove('show');
      document.body.style.removeProperty('overflow');
    }
    // Expanding Dropdown //
    else {
      optionClass.classList.add('show');
      if (hasClass) {
        document.body.style.overflow = 'hidden';
      }
    }
  } else if (
    (targetClass.indexOf('dropdown-list') > -1 || target.closest('.radio')) &&
    targetClass.indexOf('disabled') === -1
  ) {
    let selectedOption = null;
    if (targetClass.indexOf('list-text') > -1) {
      selectedOption = event.target.closest('.option');
    } else if (targetOption) {
      selectedOption = targetOption;
    } else {
      selectedOption = event.target.querySelector('.dropdown-list.active');
    }

    const parent = selectedOption.parentNode;
    let index = Array.prototype.indexOf.call(parent.children, selectedOption);

    const indexOption = optionArray[index];
    const textBox = btnDropdown.children[0];
    const placeholder = btnDropdown.children[1];
    let optionValue = indexOption.textContent;
    placeholder.style.display = 'none';
    if (checkOption) {
      const checkOptionText = indexOption.querySelector('.radio-label').textContent;
      const radioDis = indexOption.querySelector('input[type=radio]').disabled;
      let optionChecked = indexOption.querySelector('input[type=radio]').checked;
      if (!radioDis) {
        if (!optionChecked) {
          checkOptionTextArry.push(checkOptionText);
        } else {
          for (let i = 0; i < checkOptionTextArry.length; i++) {
            if (checkOptionTextArry[i] == checkOptionText) {
              checkOptionTextArry.splice(i, 1);
              i--;
            }
          }
          indexOption.classList.remove('active');
        }

        if (checkOptionTextArry.length === 1) {
          textBox.textContent = checkOptionTextArry[0];
        } else if (checkOptionTextArry.length > 1) {
          textBox.textContent = checkOptionTextArry[checkOptionTextArry.length - 1];
        } else {
          textBox.textContent = '';
          placeholder.style.display = 'block';
        }
      }
    } else {
      textBox.textContent = optionValue;

      optionList.querySelectorAll('.dropdown-list').forEach(function (item) {
        if (item !== indexOption) {
          item.classList.remove('active');
        }
      });
      if (!indexOption.classList.contains('disabled')) {
        indexOption.classList.add('active');
      }

      if (optionClass.className.indexOf('show') > -1) {
        optionClass.classList.remove('show');
        document.body.style.removeProperty('overflow');
      }
    }
  }
}

// 드랍다운 영역 외 클릭 and 리스트 클릭시 닫기
function closeDropdownHandler(event) {
  const target = event.target;
  const dropdownArea = target.closest('.dropdown-container');
  const htmlElement = document.documentElement;
  const hasClass = htmlElement.classList.contains('mobile');

  if (target.matches('.btn-dropdown-close')) {
    const dropdownArea = document.querySelectorAll('.dropdown-container');
    dropdownArea.forEach(function (thisWrap) {
      thisWrap.classList.remove('show');
      if (hasClass) {
        document.body.style.removeProperty('overflow');
      }
    });
  }

  if (!dropdownArea) {
    const dropdownArea = document.querySelectorAll('.dropdown-container');
    dropdownArea.forEach(function (thisWrap) {
      thisWrap.classList.remove('show');
    });
  }

  if (target.matches('.dropdown-list') && target.className.indexOf('disabled') == -1) {
    let dropdownList = document.querySelectorAll('.dropdown-container');
    dropdownList.forEach(function (dropList) {
      dropList.classList.remove('show');

      if (hasClass) {
        document.body.style.removeProperty('overflow');
      }
    });
  }
}

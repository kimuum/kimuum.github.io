function checkEmailValidation(email) {
  return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  .test(email);
}

const filePointer = $('#file_pointer');
const fileboxAreaContainer = $('#filebox-area-container');

function reorderFileContainer() {
  const containers = $('.file-container');

  $.each(containers, function (i, v) {
    const index = i + 1;
    $(v).attr('id', 'fileContainer_' + index);
    const inputFile = $(v).find('input[type=file]');
    inputFile.attr('name', 'contactAttachment' + index)
    inputFile.attr('id', 'file_attachment_' + index)

    $(v).find('button.delete-file').attr('data-target', 'fileContainer_' + index)
  });
}

function drawFileContainer(fileName, containerName) {
  return `
<div>
  <i></i>
  <p>${fileName}</p>
  <button type="button" class="delete-file" onclick="deleteFileContainer(this)" data-target="fileContainer_${containerName}"></button>
</div>
`;
}

const fileExtension = ['jpeg', 'jpg', 'png', 'pdf'];

function changeFileEvent(e) {
  const files = e.target.files;
  const file = files[files.length - 1];
  const currentId = $(this).attr('id').replace('file_attachment_', '');
  if (!file) {
    return;
  }
  const filename = file.name;
  if (!filename) {
    return;
  }

  if ($.inArray(filename.split('.').pop().toLowerCase(), fileExtension) === -1) {
    $.alert({
      theme: 'confirm',
      content:
          `<div class="icon icon-warning"></div><p>${imageOnly}</p>`,
      backgroundDismiss: true,
      draggable: false,
      animationSpeed: 200,
      animateFromElement: false,
      useBootstrap: false,
      buttons: {
        confirm: {
          text: '확인',
          btnClass: 'btn'
        }
      }
    })
    return;
  }
  if (file.size > 94371840) {
    $('#file_attachment_' + currentId).val(null);
    $.alert({
      theme: 'confirm',
      content:
          `<div class="icon icon-warning"></div><p>${fileSizeLimit}</p>`,
      backgroundDismiss: true,
      draggable: false,
      animationSpeed: 200,
      animateFromElement: false,
      useBootstrap: false,
      buttons: {
        confirm: {
          text: '확인',
          btnClass: 'btn'
        }
      }
    })
    return;
  }
  $('#fileContainer_' + currentId).append(drawFileContainer(filename, currentId));
  reorderFileContainer();
  determinePoint()
}

function determinePoint() {
  let inputHasFile = 0;
  const inputFiles = $('input[type=file]');
  const containers = $('.file-container').length;

  $.each(inputFiles, function (i, v) {
    if ($(v).val()) {
      inputHasFile += 1;
    }
  })

  if (inputHasFile >= 3) {
    filePointer.hide();
  } else {
    filePointer.show();
  }

  if (containers <= 3 && inputFiles.length <= 3 && inputFiles.length === inputHasFile) {
    fileboxAreaContainer.append(`
<div class="file file-container" id="fileContainer_${inputHasFile + 1}">
  <input type="file" name="contactAttachment${inputHasFile + 1}" id="file_attachment_${inputHasFile
    + 1}"
       class="hidden"/>
</div>
        `);
    $('#file_attachment_' + (inputHasFile + 1)).change(changeFileEvent)
  }

  filePointer.attr('for', 'file_attachment_' + (inputHasFile + 1))
}

function deleteFileContainer(self) {
  const containerName = $(self).attr('data-target');
  const container = $('#' + containerName);
  container.remove();
  reorderFileContainer();
  determinePoint();
}

function checkIntlContact(phone) {
  return /^\+?([0-9]+)/g
  .test(phone);
}

function checkPhone(phone) {
  return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
  .test(phone);
}

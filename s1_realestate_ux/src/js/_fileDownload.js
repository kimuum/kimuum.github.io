/*
 ** comment : dropdown
 */

document.addEventListener('DOMContentLoaded', function () {
  const downloadBtns = document.querySelectorAll('.download-link');
  let fileUrl = null;
  let fileName = null;

  if (downloadBtns) {
    for (const downloadBtn of downloadBtns) {
      downloadBtn.addEventListener('click', function (event) {
        const target = event.target.closest('.download-link');
        fileUrl = target.getAttribute('data-link');
        if (target.getAttribute('data-name')) {
          fileName = target.getAttribute('data-name');
        } else {
          fileName = 'file';
        }
        popupOpen(event);
      });
    }
  }

  var downloadPopups = document.querySelectorAll('.popup-container');
  if (downloadPopups) {
    for (const downloadPopup of downloadPopups) {
      downloadPopup.addEventListener('click', function (event) {
        const target = event.target;
        const realTarget = target.closest('.btn');
        const parent = target.closest('.popup-container');
        const targetId = parent.getAttribute('id');
        if(targetId === "popup-download" || targetId === "popup-pdf-download") {
          if(realTarget) {
            if (realTarget.className.indexOf('btn-primary') > -1) {
              if(targetId === "popup-download") {
                downloadFile(fileUrl, fileName);
              } else {
                fnSaveAsPdf('pdf', '장비이력카드');
              }
              popupClose(targetId);
            } else if (realTarget.className.indexOf('btn-secondary') > -1) {
              popupClose(targetId);
            }
          } else if(target.className.indexOf('dim') > -1) {
            popupClose(targetId);
          }
        }
      });
    }
  }
});

function downloadFile(url, filename) {
  var element = document.createElement('a');
  element.href = url;
  element.download = filename;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function fnSaveAsPdf(target, name) {
  const dom = document.getElementById(target);
  html2canvas(dom).then(function(canvas) {
    var imgData = canvas.toDataURL('image/png');
    var imgWidth = 210;
    var pageHeight = imgWidth * 1.414;
    var imgHeight = canvas.height * imgWidth / canvas.width;

    var doc = new jsPDF({
      'orientation': 'p',
      'unit': 'mm',
      'format': 'a4'
    });

    doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    doc.save(name + '.pdf');
  });
}
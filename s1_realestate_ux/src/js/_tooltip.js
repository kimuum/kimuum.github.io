/*
 ** comment : tooltip
 */
document.addEventListener('DOMContentLoaded', function () {
  const tooltips = document.querySelectorAll('.tooltip-container');
  const tooltipBtns = document.querySelectorAll('.btn-tooltip');
  if (tooltipBtns) {
    for (const tooltipBtn of tooltipBtns) {
      tooltipBtn.addEventListener('click', (event) => {
        const target = event.target;
        const tooltipBox = target.closest('.tooltip-container');

        tooltips.forEach(function (tooltip) {
          if (tooltip !== tooltipBox) {
            tooltip.classList.remove('show');
          }
        });

        if (tooltipBox.classList.contains('show')) {
          tooltipBox.classList.remove('show');
        } else {
          tooltipBox.classList.add('show');
        }
      });
    }
  }

  window.addEventListener('click', (event) => closeTooltipHandler(event));
});

function closeTooltipHandler(event) {
  const target = event.target;
  const tooltipArea = target.closest('.tooltip-container');

  if (!tooltipArea) {
    const tooltipArea = document.querySelectorAll('.tooltip-container');
    tooltipArea.forEach(function (thisWrap) {
      thisWrap.classList.remove('show');
    });
  }
}

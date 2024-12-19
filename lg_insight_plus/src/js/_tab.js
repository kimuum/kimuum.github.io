/* Tab */
document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content-area');

  if (tabButtons) {
    tabButtons.forEach(function (button) {
      button.addEventListener('click', handleTabClick);
    });
  }

  function handleTabClick(event) {
    const clickedTab = event.currentTarget;
    const targetContent = clickedTab.dataset.content;

    tabButtons.forEach(function (button) {
      button.classList.remove('active');
    });

    if (clickedTab.hasAttribute('data-content')) {
      // If data-content attribute is present
      clickedTab.classList.add('active');

      tabContents.forEach(function (content) {
        content.classList.remove('show');
      });

      document.querySelector('#' + targetContent).classList.add('show');
    } else {
      // If data-content attribute is not present
      tabButtons.forEach(function (button) {
        button.classList.remove('selected');
      });

      if (!clickedTab.classList.contains('selected')) {
        clickedTab.classList.add('selected');
      }
    }
  }
});

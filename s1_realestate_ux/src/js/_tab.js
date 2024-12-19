/*
 ** comment : tab
 */
document.addEventListener('DOMContentLoaded', function () {
  const tabButton = document.querySelectorAll('.btn-tab');

  tabButton.forEach(function (tab, i) {
    if (tab.className.indexOf('active') > -1) {
      const currentTabs = tab.closest('.tabs').querySelectorAll('.tab');
      const currentIndex = Array.prototype.indexOf.call(currentTabs, tab.closest('.tab'));
      const currentTabParent = tab.closest('.tab-container');
      const currentTabContentChild = currentTabParent.nextElementSibling.children;

      currentTabContentChild[currentIndex].style.display = 'block';
    }
    tab.addEventListener('click', clickTab);
  });
});

function clickTab(e) {
  const target = e.currentTarget;
  const parent = target.closest('.tab-container');
  const tabBox = parent.querySelector('.tabs');
  const siblings = tabBox.children;
  const siblingsLength = siblings.length;
  const tabContents = parent.parentNode.querySelectorAll('.tab-content-box');
  const ACTIVE_CLASS = 'active';

  const tabList = tabBox.querySelectorAll('.tab');
  const index = Array.prototype.indexOf.call(tabList, target.closest('.tab'));

  if (!target.classList.contains('disabled')) {
    for (var i = 0; i < siblingsLength; i++) {
      siblings[i].querySelector('.btn-tab').classList.remove(ACTIVE_CLASS);
    }
    
    tabContents.forEach(function (tabContent, i) {
      const tabContentLength = tabContent.children.length;
      for (var j = 0; j < tabContentLength; j++) {
        tabContent.children[j].style.display = 'none';
      }
      tabContent.children[index].style.display = 'block';
    });

    target.classList.toggle(ACTIVE_CLASS);
  }
}

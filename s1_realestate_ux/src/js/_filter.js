/*
 ** comment : App Filter
 */

document.addEventListener('DOMContentLoaded', function () {
  const categoryFilters = document.querySelectorAll('.search-category-list');
  let originTarget = null;
  let originalParent = null;

  for (const categoryFilter of categoryFilters) {
    categoryFilter.addEventListener('click', function (event) {
      const target = event.target;
      const parent = target.closest('.search-category-list-box');
      const detailSearchCont = parent.querySelector('.detail-search-container');

      if (target.className.indexOf('active') > -1) {
        target.classList.remove('active');
        detailSearchCont.classList.remove('active');
        originalParent.appendChild(detailSearchCont);
        originalParent = null;
        originTarget = null;
        document.body.removeAttribute('style');
      } else {
        originalParent = detailSearchCont.parentNode;
        originTarget = target;
        target.classList.add('active');
        detailSearchCont.classList.add('active');
        document.body.appendChild(detailSearchCont);
        document.body.style.overflow = 'hidden';
      }
    });
  }

  const detailSearchs = document.querySelectorAll('.detail-search-container');
  for (const detailSearch of detailSearchs) {
    detailSearch.querySelector('.btn-detail-search-close').addEventListener('click', function (event) {
      detailSearch.classList.remove('active');
      if (originTarget) {
        originTarget.classList.remove('active');
        originalParent.appendChild(detailSearch);
        document.body.removeAttribute('style');
      }
    });
  }
});

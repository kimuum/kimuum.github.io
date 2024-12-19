const faqLists = document.querySelectorAll('.faq-accordion-list');

  faqLists.forEach((faqList) => {
    const fatTitle = faqList.querySelector('.faq-accordion-title');
    fatTitle.addEventListener('click', function() {
      faqLists.forEach((remove) => {
      if(remove == faqList ) {
        remove.classList.toggle('active');
        return;
      }
      remove.classList.remove('active');
    })
  })
})

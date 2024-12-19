document.addEventListener('DOMContentLoaded', function () {
  const btnCart = document.querySelector('.btn-cart');
  const mediaCartCont = document.querySelector('.media-cart-list-container');
  const btnClose = document.querySelector('.media-cart-list-container .btn-close');
  if(btnCart) {
    btnCart.addEventListener('click', function() {
      mediaCartCont.classList.add('active');
    })
    btnClose.addEventListener('click', function(event) {
      const target = event.target.closest('.btn-close');
      const targetParent = target.closest('.media-cart-list-container');
      targetParent.classList.remove('active');
    })
  }
})
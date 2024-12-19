document.addEventListener('DOMContentLoaded', function () {
  const favCont = document.querySelector('.edit-fav-container');
  const fav = document.getElementById('fav');
  const favHide = document.getElementById('favHide');
  const moFav = document.getElementById('moFav');
  const moFavHide = document.getElementById('moFavHide');

  function checkCount(evt) {
    if (evt.type === 'add') {
      if (evt.from.childElementCount == 0) {
        evt.from.closest('.edit-fav-block-container').classList.add('empty');
      } else {
        evt.from.closest('.edit-fav-block-container').classList.remove('empty');
      }
    } else {
      if (evt.to.childElementCount == 0) {
        evt.to.closest('.edit-fav-block-container').classList.add('empty');
      } else {
        evt.to.closest('.edit-fav-block-container').classList.remove('empty');
      }
    }
  }

  if (favCont) {
    if (moFav) {
      var moFavSortable = new Sortable(moFav, {
        group: 'moFav',
        animation: 300,
        onAdd: function (evt) {
          checkCount(evt);
        },
        onRemove: function (evt) {
          checkCount(evt);
        },

        onChoose: function (evt) {
          if (moFavSortable.toArray().length === 1) {
            moFavSortable.option('disabled', true);
          }
        },

        onEnd: function (evt) {
          if (moFavHideSortable.toArray().length === 0) {
            moFavHide.closest('.edit-fav-block-container').classList.add('empty');
          }

          if (moFavSortable.toArray().length === 1) {
            moFavSortable.option('disabled', true);
            moFav.addEventListener('touchstart', mobileHandler);
          }
        },

        onMove: function (evt) {
          if (evt.target !== evt.to) {
            if (moFavHideSortable.toArray().length === 0) {
              moFavHide.closest('.edit-fav-block-container').classList.remove('empty');
            }
          } else {
            if (moFavHideSortable.toArray().length === 1) {
              moFavHide.closest('.edit-fav-block-container').classList.add('empty');
            }
          }
        },
      });

      var moFavHideSortable = new Sortable(moFavHide, {
        group: 'moFav',
        animation: 300,
        onAdd: function (evt) {
          checkCount(evt);
        },
        onRemove: function (evt) {
          checkCount(evt);
        },
        onChoose: function (evt) {
          moFavSortable.option('disabled', false);
          moFav.removeEventListener('touchstart', mobileHandler);
        },
        onUnchoose: function (evt) {
          if (moFavSortable.toArray().length === 1) {
            moFavSortable.option('disabled', true);
            moFav.addEventListener('touchstart', mobileHandler);
          }
        },
        onStart: function (evt) {},
        onEnd: function (evt) {
          if (moFavHideSortable.toArray().length > 0) {
            evt.from.closest('.edit-fav-block-container').classList.remove('empty');
          }
        },
        onMove: function (evt) {
          if (evt.target !== evt.to) {
            if (moFavHideSortable.toArray().length === 2) {
              moFavHide.closest('.edit-fav-block-container').classList.add('empty');
            }
          } else {
            if (moFavHideSortable.toArray().length === 1) {
              moFavHide.closest('.edit-fav-block-container').classList.remove('empty');
            }
          }
        },
      });
    }

    let favHideLength = favHide.querySelectorAll('.inquiry-block-box').length;
    if (fav) {
      var favSortable = new Sortable(fav, {
        group: 'fav',
        animation: 300,
        onAdd: function (evt) {
          checkCount(evt);
        },
        onRemove: function (evt) {
          checkCount(evt);
        },

        onChoose: function (evt) {
          favHideLength = favHideSortable.toArray().length;

          if (favSortable.toArray().length === 1) {
            favSortable.option('disabled', true);
          }
        },

        onEnd: function (evt) {
          if (favHideSortable.toArray().length === 0) {
            favHide.closest('.edit-fav-block-container').classList.add('empty');
          }

          if (favSortable.toArray().length === 1) {
            favSortable.option('disabled', true);
            fav.addEventListener('mousedown', pcHandler);
          }
        },

        onMove: function (evt) {
          if (evt.target !== evt.to) {
            if (favHideSortable.toArray().length === 0) {
              favHide.closest('.edit-fav-block-container').classList.remove('empty');
            }
          } else {
            if (favHideLength === 0) {
              favHide.closest('.edit-fav-block-container').classList.add('empty');
            }
          }
        },
      });

      var favHideSortable = new Sortable(favHide, {
        group: 'fav',
        animation: 300,
        onAdd: function (evt) {
          checkCount(evt);
        },
        onRemove: function (evt) {
          checkCount(evt);
        },
        onChoose: function (evt) {
          favSortable.option('disabled', false);
          fav.removeEventListener('mousedown', pcHandler);
        },
        onUnchoose: function (evt) {
          if (favSortable.toArray().length === 1) {
            favSortable.option('disabled', true);
            fav.addEventListener('mousedown', pcHandler);
          }
        },
        onStart: function (evt) {},
        onEnd: function (evt) {
          if (evt.from.childElementCount > 0) {
            evt.from.closest('.edit-fav-block-container').classList.remove('empty');
          }
        },
        onMove: function (evt) {
          if (evt.target !== evt.to) {
            if (favHideSortable.toArray().length === 1) {
              favHide.closest('.edit-fav-block-container').classList.add('empty');
            }
          } else {
            if (favHideSortable.toArray().length === 0) {
              favHide.closest('.edit-fav-block-container').classList.remove('empty');
            }
          }
        },
      });
    }
  }
});

function pcHandler() {
  document.getElementById('toast').style.display = 'block';
}

function mobileHandler() {
  if (toast) {
    if (toast.className.indexOf('active') === -1) {
      document.getElementById('toast').classList.add('active');
      setTimeout(() => {
        document.getElementById('toast').classList.remove('active');
      }, '3000');
    }
  }
}

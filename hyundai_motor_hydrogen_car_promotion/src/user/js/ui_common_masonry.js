/* masonry */
function masonryCtrl(container, item, option) {
  if($(container).length > 0) {
    $(container).masonry({
      itemSelector: item,
      columnWidth: item,
      percentPosition: true,
      ...option,
    });
  }
}

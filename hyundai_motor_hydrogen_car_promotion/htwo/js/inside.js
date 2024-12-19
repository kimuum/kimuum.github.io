$(document).ready(function () {
	var _mapClick = function () {
		var $nodeArea = $('.node_area'),
			$tagItems = $('.tag_area li'),
			_idx = 0;
		$nodeArea.on('click', function (e) {
			if(!$(e.target).hasClass("area")) {
				$tagItems.fadeOut(200)
			} else {
				var _idx = $(e.target).index();
				$tagItems.fadeOut(200).eq(_idx).stop().fadeIn(200);
			}
		})
	};
	_mapClick();
})
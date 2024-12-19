// jQuery Alert Dialogs Plugin
//
// Version 1.1
//
// Cory S.N. LaViska
// A Beautiful Site (http://abeautifulsite.net/)
// 14 May 2009
//
// Visit http://abeautifulsite.net/notebook/87 for more information
//
// Usage:
//		jAlert( message, [title, callback] )
//		jConfirm( message, [title, callback] )
//		jPrompt( message, [value, title, callback] )
//
// History:
//
//		1.00 - Released (29 December 2008)
//
//		1.01 - Fixed bug where unbinding would destroy all resize events
//
// License:
//
// This plugin is dual-licensed under the GNU General Public License and the MIT License and
// is copyright 2008 A Beautiful Site, LLC.
//
(function ($) {
  $.alerts = {
    // These properties can be read/written by accessing $.alerts.propertyName from your scripts at any time

    verticalOffset: -75, // vertical offset of the dialog from center screen, in pixels
    horizontalOffset: 0, // horizontal offset of the dialog from center screen, in pixels/
    repositionOnResize: true, // re-centers the dialog on window resize
    overlayOpacity: 0.3, // transparency level of overlay
    overlayColor: '#000', // base color of overlay
    draggable: true, // make the dialogs draggable (requires UI Draggables plugin)
    okButton: '예', // text for the OK button
    cancelButton: '아니요', // text for the Cancel button
    dialogClass: null, // if specified, this class will be applied to all dialogs

    // Public methods

    alert: function (message, title, callback) {
      // if (title == null) title = 'Alert';
      // 버튼 text 세팅.
      $.alerts.okButton = '확인';

      $.alerts._show(title, message, null, 'alert', function (result) {
        if (callback) callback(result);
      });
    },

    confirm: function (message, title, callback) {
      // if (title == null) title = 'Confirm';
      $.alerts._show(title, message, null, 'confirm', function (result) {
        if (callback) callback(result);
      });
    },

    prompt: function (message, value, title, callback) {
      // if (title == null) title = 'Prompt';
      $.alerts._show(title, message, value, 'prompt', function (result) {
        if (callback) callback(result);
      });
    },

    // Private methods

    _show: function (title, msg, value, type, callback) {
      $.alerts._hide();

      $('BODY').append(
        '<div id="popup" class="popup show">' +
          '<div class="dim"></div>' +
          '<div class="popup-container">' +
          '<div class="popup-area">' +
          '<div class="popup-top">' +
          '<div class="popup-title"></div>' +
          '</div>' +
          '<div class="popup-middle">' +
          '<p class="popup-alert-text"></p>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>',
      );
      if ($.alerts.dialogClass) $('#popup').addClass($.alerts.dialogClass);
      $('#popup .popup-top .popup-title').text(title);
      $('#popup .popup-middle .popup-alert-text').text(msg);
      console.log(msg);
      $('#popup .popup-middle').html($('.popup-alert-text').text().replace(/\n/g, '<br />'));

      switch (type) {
        case 'alert':
          $('#popup .popup-middle').after(
            '<div class="popup-bottom"><div class="button-box"><button type="button" id="popup_ok" class="btn btn-primary"><span>' + $.alerts.okButton + '</span></button></div></div>',
          );
          $('#popup_ok').click(function () {
            $.alerts._hide();
            callback(true);
          });
          $('#popup_ok')
            .focus()
            .keypress(function (e) {
              if (e.keyCode == 13 || e.keyCode == 27) $('#popup_ok').trigger('click');
            });
          break;
        case 'confirm':
          $('#popup .popup-middle').after(
            '<div class="popup-bottom"><div class="button-box"><button type="button" id="popup_cancel" class="btn btn-secondary"><span>' +
              $.alerts.cancelButton +
              '</span></button><button type="button" id="popup_ok" class="btn btn-primary"><span>' +
              $.alerts.okButton +
              '</span></button></div></div>',
          );
          $('#popup_ok').click(function () {
            $.alerts._hide();
            if (callback) callback(true);
          });
          $('#popup_cancel').click(function () {
            $.alerts._hide();
            if (callback) callback(false);
          });
          $('#popup_ok').focus();
          $('#popup_ok, #popup_cancel').keypress(function (e) {
            if (e.keyCode == 13) $('#popup_ok').trigger('click');
            if (e.keyCode == 27) $('#popup_cancel').trigger('click');
          });
          break;
        case 'prompt':
          $('#popup .popup-middle')
            .append('<input type="text" id="popup_prompt" />')
            .after(
              '<div class="popup-bottom"><div class="button-box"><button type="button" id="popup_cancel" class="btn btn-secondary"><span>' +
                $.alerts.cancelButton +
                '</span></button><button type="button" id="popup_ok" class="btn btn-primary"><span>' +
                $.alerts.okButton +
                '</span></button></div></div>',
            );
          $('#popup_ok').click(function () {
            var val = $('#popup_prompt').val();
            $.alerts._hide();
            if (callback) callback(val);
          });
          $('#popup_cancel').click(function () {
            $.alerts._hide();
            if (callback) callback(null);
          });
          $('#popup_prompt, #popup_ok, #popup_cancel').keypress(function (e) {
            if (e.keyCode == 13) $('#popup_ok').trigger('click');
            if (e.keyCode == 27) $('#popup_cancel').trigger('click');
          });
          if (value) $('#popup_prompt').val(value);
          $('#popup_prompt').focus().select();
          break;
      }

      // Make draggable
      if ($.alerts.draggable) {
        try {
          $('#popup').draggable({ handle: $('.popup-top') });
          $('#popup .popup-top').css({ cursor: 'move' });
        } catch (e) {
          /* requires jQuery UI draggables */
        }
      }
    },

    _hide: function () {
      $('#popup').removeClass('show');
      $('#popup').remove();
    },
  };

  // Shortuct functions
  jAlert = function (message, title, callback) {
    $.alerts.alert(message, title, callback);
  };

  jConfirm = function (message, title, callback) {
    $.alerts.confirm(message, title, callback);
  };

  jPrompt = function (message, value, title, callback) {
    $.alerts.prompt(message, value, title, callback);
  };
})(jQuery);

// 팝업
var $document = $(document);
function togglePopup(id) {
  var $popup = $document.find('#' + id);
  if ($popup.hasClass('show')) {
    $popup.removeClass('show');
  } else {
    $popup.addClass('show');
  }
}

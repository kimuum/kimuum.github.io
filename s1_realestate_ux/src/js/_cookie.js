/*
 ** comment : cookie
 */
document.addEventListener('DOMContentLoaded', function () {
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setDate(d.getDate() + exdays);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookie(cookieName) {
    var cookieValue = getCookie(cookieName);
    if (cookieValue) {
      closePopup();
    } else {
      if(document.getElementById("popup-notice")) {
        document.getElementById("popup-notice").style.display = 'block';
      }
    }
  }

  function closePopup() {
    var popup = document.getElementById("popup-notice");
    if(popup) {
      popup.remove();
    }
  }

  var checkbox = document.getElementById("today-not-view");
  var cookieName = "hidePopup";
  if(checkbox) {
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        setCookie(cookieName, "true", 1); 
      } else {
        setCookie(cookieName, "false", 0); 
      }
    });
  }

  checkCookie(cookieName);
});

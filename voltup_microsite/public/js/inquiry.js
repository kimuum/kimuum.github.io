(function() {
  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail
      = form.dataset.email || ""; // no email by default

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form);
    var loader =  form.querySelector(".loader");
    loader.style.display = "block"; // show loader

    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset();
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            loader.style.display = "none"; // hide loader
            thankYouMessage.style.display = "block";
          }
        }
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
  
  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();


$(function(){
  console.log('ttt')
  // 충전기 설치 신청하기
  // 동의합니다 작성시 신청 버튼 활성화
  var value0 = null; // 개인정보 수집 동의(필수)
  var value1 = null; // 개인정보 제3자 제공(필수)
  var value2 = null; // 이름
  var value3 = null; // 전화번호

  $('.require').find('input').on('keyup', function () {
    var $this = $(this);
    var attr = $this.attr('id');

    if(attr == 'agree2') {
      value1 = $this.val();
    } else if(attr == 'name') {
      value2 = $this.val();
    } else if(attr == 'phone') {
      value3 = $this.val();
    } else if(attr == 'agree1') {
      value0 = $this.val();
    }

    if(value0 != null && value1 != null && value2 != null && value3 != null) {
      if(value0 == '동의합니다' && value1 == '동의합니다' && value2.length > 1 && value3.length >= 8) {
        $('.button-success').removeAttr('disabled');
      } else {
        $('.button-success').attr('disabled', 'disabled');
      }
    }

    console.log('sss')
  });

  $('.btn-inquiry, .show-inquiry-popup').on('click', function(){
    $('.inquiry-popup').addClass('show');
    $('.gform .form-elements').removeAttr('style');
    $('.gform .thankyou_message').css('display' , 'none');
    $('body').addClass('scroll-lock');
  });

  function inquiryFormReset(target){
    value0 = null;
    value1 = null;
    value2 = null;
    value3 = null;

    var $popupCont = target.parents('.popup-container');
    if($popupCont.hasClass('inquiry-popup')) {
      $('.gform').find('input').val('');
      $('.gform').find('textarea').val('');
      $('.inquiry-button-box .button-success').attr('disabled', 'disabled');
    }
  }
});
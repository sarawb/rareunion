$(function() {

  function changeConsultingArea() {
    var width = $(window).width();
    if(width >= 850) {
      $(".consulting-areas-wrapper").removeClass("twelve").addClass("six");
    } else {
      $(".consulting-areas-wrapper").addClass("twelve").removeClass("six");
    };
  };

  function change750() {
    var width = $(window).width();
    if(width >= 750) {
      $(".client-logos").removeClass("one").addClass("two");
      $("#swb-img-wrapper").addClass("five columns");
      $("#about-content-wrapper").addClass("seven columns");
      $(".book-area").removeClass("twelve").addClass("six");
    } else {
      $(".client-logos").removeClass("one");
      $("#swb-img-wrapper").removeClass("five columns");
      $("#about-content-wrapper").removeClass("seven columns");
      $(".book-area").removeClass("six").addClass("twelve");
    };
  };

  changeConsultingArea();
  change750();
  $( window ).resize(function() {
    changeConsultingArea();
    change750();
  });

});

function validateName(){
  validateEmail();
  var nameInput = $("#nameInput");
  if(nameInput.val() === ""){
    $("#name-required-warning").show();
    nameInput.addClass("form-warning");
    return false
  } else {
    $("#name-required-warning").hide();
    nameInput.removeClass("form-warning");
    return true
  }
}

function validateEmail(){
  var emailInput = $("#emailInput");
  var test = $("#emailInput[input]")
  if(emailInput.val() === ""){
    $("#email-required-warning").show();
    emailInput.addClass("form-warning");
    return false
  } else {
    $("#email-required-warning").hide();
    emailInput.removeClass("form-warning");
    return true
  }
}

function validateForm() {
  if($("#botName").val() != "") {
    return false
  } else {
    if(validateName() && validateEmail()) {
      return true
    } else {
      return false
    }
  }
}

var $contactForm = $('#contact-us-form');
var formErrorMessage = $('#form-error');

function showThanksSection(){
  var thanksSection = $('#thanks');
  thanksSection.show();
     $('html, body').animate({
    scrollTop: thanksSection.offset().top
  }, 500, function() {
    var $thanksSection = $(thanksSection);
    $thanksSection.focus();
    if ($thanksSection.is(":focus")) {
      return false;
    };
  });
}

$contactForm.submit(function(e) {
  var name = $('#nameInput').val();
  var title = $('#titleInput').val();
  var organization = $("#organizationInput").val();
  var email = $('#emailInput').val();
  var project = $('#projectInput').val();
  e.preventDefault();
  if(validateForm()) {
    $.ajax({
      url: '//formspree.io/sara@rareunion.com',
      method: 'POST',
      data: {
        name: name,
        title: title,
        organization: organization,
        email: email,
        project: project,
        _replyto: email
      },
      dataType: 'json',
      success: function(data) {
        showThanksSection();
      },
      error: function(err) {
        formErrorMessage.show();
      }
    });
  };
});

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        };
      });
    }
  }
});







$(document).ready(function() {

  $("#signup-form1").parsley();
    $('input').on('keyup', function() {
      $("#signup-form1").parsley().validate();
        if ($("#signup-form1").parsley().isValid()) {
            $('#submit1').prop('disabled', false);
        } else {
            $('#submit1').prop('disabled', 'disabled');
        }
    });



    $("#signup-form2").parsley();
      $('input').on('keyup', function() {
        $("#signup-form2").parsley().validate();
          if ($("#signup-form2").parsley().isValid()) {
              $('#submit2').prop('disabled', false);
          } else {
              $('#submit2').prop('disabled', 'disabled');
          }
      });

      $("#signup-form3").parsley();
        $('input').on('keyup', function() {
          $("#signup-form3").parsley().validate();
            if ($("#signup-form3").parsley().isValid()) {
                $('#submit3').prop('disabled', false);
            } else {
                $('#submit3').prop('disabled', 'disabled');
            }
        });

    $("#signup-form1").submit(function(e) {
    e.preventDefault();
    var firstname = $("#first-name").val();
    $('#first-name2').val(firstname);
    $('#first-name3').val(firstname);
    var lastname = $("#last-name").val();
    $('#last-name2').val(lastname);
    $('#last-name3').val(lastname);
    var email = $("#email").val();
    $('#email2').val(email);
    $('#email3').val(email);
    $('#sentToEmail').html(email);
    $(".verify-email").modal("show");
});

$("#signup-form2").submit(function(e) {
e.preventDefault();
var telephone = $("#telephone2").val();
$('#telephone3').val(telephone);
$(".verify-number").modal("show");
$('#sentToPhone').html(telephone);
});

$("#verify-email-btn").click(function () {
  $("#signup-step2").removeClass('d-none');
  $("#signup-step1").addClass('d-none');
  $(".verify-email").modal("hide");
});

$("#verify-number-btn").click(function () {
  $("#signup-step3").removeClass('d-none');
  $("#signup-step1").addClass('d-none');
  $("#signup-step2").addClass('d-none');
  $(".verify-number").modal("hide");
});

$("#change-email-btn").click(function () {
  $("#wrong-email").removeClass('d-none');
});

$("#new-email-form").submit(function(e) {
e.preventDefault();
var email = $("#new-email").val();
$('#sentToEmail').html(email);
$('#email2').val(email);
$('#email3').val(email);
toastr.success('Email sent to ' + email );
});

$("#change-number-btn").click(function () {
  $("#wrong-number").removeClass('d-none');
});

$("#new-number-form").submit(function(e) {
e.preventDefault();
var telephone = $("#new-number").val();
$('#sentToPhone').html(telephone);
$('#telephone3').val(telephone);
toastr.success('Text sent to ' + telephone );
});

$("#email-code").parsley();
  $('#email-code').on('keyup', function() {
    $("#email-code").parsley().validate();
      if ($("#email-code").parsley().isValid()) {
          $('#verify-email-btn').prop('disabled', false);
      } else {
          $('#verify-email-btn').prop('disabled', 'disabled');
      }
  });

  $("#telephone-code").parsley();
    $('#telephone-code').on('keyup', function() {
      $("#telephone-code").parsley().validate();
        if ($("#telephone-code").parsley().isValid()) {
            $('#verify-number-btn').prop('disabled', false);
        } else {
            $('#verify-number-btn').prop('disabled', 'disabled');
        }
    });

    $("#resend-text-btn").click(function () {
      var telephone = $("#telephone2").val();
      toastr.success('Text resent to the number above' );
    });

    $("#resend-email-btn").click(function () {
      toastr.success('Email resent to the address above ');
    });

new Vue({
  el: '#app',
  data: {
    password: '',
    passwordFieldType: 'password'
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
        if ($("#show-or-hide").hasClass('fa-eye')) {
      $('#show-or-hide').removeClass('fa-eye');
      $('#show-or-hide').addClass('fa-eye-slash');
      $('.show-password').css('right','9px');
      }
      else {
        $('#show-or-hide').addClass('fa-eye');
        $('#show-or-hide').removeClass('fa-eye-slash');
        $('.show-password').css('right','10px');
      }
    }
  }
});

});

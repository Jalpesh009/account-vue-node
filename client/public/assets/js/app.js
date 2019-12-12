/*
Template Name: Adminto - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Main Js File
*/


!function ($) {
    "use strict";

    var Components = function () { };

    //initializing tooltip
    Components.prototype.initTooltipPlugin = function () {
        $.fn.tooltip && $('[data-toggle="tooltip"]').tooltip()
    },

    //initializing popover
    Components.prototype.initPopoverPlugin = function () {
        $.fn.popover && $('[data-toggle="popover"]').popover()
    },

    //initializing Slimscroll
    Components.prototype.initSlimScrollPlugin = function () {
        //You can change the color of scroll bar here
        $.fn.slimScroll && $(".slimscroll").slimScroll({
            height: 'auto',
            position: 'right',
            size: "8px",
            touchScrollStep: 20,
            color: '#9ea5ab'
        });
    },

    //initializing form validation
    Components.prototype.initFormValidation = function () {
        $(".needs-validation").on('submit', function (event) {
            $(this).addClass('was-validated');
            if ($(this)[0].checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
            return true;
        });
    },

    //initializing custom modal
    Components.prototype.initCustomModalPlugin = function() {
        $('[data-plugin="custommodal"]').on('click', function(e) {
            e.preventDefault();
            var modal = new Custombox.modal({
                content: {
                    target: $(this).attr("href"),
                    effect: $(this).attr("data-animation")
                },
                overlay: {
                    color: $(this).attr("data-overlayColor")
                }
            });
            // Open
            modal.open();
        });
    },

    // Counterup
    Components.prototype.initCounterUp = function() {
        var delay = $(this).attr('data-delay')?$(this).attr('data-delay'):100; //default is 100
        var time = $(this).attr('data-time')?$(this).attr('data-time'):1200; //default is 1200
         $('[data-plugin="counterup"]').each(function(idx, obj) {
            $(this).counterUp({
                delay: 100,
                time: 1200
            });
         });
    },

    //peity charts
    Components.prototype.initPeityCharts = function() {
        $('[data-plugin="peity-pie"]').each(function(idx, obj) {
            var colors = $(this).attr('data-colors')?$(this).attr('data-colors').split(","):[];
            var width = $(this).attr('data-width')?$(this).attr('data-width'):20; //default is 20
            var height = $(this).attr('data-height')?$(this).attr('data-height'):20; //default is 20
            $(this).peity("pie", {
                fill: colors,
                width: width,
                height: height
            });
        });
        //donut
         $('[data-plugin="peity-donut"]').each(function(idx, obj) {
            var colors = $(this).attr('data-colors')?$(this).attr('data-colors').split(","):[];
            var width = $(this).attr('data-width')?$(this).attr('data-width'):20; //default is 20
            var height = $(this).attr('data-height')?$(this).attr('data-height'):20; //default is 20
            $(this).peity("donut", {
                fill: colors,
                width: width,
                height: height
            });
        });

        $('[data-plugin="peity-donut-alt"]').each(function(idx, obj) {
            $(this).peity("donut");
        });

        // line
        $('[data-plugin="peity-line"]').each(function(idx, obj) {
            $(this).peity("line", $(this).data());
        });

        // bar
        $('[data-plugin="peity-bar"]').each(function(idx, obj) {
            var colors = $(this).attr('data-colors')?$(this).attr('data-colors').split(","):[];
            var width = $(this).attr('data-width')?$(this).attr('data-width'):20; //default is 20
            var height = $(this).attr('data-height')?$(this).attr('data-height'):20; //default is 20
            $(this).peity("bar", {
                fill: colors,
                width: width,
                height: height
            });
         });
    },

    Components.prototype.initKnob = function() {
        $('[data-plugin="knob"]').each(function(idx, obj) {
           $(this).knob();
        });
    },

    Components.prototype.initTippyTooltips = function () {
        if($('[data-plugin="tippy"]').length > 0)
        tippy('[data-plugin="tippy"]');
    },

    //initilizing
    Components.prototype.init = function () {
        var $this = this;
        this.initTooltipPlugin(),
        this.initPopoverPlugin(),
        this.initSlimScrollPlugin(),
        this.initFormValidation(),
        this.initCustomModalPlugin(),
        this.initCounterUp(),
        this.initPeityCharts(),
        this.initKnob();
        this.initTippyTooltips();
    },

    $.Components = new Components, $.Components.Constructor = Components

}(window.jQuery),

function($) {
    "use strict";

    /**
    Portlet Widget
    */
    var Portlet = function() {
        this.$body = $("body"),
        this.$portletIdentifier = ".card",
        this.$portletCloser = '.card a[data-toggle="remove"]',
        this.$portletRefresher = '.card a[data-toggle="reload"]'
    };

    //on init
    Portlet.prototype.init = function() {
        // Panel closest
        var $this = this;
        $(document).on("click",this.$portletCloser, function (ev) {
            ev.preventDefault();
            var $portlet = $(this).closest($this.$portletIdentifier);
                var $portlet_parent = $portlet.parent();
            $portlet.remove();
            if ($portlet_parent.children().length == 0) {
                $portlet_parent.remove();
            }
        });

        // Panel Reload
        $(document).on("click",this.$portletRefresher, function (ev) {
            ev.preventDefault();
            var $portlet = $(this).closest($this.$portletIdentifier);
            // This is just a simulation, nothing is going to be reloaded
            $portlet.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');
            var $pd = $portlet.find('.card-disabled');
            setTimeout(function () {
                $pd.fadeOut('fast', function () {
                    $pd.remove();
                });
            }, 500 + 300 * (Math.random() * 5));
        });
    },
    //
    $.Portlet = new Portlet, $.Portlet.Constructor = Portlet

}(window.jQuery),

function ($) {
    'use strict';

    var App = function () {
        this.$body = $('body'),
        this.$window = $(window)
    };

    /**
    Resets the scroll
    */
    App.prototype._resetSidebarScroll = function () {
        // sidebar - scroll container
        $('.slimscroll-menu').slimscroll({
            height: 'auto',
            position: 'right',
            size: "8px",
            color: '#9ea5ab',
            wheelStep: 5,
            touchScrollStep: 20
        });
    },

    /**
     * Initlizes the menu - top and sidebar
    */
    App.prototype.initMenu = function () {
        var $this = this;

        // Left menu collapse
        $('.button-menu-mobile').on('click', function (event) {
            event.preventDefault();
            $this.$body.toggleClass('sidebar-enable');
            if ($this.$window.width() >= 768) {
                $this.$body.toggleClass('enlarged');
            } else {
                $this.$body.removeClass('enlarged');
            }

            // sidebar - scroll container
            $this._resetSidebarScroll();
        });

        // sidebar - main menu
        $("#side-menu").metisMenu();

        // sidebar - scroll container
        $this._resetSidebarScroll();

        // right side-bar toggle
        $('.right-bar-toggle').on('click', function (e) {
            $('body').toggleClass('right-bar-enabled');
        });

        $(document).on('click', 'body', function (e) {
            if ($(e.target).closest('.right-bar-toggle, .right-bar').length > 0) {
                return;
            }

            if ($(e.target).closest('.left-side-menu, .side-nav').length > 0 || $(e.target).hasClass('button-menu-mobile')
                || $(e.target).closest('.button-menu-mobile').length > 0) {
                return;
            }

            $('body').removeClass('right-bar-enabled');
            $('body').removeClass('sidebar-enable');
            return;
        });

        // activate the menu in left side bar based on url
        $("#side-menu a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).addClass("active");
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().addClass("in");
                $(this).parent().parent().prev().addClass("active"); // add active class to an anchor
                $(this).parent().parent().parent().addClass("active");
                $(this).parent().parent().parent().parent().addClass("in"); // add active to li of the current link
                $(this).parent().parent().parent().parent().parent().addClass("active");
            }
        });

        // Topbar - main menu
        $('.navbar-toggle').on('click', function (event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });

        // Preloader
        $(window).on('load', function () {
            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
        });
    },

    /**
     * Init the layout - with broad sidebar or compact side bar
    */
    App.prototype.initLayout = function () {
        // in case of small size, add class enlarge to have minimal menu
        if (this.$window.width() >= 768 && this.$window.width() <= 1028) {
            this.$body.addClass('enlarged');
        } else {
            if (this.$body.data('keep-enlarged') != true) {
                this.$body.removeClass('enlarged');
            }
        }
    },

    //initilizing
    App.prototype.init = function () {
        var $this = this;
        this.initLayout();
        $.Portlet.init();
        this.initMenu();
        $.Components.init();
        // on window resize, make menu flipped automatically
        $this.$window.on('resize', function (e) {
            e.preventDefault();
            $this.initLayout();
            $this._resetSidebarScroll();
        });
    },

    $.App = new App, $.App.Constructor = App


}(window.jQuery),
//initializing main application module
function ($) {
    "use strict";
    $.App.init();
}(window.jQuery);

// Waves Effect
Waves.init();

// Swtich viewport

$('input').on('click',function(e) {
    if ($(this).hasClass('list-view-radio')) {
        $('.contacts').removeClass('contacts-grid').addClass('contacts-list');
    }
    else if($(this).hasClass('grid-view-radio')) {
        $('.contacts').removeClass('contacts-list').addClass('contacts-grid');
    }
});

//Plan initial-charges

$('#plan1').click(function(){
     $('#initial-charge').text('$111.83');
});


$('#plan2').click(function(){
     $('#initial-charge').text('$147.23');
});

$('#plan3').click(function(){
     $('#initial-charge').text('$201.83');
});

$('#plan4').click(function(){
     $('#initial-charge').text('$337.83');
});

$('#plan5').click(function(){
     $('#initial-charge').text('$651.83');
});

$('#plan6').click(function(){
     $('#initial-charge').text('$951.83');
});

$('#plan7').click(function(){
     $('#initial-charge').text('$1351.83');
});

$('#plan8').click(function(){
     $('#initial-charge').text('$2227.83');
});

$('#plan9').click(function(){
     $('#initial-charge').text('$4351.83');
});

//Dialpad

$('.dial_button').click(function(){
    var id = $(this).attr('data-id');
    var val = $('#dial_telephone').val();
    val += id;
    $('#dial_telephone').val(val);
});


//Verificaion button

$("#verification-button1").click(function () {
  $("#verification-step1").addClass('d-none');
  $("#verification-step2").removeClass('d-none');
});

$("#button_close").click(function () {
  $("#verification-step1").removeClass('d-none');
  $("#verification-step2").addClass('d-none');
});

$("#verification-button2").click(function () {
  $(".add-cc").modal("hide");
});


  $('#proceed-btn').click(function(){
      if ($('.pro-user-name').hasClass("id-not-confirmed")) {
        $(".error-id-not-confirmed").modal("show");
        }
      else if ($('cc-added').length) {
            }
      else {
                $(".error-no-card").modal("show");
            }
    });

  $('#error-no-card-btn').click(function(){
    $(".error-no-card").modal("hide");
    $(".add-cc").modal("show");
    });


  $("#error-id-not-confirmed-btn").click(function () {
    $(".error-id-not-confirmed").modal("hide");
    $(".verify-identity").modal("show");
    });

//Credit card info validation

$('#credit-card-name').keypress(function (e) {
    var regex = new RegExp("^[a-zA-Z \s]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
}
  else
    {
      e.preventDefault();
alert('Only alphabetical characters and spaces are allowed');
return false;}
});

//Credit card info validation

$(document).ready(function (){
    validate();
    $('#credit-card-number, #credit-card-name, #credit-card-expiry-date').change(validate);
});

function validate(){
    if ($('#credit-card-number').val().length   ==   19   &&
        $('#credit-card-name').val().length  >   0   &&
        $('#credit-card-expiry-date').val().length    ==   5) {
        $("#verification-button1").prop("disabled", false);
    }
    else {
        $("#verification-button1").prop("disabled", true);
    }
};

$("#identity-btn6").click(function () {
     $(".verify-identity").modal("hide");
     $(".pro-user-name").removeClass('id-not-confirmed')
});

$("#select-passport").click(function () {
  $("#upload-passport").removeClass('d-none');
  $("#upload-national-id").addClass('d-none');
  $("#upload-drivers-licence").addClass('d-none');

});

$("#select-id-card").click(function () {
  $("#upload-national-id").removeClass('d-none');
  $("#upload-passport").addClass('d-none');
  $("#upload-drivers-licence").addClass('d-none');
});

$("#select-drivers-licence").click(function () {
  $("#upload-drivers-licence").removeClass('d-none');
  $("#upload-national-id").addClass('d-none');
  $("#upload-passport").addClass('d-none');
});

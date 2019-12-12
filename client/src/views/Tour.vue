<template>
  <!-- Start Content-->
  <div class="container-fluid">

    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <h4 class="header-title mt-0 mb-4">Heading</h4>
              <h1 id="heading-title-tour">This is a Heading 1</h1>
              <p class="text-muted">Suspendisse vel quam malesuada, aliquet sem sit
                amet, fringilla elit. Morbi tempor tincidunt tempor. vulputate sapienest consequat posuere et at velit.</p>

              <div class="clearfix"/>

              <h2>This is a Heading 2</h2>
              <p class="text-muted">In nec rhoncus eros. Vestibulum eu mattis nisl.
                Quisque viverra viverra magna nec pulvinar porta augue, consectetur facilisis diam a malesuada purus.</p>

              <div class="clearfix"/>

              <h3>This is a Heading 3</h3>
              <p class="text-muted">Vestibulum auctor tincidunt semper. Phasellus ut
                vulputate lacus. Suspendisse
                ultricies mi eros, sit amet tempor nulla varius sed dapibus in tellus.</p>

              <div class="clearfix"/>

              <h4>This is a Heading 4</h4>
              <p class="text-muted">Nulla et mattis nunc. Curabitur scelerisque
                commodo condimentum. Mauris blandit, velit a consectetur egestas ultrices arcu eros vel erat.</p>

            </div>

            <div class="col-lg-5 offset-lg-1">
              <h4 class="header-title mt-0 mb-4">Blockqoutes</h4>

              <blockquote id="blockquote-title-tour" class="blockquote font-16">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>

              <blockquote class="blockquote font-16 text-center border-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>

              <blockquote class="blockquote font-16 blockquote-reverse">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </div>
          </div>

          <div class="text-center mt-5">
            <a id="thankyou-tour" href="javascript: void(0);" class="btn btn-danger waves-effect waves-light">Thank you !</a>
          </div>

        </div> <!-- end card-box -->
      </div> <!-- end col -->
    </div>
    <!-- end row-->

  </div> <!-- container-fluid -->
</template>

<script>
import hopscotch from 'hopscotch'
  export default {
    name: 'Tour',
    data() {
      return {
        tour: {
          id: 'my-intro',
          steps: [
            {
              target: 'heading-title-tour',
              title: 'Heading Text',
              content: 'Click on the button and make sidebar navigation small.',
              placement: 'top',
              zindex: 999
            },
            {
              target: 'blockquote-title-tour',
              title: 'Blockquotes',
              content: 'You can edit you profile info here.',
              placement: 'bottom',
              zindex: 999
            },
            {
              target: 'thankyou-tour',
              title: 'Thank you !',
              content: 'Here you can change theme skins and other features.',
              placement: 'top',
              zindex: 999
            }
          ],
          showPrevButton: true
        }
      }
    },
    mounted() {
      hopscotch.startTour(this.tour)
    },
    beforeRouteLeave(to, from, next){
          hopscotch.endTour()
      next()
    }
  }
</script>

<style lang="css">
.animated {-webkit-animation-fill-mode: both;-moz-animation-fill-mode: both;-ms-animation-fill-mode: both;-o-animation-fill-mode: both;animation-fill-mode: both;-webkit-animation-duration: 1s;-moz-animation-duration: 1s;-ms-animation-duration: 1s;-o-animation-duration: 1s;animation-duration: 1s;}  @-webkit-keyframes fadeInUp { 0% {opacity: 0;-webkit-transform: translateY(20px);} 100% {opacity: 1;-webkit-transform: translateY(0);} }  @-moz-keyframes fadeInUp { 0% {opacity: 0;-moz-transform: translateY(20px);} 100% {opacity: 1;-moz-transform: translateY(0);} }  @-o-keyframes fadeInUp { 0% {opacity: 0;-o-transform: translateY(20px);} 100% {opacity: 1;-o-transform: translateY(0);} }  @keyframes fadeInUp { 0% {opacity: 0;transform: translateY(20px);} 100% {opacity: 1;transform: translateY(0);} }  .fade-in-up {-webkit-animation-name: fadeInUp;-moz-animation-name: fadeInUp;-o-animation-name: fadeInUp;animation-name: fadeInUp;}  @-webkit-keyframes fadeInDown { 0% {opacity: 0;-webkit-transform: translateY(-20px);} 100% {opacity: 1;-webkit-transform: translateY(0);} }  @-moz-keyframes fadeInDown { 0% {opacity: 0;-moz-transform: translateY(-20px);} 100% {opacity: 1;-moz-transform: translateY(0);} }  @-o-keyframes fadeInDown { 0% {opacity: 0;-ms-transform: translateY(-20px);} 100% {opacity: 1;-ms-transform: translateY(0);} }  @keyframes fadeInDown { 0% {opacity: 0;transform: translateY(-20px);} 100% {opacity: 1;transform: translateY(0);} }  .fade-in-down {-webkit-animation-name: fadeInDown;-moz-animation-name: fadeInDown;-o-animation-name: fadeInDown;animation-name: fadeInDown;}  @-webkit-keyframes fadeInRight { 0% {opacity: 0;-webkit-transform: translateX(-20px);} 100% {opacity: 1;-webkit-transform: translateX(0);} }  @-moz-keyframes fadeInRight { 0% {opacity: 0;-moz-transform: translateX(-20px);} 100% {opacity: 1;-moz-transform: translateX(0);} }  @-o-keyframes fadeInRight { 0% {opacity: 0;-o-transform: translateX(-20px);} 100% {opacity: 1;-o-transform: translateX(0);} }  @keyframes fadeInRight { 0% {opacity: 0;transform: translateX(-20px);} 100% {opacity: 1;transform: translateX(0);} }  .fade-in-right {-webkit-animation-name: fadeInRight;-moz-animation-name: fadeInRight;-o-animation-name: fadeInRight;animation-name: fadeInRight;}  @-webkit-keyframes fadeInLeft { 0% {opacity: 0;-webkit-transform: translateX(20px);} 100% {opacity: 1;-webkit-transform: translateX(0);} }  @-moz-keyframes fadeInLeft { 0% {opacity: 0;-moz-transform: translateX(20px);} 100% {opacity: 1;-moz-transform: translateX(0);} }  @-o-keyframes fadeInLeft { 0% {opacity: 0;-o-transform: translateX(20px);} 100% {opacity: 1;-o-transform: translateX(0);} }  @keyframes fadeInLeft { 0% {opacity: 0;transform: translateX(20px);} 100% {opacity: 1;transform: translateX(0);} }  .fade-in-left {-webkit-animation-name: fadeInLeft;-moz-animation-name: fadeInLeft;-o-animation-name: fadeInLeft;animation-name: fadeInLeft;}  div.hopscotch-bubble .hopscotch-nav-button { /* borrowed from katy styles */font-weight: bold;border-width: 1px;border-style: solid;cursor: pointer;margin: 0;overflow: visible;text-decoration: none !important;width: auto;padding: 0 10px;height: 26px;line-height: 24px;font-size: 12px;*zoom: 1;white-space: nowrap;display: -moz-inline-stack;display: inline-block;*vertical-align: auto;zoom: 1;*display: inline;vertical-align: middle;-moz-border-radius: 3px;-ms-border-radius: 3px;-o-border-radius: 3px;-webkit-border-radius: 3px;border-radius: 3px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}  div.hopscotch-bubble .hopscotch-nav-button:hover {*zoom: 1;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);}  div.hopscotch-bubble .hopscotch-nav-button:active {-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) inset;-moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) inset;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) inset;}  div.hopscotch-bubble .hopscotch-nav-button.next {border-color: #1b5480;color: #fff;margin: 0 0 0 10px; /* HS specific*/text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);background-color: #287bbc;filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#287bbc', endColorstr='#23639a');background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #287bbc), color-stop(100%, #23639a));background-image: -webkit-linear-gradient(top, #287bbc 0%, #23639a 100%);background-image: -moz-linear-gradient(top, #287bbc 0%, #23639a 100%);background-image: -o-linear-gradient(top, #287bbc 0%, #23639a 100%);background-image: linear-gradient(top, #287bbc 0%, #23639a 100%);}  div.hopscotch-bubble .hopscotch-nav-button.next:hover {background-color: #2672ae;filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#2672ae', endColorstr='#1e4f7e');background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #2672ae), color-stop(100%, #1e4f7e));background-image: -webkit-linear-gradient(top, #2672ae 0%, #1e4f7e 100%);background-image: -moz-linear-gradient(top, #2672ae 0%, #1e4f7e 100%);background-image: -o-linear-gradient(top, #2672ae 0%, #1e4f7e 100%);background-image: linear-gradient(top, #2672ae 0%, #1e4f7e 100%);}  div.hopscotch-bubble .hopscotch-nav-button.prev {border-color: #a7a7a7;color: #444;text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);background-color: #f2f2f2;filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#f2f2f2', endColorstr='#e9e9e9');background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #f2f2f2), color-stop(100%, #e9e9e9));background-image: -webkit-linear-gradient(top, #f2f2f2 0%, #e9e9e9 100%);background-image: -moz-linear-gradient(top, #f2f2f2 0%, #e9e9e9 100%);background-image: -o-linear-gradient(top, #f2f2f2 0%, #e9e9e9 100%);background-image: linear-gradient(top, #f2f2f2 0%, #e9e9e9 100%);}  div.hopscotch-bubble .hopscotch-nav-button.prev:hover {background-color: #e8e8e8;filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#FFE8E8E8', endColorstr='#FFA9A9A9');background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #e8e8e8), color-stop(13%, #e3e3e3), color-stop(32%, #d7d7d7), color-stop(71%, #b9b9b9), color-stop(100%, #a9a9a9));background-image: -webkit-linear-gradient(top, #e8e8e8 0%, #e3e3e3 13%, #d7d7d7 32%, #b9b9b9 71%, #a9a9a9 100%);background-image: -moz-linear-gradient(top, #e8e8e8 0%, #e3e3e3 13%, #d7d7d7 32%, #b9b9b9 71%, #a9a9a9 100%);background-image: -o-linear-gradient(top, #e8e8e8 0%, #e3e3e3 13%, #d7d7d7 32%, #b9b9b9 71%, #a9a9a9 100%);background-image: linear-gradient(top, #e8e8e8 0%, #e3e3e3 13%, #d7d7d7 32%, #b9b9b9 71%, #a9a9a9 100%);}  div.hopscotch-bubble {background-color: #ffffff;border: 5px solid #000000; /* default */border: 5px solid rgba(0, 0, 0, 0.5); /* transparent, if supported */color: #333;font-family: Helvetica, Arial;font-size: 13px;position: absolute;z-index: 999999;-moz-background-clip: padding; /* for Mozilla browsers*/-webkit-background-clip: padding; /* Webkit */background-clip: padding-box; /*  browsers with full support */}  div.hopscotch-bubble.animate {-moz-transition-property: top, left;-moz-transition-duration: 1s;-moz-transition-timing-function: ease-in-out;-ms-transition-property: top, left;-ms-transition-duration: 1s;-ms-transition-timing-function: ease-in-out;-o-transition-property: top, left;-o-transition-duration: 1s;-o-transition-timing-function: ease-in-out;-webkit-transition-property: top, left;-webkit-transition-duration: 1s;-webkit-transition-timing-function: ease-in-out;transition-property: top, left;transition-duration: 1s;transition-timing-function: ease-in-out;}  div.hopscotch-bubble.invisible {opacity: 0;}  div.hopscotch-bubble.hide, div.hopscotch-bubble .hide, div.hopscotch-bubble .hide-all {display: none;}  div.hopscotch-bubble h3 {color: #000;font-family: Helvetica, Arial;font-size: 16px;font-weight: bold;line-height: 19px;margin: -1px 15px 0 0;padding: 0;}  div.hopscotch-bubble .hopscotch-bubble-container {padding: 15px;position: relative;text-align: left;-webkit-font-smoothing: antialiased; /* to fix text flickering */}  div.hopscotch-bubble .hopscotch-content {font-family: Helvetica, Arial;font-weight: normal;line-height: 17px;margin: -5px 0 11px;padding-top: 8px;}  div.hopscotch-bubble .hopscotch-bubble-content {margin: 0 0 0 40px;}  div.hopscotch-bubble.no-number .hopscotch-bubble-content {margin: 0;}  div.hopscotch-bubble .hopscotch-bubble-close {color: #000;display: block;padding: 8px;position: absolute;text-decoration: none;text-indent: -9999px;width: 8px;height: 8px;top: 0;right: 0;}  div.hopscotch-bubble .hopscotch-bubble-close.hide, div.hopscotch-bubble .hopscotch-bubble-close.hide-all {display: none;}  div.hopscotch-bubble .hopscotch-bubble-number {background: #ff5b5b 0 0 no-repeat;color: #fff;display: block;float: left;font-size: 17px;font-weight: bold;line-height: 31px;text-align: center;width: 30px;height: 30px;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container {position: absolute;width: 34px;height: 34px;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container .hopscotch-bubble-arrow, div.hopscotch-bubble .hopscotch-bubble-arrow-container .hopscotch-bubble-arrow-border {width: 0;height: 0;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container.up {top: -22px;left: 10px;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container.up .hopscotch-bubble-arrow {border-bottom: 17px solid #ffffff;border-left: 17px solid transparent;border-right: 17px solid transparent;position: relative;top: -10px;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container.up .hopscotch-bubble-arrow-border {border-bottom: 17px solid #000000;border-bottom: 17px solid rgba(0, 0, 0, 0.5);border-left: 17px solid transparent;border-right: 17px solid transparent;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container.down {bottom: -39px;left: 10px;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container.down .hopscotch-bubble-arrow {border-top: 17px solid #ffffff;border-left: 17px solid transparent;border-right: 17px solid transparent;position: relative;top: -24px;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container.down .hopscotch-bubble-arrow-border {border-top: 17px solid #000000;border-top: 17px solid rgba(0, 0, 0, 0.5);border-left: 17px solid transparent;border-right: 17px solid transparent;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container.left {top: 10px;left: -22px;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container.left .hopscotch-bubble-arrow {border-bottom: 17px solid transparent;border-right: 17px solid #ffffff;border-top: 17px solid transparent;position: relative;left: 7px;top: -34px;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container.left .hopscotch-bubble-arrow-border {border-right: 17px solid #000000;border-right: 17px solid rgba(0, 0, 0, 0.5);border-bottom: 17px solid transparent;border-top: 17px solid transparent;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container.right {top: 10px;right: -39px;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container.right .hopscotch-bubble-arrow {border-bottom: 17px solid transparent;border-left: 17px solid #ffffff;border-top: 17px solid transparent;position: relative;left: -7px;top: -34px;}  div.hopscotch-bubble .hopscotch-bubble-arrow-container.right .hopscotch-bubble-arrow-border {border-left: 17px solid #000000;border-left: 17px solid rgba(0, 0, 0, 0.5);border-bottom: 17px solid transparent;border-top: 17px solid transparent;}  div.hopscotch-bubble .hopscotch-actions {margin: 10px 0 0;text-align: right;}  /* Overlay styles */  div.hopscotch-overlay {position: absolute;opacity: .3;background-color: #000;}  div.hopscotch-overlay.hide {display: none;}
</style>

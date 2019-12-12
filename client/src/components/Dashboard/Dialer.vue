<template>
  <div id="dialpad" class="card-box">
    <input id="dial_telephone" class="form-control" type="tel" placeholder="Enter number">
    <div class="d-flex no-wrap justify-content-center mt-2">
      <div class="dial_button" data-id="1"><span class="dial-number">1</span></div>
      <div class="dial_button" data-id="2"><span class="dial-number">2</span><span class="dial-letters">ABC</span></div>
      <div class="dial_button" data-id="3"><span class="dial-number">3</span><span class="dial-letters">DEF</span></div>
    </div>
    <div class="d-flex no-wrap justify-content-center">
      <div class="dial_button" data-id="4"><span class="dial-number">4</span><span class="dial-letters">GHI</span></div>
      <div class="dial_button" data-id="5"><span class="dial-number">5</span><span class="dial-letters">JKL</span></div>
      <div class="dial_button" data-id="6"><span class="dial-number">6</span><span class="dial-letters">MNO</span></div>
    </div>
    <div class="d-flex no-wrap justify-content-center">
      <div class="dial_button" data-id="7"><span class="dial-number">7</span><span class="dial-letters">PQRS</span></div>
      <div class="dial_button" data-id="8"><span class="dial-number">8</span><span class="dial-letters">TUV</span></div>
      <div class="dial_button" data-id="9"><span class="dial-number">9</span><span class="dial-letters">WXYZ</span></div>
    </div>
    <div class="d-flex no-wrap justify-content-center">
      <div class="dial_button" data-id="*"><span class="dial-number-center">*</span></div>
      <div class="dial_button" data-id="0"><span class="dial-number">0</span></div>
      <div class="dial_button" data-id="#"><span class="dial-number-center">#</span></div>
    </div>
    <div class="d-flex no-wrap justify-content-center">
      <div class="dial_button dial-call" data-id=""><span class="dial-number-center"><i class="fas fa-phone"/></span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  props: {
  },
  methods: {
  }
}
</script>
<style scoped>
</style>

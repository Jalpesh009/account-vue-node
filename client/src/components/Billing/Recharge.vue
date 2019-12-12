<template>
  <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
    <div id="recharge" class="card-box h-100 pb-0 d-flex flex-column">
      <h4 class="header-title">Recharge</h4>
      <input id="simpleinput" type="number" class="form-control m-auto p-0 b_recharge_input" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Amount($)'" placeholder="Amount($)">
      <button type="button" class="btn btn-success waves-effect btn-block waves-light align-self-end mb-3">Recharge</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recharge',
  props: {
  },
  methods: {
  }
}
</script>
<style>
.b_recharge_input {
  width: 100% !important
}
</style>

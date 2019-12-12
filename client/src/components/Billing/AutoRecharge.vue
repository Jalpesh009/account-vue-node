<template>
<div class="col-sm-12 col-md-12 col-lg-4 mb-3">
  <div id="auto-recharge" class="card-box h-100 pb-0">
    <h4 class="header-title mb-2">Auto recharge</h4>
    <form class="form-horizontal" role="form">
      <div class="form-group row">
        <label class="col-sm-12 col-md-8 col-lg col-form-label pt-0">Recharge my account with</label>
        <div class="col-sm-12 col-md-4 col-lg">
          <select class="form-control">
            <option>$25.00</option>
            <option>$75.00</option>
            <option>$250.00</option>
            <option>$500.00</option>
            <option>$2000.00</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-md-8 col-lg col-form-label pt-0">When it falls bellow</label>
        <div class="col-sm-12 col-md-4 col-lg">
          <select class="form-control">
            <option>$25.00</option>
            <option>$80.00</option>
            <option>$500.00</option>
          </select>
        </div>
      </div>
    </form>
    <button type="button" class="btn btn-success waves-effect btn-block waves-light">Save</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'AutoRecharge',
  props: {
  },
  methods: {
  }
}
</script>

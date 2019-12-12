<template>
  <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
    <div id="balance" class="card-box h-100 pb-0 d-flex flex-column">
      <h4 class="header-title">Account balance</h4>
      <div class="m-auto">
        <p><span class="amount mb-0">${{ balance }}</span><br>Credit</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountBalance',
  props: {
    balance: {
      type: Number,
      required: false,
      default: () => 0
    }
  },
  methods: {
  }
}
</script>

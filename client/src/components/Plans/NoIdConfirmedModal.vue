<template>
  <div
    class="modal fade error-id-not-confirmed"
    title="ID not confirmed"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    style="display: none;"
    id="no-id-confirmed"
  >
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-body text-center">
          <p>You still haven't verified your ID. Until you do it you won't be able to proceed with any payments.</p>
          <p>Would you like to verify your identity now?</p>
          <button
            type="button"
            id="error-id-not-confirmed-btn"
            class="btn width-lg btn-success"
          >Verify</button>
        </div>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</template>

<script>
export default {
    name: 'NoIdConfirmedModal'
};
</script>
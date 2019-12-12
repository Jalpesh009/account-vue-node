<template>
  <div hide-footer
    class="modal fade error-no-card"
    title="No card added"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    style="display: none;"
    id="no-card-modal"
  >
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-body text-center">
          <p>You can't proceed until you add at least one card.</p>
          <p>Would you like to add one now?</p>
          <button type="button" id="error-no-card-btn" class="btn width-lg btn-success">Add</button>
        </div>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</template>

<script>
export default {
  name: "NoCardModal"
};
</script>
<template>
  <b-modal hide-footer
    class="modal fade delete-type"
    title="Delete call group"
    tabindex="-1"
    role="dialog"
    aria-labelledby="delete-type"
    aria-hidden="true"
    style="display: none;"
    id="delete-rule"
  >
    <template v-slot:default="{ hide }">
          <p>Are you sure you want delete this call type?</p>
          <button type="button" id="delete-type-btn" class="btn btn-danger float-right" @click="hideModal">Remove</button>
    </template>
    <!-- /.modal-content -->
  </b-modal>
  <!-- /.modal-dialog -->
</template>

<script>
export default {
  name: "DeleteRuleModal",
  methods: {
      hideModal() {
          this.$bvModal.hide('delete-rule');
      }
  }
};
</script>

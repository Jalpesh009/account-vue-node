<template>
  <b-modal
    id="add-new-rule"
    class="modal fade add-new-rule"
    title="Add new call rule"
    tabindex="-1"
    role="dialog"
    aria-labelledby="add-new-rule"
    aria-hidden="true"
    style="display: none;"
    size="m"
  >
    <template v-slot:default>
      <div class="form-group">
            <input
              id="call-rule-name"
              type="text"
              class="form-control"
              placeholder="Enter call rule name"
            >
      </div>

    </template>
    <template v-slot:modal-footer>
      <button id="create-rule-btn" type="button" class="btn btn-success" @click="hideModal">Add</button>
    </template>
    <!-- /.modal-content -->
  </b-modal>
  <!-- /.modal-dialog -->
</template>

<script>
export default {
  name: 'AddRuleModal',
  methods: {
      hideModal() {
          this.$bvModal.hide('add-new-rule')
      }
  }
}
</script>

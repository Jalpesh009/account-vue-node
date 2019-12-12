<template>
  <b-modal
    id="add-new-field"
    class="modal fade add-new-field"
    title="Add new field"
    tabindex="-1"
    role="dialog"
    aria-labelledby="add-new-field"
    aria-hidden="true"
    style="display: none;"
    size="md"
  >
    <template v-slot:default="{ hide }">
      <div class="form-group">
        <input
          id="field-label"
          v-model="formData.label"
          type="text"
          class="form-control"
          placeholder="Enter field label"
        >
      </div>
      <div class="form-group">
        <b-form-select  id="field-type" v-model="formData.inputType" type="select" class="form-control" placeholder="Label">
          <option :value="null" disabled>Select type</option>
          <option value="input">Textbox</option>
          <option value="textarea">Textarea</option>
          <option value="select">Dropdown</option>
          <option value="date">Date</option>
        </b-form-select>
      </div>
      <div class="form-group">
        <input
          id="field-filled"
          v-model="formData.preFilled"
          type="text"
          class="form-control"
          placeholder="Enter pre-filled data"
        >
      </div>
      <div class="form-group">
        <select id="field-type" v-model="formData.required" type="select" class="form-control" placeholder="Label">
          <option :value="null" disabled>Required</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    </template>
    <template v-slot:modal-footer>
      <button
        id="create-field-btn"
        type="button"
        class="btn btn-success"
        @click="setFieldSetting()"
      >
        Create</button>
    </template>
    <!-- /.modal-content -->
  </b-modal>
  <!-- /.modal-dialog -->
</template>

<script>
export default {
  name: 'AddFieldModal',
  data() {
    return {
      selected: null,
      selectedRequired: null,
      formData: {
        label: '',
        labelAdditional: 'Created',
        preFilled: '',
        required: false,
        inputType: '',
        type: 'text'
      }
    }
  },
  methods: {
      hideModal() {
          this.$bvModal.hide('add-new-field')
      },
      setFieldSetting() {
        this.$emit('get-field-setting', this.formData)
        this.formData = {
          label: '',
          labelAdditional: 'Created',
          preFilled: '',
          required: false,
          inputType: ''
        }
        this.hideModal()
      }
  }
}
</script>

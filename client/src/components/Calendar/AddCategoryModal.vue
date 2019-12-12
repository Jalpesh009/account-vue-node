<template>
  <!-- Modal Add Category -->
  <b-modal id="add-category" class="modal fade none-border" title="Add a category" hide-footer>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <form role="form">
            <div class="row">
              <div class="col-md-6">
                <label class="control-label">Category Name</label>
                <input
                  class="form-control form-white"
                  placeholder="Enter name"
                  type="text"
                  name="category-name"
                  @input="(event) => this.$emit('inputChange', event)"
                >
              </div>
              <div class="col-md-6">
                <label class="control-label">Choose Category Color</label>
                <select
                  class="form-control form-white"
                  data-placeholder="Choose a color..."
                  name="category-color"
                  @change="(event) => this.$emit('selectChange', event)"
                >
                  <option value="success">Success</option>
                  <option value="danger">Danger</option>
                  <option value="info">Info</option>
                  <option value="pink">Pink</option>
                  <option value="primary">Primary</option>
                  <option value="warning">Warning</option>
                  <option value="inverse">Inverse</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary waves-effect waves-light save-category"
            data-dismiss="modal"
            @click="(event) => this.$emit('addCalendarCategory', event)"
          >Save</button>
        </div>
      </div>
    </div>
  </b-modal>
  <!-- END MODAL -->
</template>

<script>
export default {
  name: 'AddCategoryModal'
}
</script>

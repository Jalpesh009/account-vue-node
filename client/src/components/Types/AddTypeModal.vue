<template>
  <b-modal
    class="modal fade add-new-type"
    title="Create new call type"
    tabindex="-1"
    role="dialog"
    aria-labelledby="add-new-type"
    aria-hidden="true"
    style="display: none;"
    id="add-new-type"
    size="md"
  >
    <template v-slot:default="{ hide }">
          <div class="form-group">
            <input
              type="text"
              id="call-type-name"
              class="form-control"
              placeholder="Enter call type name"
              required
            />
          </div>
    </template>
    <template v-slot:modal-footer>
          <button type="button" id="create-type-btn" class="btn btn-success" @click="hideModal">Create</button>
    </template>
    <!-- /.modal-content -->
  </b-modal>
  <!-- /.modal-dialog -->
</template>

<script>
import $ from "jquery";

export default {
  name: "AddTypeModal",
  methods: {
      hideModal() {
          this.$bvModal.hide('add-new-type');
      }
  },
  mounted() {
    $("#create-type-btn").click(function() {
      var $list;
      $list = $(".treeview-animated-list");
      var type_name = $("#call-type-name:text").val();
      $list.append(
        '<li class="treeview-animated-items"><a class="closed"><i class="fas fa-caret-right mr-2 test"></i><span>' +
          type_name +
        '</span></a>' +
        '<span class="call-rule-buttons"><i class="fas add-rule-btn fa-plus" data-toggle="modal" data-target=".add-new-rule" data-backdrop="static" data-keyboard="false" @click="showRuleModal"></i> <i class="fas delete-type-btn fa-trash" data-toggle="modal" data-target=".delete-type" data-backdrop="static" data-keyboard="false" @click="showDeleteRuleModal"></i></span>' +
        '<ul class="nested"><li class="treeview-animated-element"><span class="call-rule">New call rule</span></li></ul></li>'
      );
      $(".treeview-animated").mdbTreeview();
      $("#call-type-name").val("");
    });
  }
};
</script>

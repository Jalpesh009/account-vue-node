<template>
  <b-modal id="add-new-user"
    hide-footer
    class="modal fade add-user-modal"
    title="Assign users to this call rule"
    tabindex="-1"
    role="dialog"
    aria-labelledby="add-user-modal"
    aria-hidden="true"
    style="display: none;"
    size="md"
  >
    <template v-slot:default="{ hide }">

          <p>Select users you want to assign to this call rule:</p>
          <div id="assign-users-modal" class="d-flex justify-content-center flex-wrap">
            <p class="h4 d-none">There are no users left to assign</p>
            <div class="assign-modal">
              <img
                src="assets/images/users/user-2.jpg"
                class="contact-image img-center text-center d-block rounded-circle avatar-md"
                alt="profile-image"
              >
              <div class="contact-name text-center">
                <h5>Test</h5>
              </div>
              <button
                class="btn btn-success btn-xs btn-block waves-effect waves-light add-user-btn"
              >Assign</button>
            </div>

            <div class="assign-modal">
              <img
                src="assets/images/users/user-2.jpg"
                class="contact-image img-center text-center d-block rounded-circle avatar-md"
                alt="profile-image"
              >
              <div class="contact-name text-center">
                <h5>Test2</h5>
              </div>
              <button class="btn btn-success btn-xs btn-block waves-effect waves-light add-user-btn"
                @click="hideModal"
              >Assign</button>
            </div>
          </div>
    </template>
    <!-- /.modal-content -->
  </b-modal>
  <!-- /.modal-dialog -->
</template>

<script>
export default {
    name: 'AddUserModal',
    methods: {
        hideModal() {
            this.$bvModal.hide('add-new-user')
        }
    }
}
</script>

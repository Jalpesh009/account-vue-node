<template>
  <b-modal
    class="modal fade add-new-contact"
    id="add-contact"
    title="Add a new contact"
    tabindex="-1"
    role="dialog"
    aria-labelledby="Add-new-contact"
    aria-hidden="true"
    style="display: none;"
    size="lg"
  >
    <template v-slot:modal-header="{close}">
      <h4 class="modal-title" id="Add-new-contact">Add a new contact</h4>
      <button type="button" class="close" @click="close()" data-dismiss="modal" aria-hidden="true">×</button>
    </template>
        <template v-slot:default >
          <form class="form-horizontal form-new-contact" role="form">
            <div class="form-group row">
              <label class="col-sm-2  col-form-label" for="name">Name</label>
              <div class="col-sm-10">
                <input v-model="cardInfo.name" type="text" id="name" class="form-control" placeholder="Enter contact's name">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-sm-2  " for="telephone">Number</label>
              <div class="col-sm-10">
                <input v-model="cardInfo.phone" type="tel" id="telephone" class="form-control" placeholder="Enter contact's phone number">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2  col-form-label" for="email">Email</label>
              <div class="col-sm-10">
                <input v-model="cardInfo.email" type="email" id="email" class="form-control" placeholder="Enter contact's email address">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2  col-form-label" for="company">Company</label>
              <div class="col-sm-10">
                <input v-model="cardInfo.company" type="text" id="company" class="form-control" placeholder="Enter contact's company name">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2  col-form-label" for="type">Type</label>
              <div class="col-sm-10">
                <input v-model="cardInfo.type" type="text" id="type" class="form-control" placeholder="Enter contact's type">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2  col-form-label" for="simpleinput">Contact image</label>
              <div class="col-sm-12">
                <input type="file" id="simpleinput" >
              </div>
            </div>
          </form>
        </template>
        <template v-slot:modal-footer="{close}">
          <button
            type="button" variant="success"
            class="btn btn-success"
            @click="
            close()
            pushCardInfo()"

          >
            Add
          </button>
        </template>
  </b-modal>
</template>

<script>
export default {
  name: "AddContactModal",
  data() {
    return {
      cardInfo: {
        name: null,
        img_src: '../assets/images/users/user-2.jpg',
        phone: null,
        email: null,
        company: null,
        type: null
      }
    }
  },
  methods: {
    pushCardInfo() {
      console.log('1')
      this.$emit('get-card-info', this.cardInfo)
    }
  }
};
</script>
<style>
.modal-backdrop {
  opacity: 0.5;
}
.modal-title {
  font-size: 1.125rem
}
.contact-buttons {
  margin: auto 0 0 0;
}

.contact-buttons li{
  font-size: 1.5rem;
  color:#85b1fb;
  padding: 20px 10px 20px;
  cursor: pointer;
}
.form-new-contact {
  margin-bottom: 1rem

}
.form-new-contact label {
  font-weight: 600;
  display: flex;
  align-items: center;
}
.form-new-contact .form-group {
  margin-bottom: 0;
}
.col-sm-2.col-form-label {
  margin-bottom: 0;
}
</style>

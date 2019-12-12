<template>
      <!-- Start Content-->
      <div class="container-fluid">
        <ul class="list-unstyled list-inline d-flex flex-wrap">
          <li class="list-inline-item mr-3">
            <form class="app-search pb-2">
              <div class="app-search-box">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search by name, type or company"
                  >
                  <div class="input-group-append">
                    <button class="btn" type="submit">
                      <i class="fe-search"/>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </li>
          <li class="list-inline-item">
            <button class="btn btn-success waves-effect waves-light btn-md mr-2"
              data-toggle="modal"
              data-target=".add-new-contact"
              data-backdrop="static"
              data-keyboard="false"
              @click="addContactModalShow"
            >
              <i class="fas fa-plus mr-1"/>
              <span>Add new contact</span>
            </button>
          </li>
          <li class="list-inline-item font-16 color-dark font-weight-bold pt-1">View:</li>
          <li class="list-inline-item view-icon">
            <input
              id="grid-view"
              type="radio"
              name="view-filter"
              class="view-button grid-view-radio view-radio"
              checked
            >
            <label title="Grid view" for="grid-view">
              <i class="mdi mdi-view-module"/>
            </label>
            <input
              id="list-view"
              type="radio"
              name="view-filter"
              class="view-button list-view-radio view-radio"
            >
            <label title="List view" for="list-view">
              <i class="mdi mdi-view-list"/>
            </label>
          </li>
        </ul>

        <div class="contacts contacts-grid">
          <ContactBlock
            v-for="contact in contacts"
            :key="contact.id"
            :contact_name="contact.name"
            :img_src="contact.img_src"
            :contact_phone="contact.phone"
            :contact_email="contact.email"
            :contact_company="contact.company"
            :contact_type="contact.type"
          />
        </div>
        <!-- end contacts -->

        <AddContactModal @get-card-info="getCardInfo($event)"/>
      </div>
      <!-- container-fluid -->
</template>

<script>
import ContactBlock from '../components/Contacts/ContactBlock'
import AddContactModal from '../components/Contacts/AddContactModal'

import $ from 'jquery'

export default {
  components: {
    ContactBlock,
    AddContactModal
  },
  data() {
    return {
      contacts: [
        // Simulating dynamic data
        {
          // id: 1 -- each contact will have its id?
          name: 'Stephen Meritt',
          img_src: '../assets/images/users/user-2.jpg',
          phone: '+1 202 555 0128',
          email: 'stephen@magnetic.com',
          company: 'The Magnetic Fields',
          type: 'Client'
        },
        {
          // id: 2 -- each contact will have its id?
          name: 'Stephen Meritt',
          img_src: '../assets/images/users/user-2.jpg',
          phone: '+1 202 555 0128',
          email: 'stephen@magnetic.com',
          company: 'The Magnetic Fields',
          type: 'Client'
        },
        {
          // id: 3 -- each contact will have its id?
          name: 'Stephen Meritt',
          img_src: '../assets/images/users/user-2.jpg',
          phone: '+1 202 555 0128',
          email: 'stephen@magnetic.com',
          company: 'The Magnetic Fields',
          type: 'Client'
        },
        {
          // id: 4 -- each contact will have its id?
          name: 'Stephen Meritt',
          img_src: '../assets/images/users/user-2.jpg',
          phone: '+1 202 555 0128',
          email: 'stephen@magnetic.com',
          company: 'The Magnetic Fields',
          type: 'Client'
        }
      ]
    }
  },
  mounted() {
    $('input').on('click', function(e) {
      if ($(this).hasClass('list-view-radio')) {
        $('.contacts')
          .removeClass('contacts-grid')
          .addClass('contacts-list')
      } else if ($(this).hasClass('grid-view-radio')) {
        $('.contacts')
          .removeClass('contacts-list')
          .addClass('contacts-grid')
      }
    })
  },
  methods: {
    addContactModalShow() {
      this.$bvModal.show('add-contact')
    },
    getCardInfo(payload) {
      const copyOfArray = Object.assign({}, payload)
      this.contacts.push(copyOfArray)
    }
  }
}
</script>

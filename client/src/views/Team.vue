<template>
  <div class="container-fluid">
    <ul class="list-unstyled list-inline d-flex flex-wrap">
      <li class="list-inline-item mr-3">
        <form class="app-search pb-2">
          <div class="app-search-box">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search by name, type or company" >
              <div class="input-group-append">
                <button class="btn" type="submit">
                  <i class="fe-search"/>
                </button>
              </div>
            </div>
          </div>
        </form>
      </li>
      <li class="list-inline-item font-16 color-dark font-weight-bold pt-1">View:</li>
      <li class="list-inline-item view-icon">
        <input
          id="grid-view"
          type="radio"
          name="view-filter"
          class="view-button grid-view-radio"
          checked
        >
        <label title="Grid view" for="grid-view">
          <i class="mdi mdi-view-module"/>
        </label>
        <input id="list-view" type="radio" name="view-filter" class="view-button list-view-radio" >
        <label title="List view" for="list-view">
          <i class="mdi mdi-view-list"/>
        </label>
      </li>
    </ul>
    <div class="teams">
      <div class="contacts contacts-grid">
        <div class="card contact-card add-user" @click="openModal(userTemplate, null)">
          <div class="m-auto wrapper">
            <i class="fas fa-plus"></i>
            <div class="font-16">Assign new user</div>
          </div>
        </div>
        <div v-for="(user, index) in users" :key="index" class="card contact-card" @click="openModal(user, index)">
          <div class="status-online"/>
          <img
            :src="user.photo"
            class="contact-image rounded-circle avatar-xl"
            alt="profile-image"
          >
          <div class="contact-name">
            <h4>{{ `${user.firstName} ${user.lastName}` }}</h4>
          </div>
          <div class="contact-info">
            <span class="contact-phone">{{ user.phone }}</span>
            <span class="contact-email">{{ user.email }}</span>
          </div>
        </div>
        <!-- contact card-->

      </div>
      <!-- end contacts -->
    </div>
    <TeamModal ref="teamModal" :user-data="modalUser" :user-index="userIndex" @get-data="getDataForPush($event)" />
    <!-- teams -->
  </div>
  <!-- container-fluid -->
</template>

<script>
import $ from 'jquery'
import TeamModal from '../components/Team/TeamModal.vue'

export default {
  components: {
    TeamModal
  },
  data() {
    return {
      modalUser: null,
      userIndex: null,
      userTemplate: {
        firstName: '',
        lastName: '',
        photo: 'assets/images/users/user-2.jpg',
        phone: '',
        email: '',
        gender: 'male',
        accountType: 'limited',
        timeZone: 1,
        readyForCalls: false,
        noSms: false,
        transferFrom: '11 am',
        transferTo: '11 pm'
      },
      users: [
        {
          firstName: 'Stephen',
          lastName: 'Meritt',
          photo: 'assets/images/users/user-2.jpg',
          phone: '+1 202 555 0128',
          email: 'stephen@magnetic.com',
          gender: 'male',
          accountType: 'limited',
          timeZone: -12,
          readyForCalls: true,
          noSms: false,
          transferFrom: '11 am',
          transferTo: '11 pm'
        },
        {
          firstName: 'Stephen',
          lastName: 'Meritt',
          photo: 'assets/images/users/user-2.jpg',
          phone: '+1 202 555 0128',
          email: 'stephen@magnetic.com',
          gender: 'male',
          accountType: 'limited',
          timeZone: -12,
          readyForCalls: true,
          noSms: false,
          transferFrom: '11 am',
          transferTo: '11 pm'
        },
        {
          firstName: 'Stephen',
          lastName: 'Meritt',
          photo: 'assets/images/users/user-2.jpg',
          phone: '+1 202 555 0128',
          email: 'stephen@magnetic.com',
          gender: 'male',
          accountType: 'limited',
          timeZone: -12,
          readyForCalls: true,
          noSms: false,
          transferFrom: '11 am',
          transferTo: '11 pm'
        },
        {
          firstName: 'Stephen',
          lastName: 'Meritt',
          photo: 'assets/images/users/user-2.jpg',
          phone: '+1 202 555 0128',
          email: 'stephen@magnetic.com',
          gender: 'male',
          accountType: 'limited',
          timeZone: -12,
          readyForCalls: true,
          noSms: false,
          transferFrom: '11 am',
          transferTo: '11 pm'
        },
        {
          firstName: 'Stephen',
          lastName: 'Meritt',
          photo: 'assets/images/users/user-2.jpg',
          phone: '+1 202 555 0128',
          email: 'stephen@magnetic.com',
          gender: 'male',
          accountType: 'limited',
          timeZone: -12,
          readyForCalls: true,
          noSms: false,
          transferFrom: '11 am',
          transferTo: '11 pm'
        }, {
          firstName: 'Stephen',
          lastName: 'Meritt',
          photo: 'assets/images/users/user-2.jpg',
          phone: '+1 202 555 0128',
          email: 'stephen@magnetic.com',
          gender: 'male',
          accountType: 'limited',
          timeZone: -12,
          readyForCalls: true,
          noSms: false,
          transferFrom: '11 am',
          transferTo: '11 pm'
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
    getDataForPush(payload) {
      console.log(payload)
      if (payload.userIndex !== null) {
        this.$set(this.users, payload.userIndex, payload.userInfo)
      } else {
        this.users.push(payload.userInfo)
      }
    },
    openModal(userData, userIndex) {
      this.$bvModal.show('add-edit-member')
      this.modalUser = userData
      this.userIndex = userIndex
    }
  }
}
</script>
<style lang="sass">
.contacts .add-user:hover
  background-color: #ffffff !important
.teams
  margin-bottom: 40px
</style>

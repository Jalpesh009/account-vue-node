<template>
  <!-- Topbar Start -->
  <div class="navbar-custom">
    <ul class="list-unstyled topnav-menu float-right mb-0">

      <b-nav-item-dropdown
        right
        class="notification-list"
        menu-class="profile-dropdown"
      >
        <template slot="button-content">
          <div class="nav-user mr-0 waves-effect waves-light">
            <img
              src="@/assets/images/users/user-1.jpg"
              alt="user-image"
              class="rounded-circle"
            >
            <span class="pro-user-name ml-1">
              {{ user ? `${ user.first_name } ${ user.last_name }` : ' ' }} <i class="mdi mdi-chevron-down"/>
            </span>
          </div>
        </template>

        <b-dropdown-item href="#">
          <h6 class="text-overflow m-0">Welcome!</h6>
        </b-dropdown-item>

        <b-dropdown-item href="#" @click="account">
          <i class="fas fa-user"/>
          <span>My Account</span>
        </b-dropdown-item>

        <b-dropdown-divider/>

        <b-dropdown-item @click="logout">
          <i class="fas fa-sign-out-alt"/>
          <span>Logout</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>

    </ul>

    <!-- LOGO -->
    <div class="logo-box">
        <a href="/" class="logo text-center">
            <span class="logo-lg">
                <img src="@/assets/images/logo-b&w.png" alt="" height="50">
                <!-- <span class="logo-lg-text-light">Xeria</span> -->
            </span>
            <span class="logo-sm">
                <!-- <span class="logo-sm-text-dark">X</span> -->
                <img src="@/assets/images/logo-sm.png" alt="" height="48">
            </span>
        </a>
    </div>

    <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
      <li>
        <button
          class="button-menu-mobile disable-btn waves-effect"
          @click="toggleMenu"
        >
          <i class="fe-menu"/>
        </button>
      </li>

      <li>
        <h4 class="page-title-main">{{ title || '' }}</h4>
      </li>

    </ul>
  </div>
  <!-- end Topbar -->
</template>
<script>
import { authComputed } from '@/store/helpers'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  components: { VuePerfectScrollbar },
  props: {
    user: {
      type: Object,
      required: false,
      default: () => ({})
    },
    title: {
      type: String,
      required: false,
      default: () => ''
    }
  },
  data() {
    return {}
  },
  computed: {
    ...authComputed
  },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu()
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar()
    },
    logout() {
      let that = this
      this.$store.dispatch('auth/logout')
             .then(() => {
               that.$router.push('/login')
             })
             .catch(err => console.log(err))
    },
    account() {
      let that = this
      that.$router.push('/user-settings');
    }
  }
}
</script>

<style lang="scss">
.noti-scroll {
  height: 220px;
}
.ps > .ps__scrollbar-y-rail {
  width: 8px !important;
  background-color: transparent !important;
}
.ps > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:active > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y {
  width: 6px !important;
}
.button-menu-mobile {
  outline: none !important;
}
</style>

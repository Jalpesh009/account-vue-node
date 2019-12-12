<template>
  <div>
    <template v-if="hasLayout">
      <div id="wrapper">
        <v-app>
          <NavBar :user="currentUser" :title="routeName" />
          <SideBar :is-condensed="isMenuCondensed" :user="currentUser" />
          <!-- ============================================================== -->
          <!-- Start Page Content here -->
          <!-- ============================================================== -->

          <div class="content-page">
            <div class="content">
              <!-- Start Content-->
              <div class="container-fluid">
                <router-view />
              </div>
            </div>
          </div>

          <Footer />
          <RightBar />
        </v-app>
      </div>
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import NavBar from "@/components/core/nav-bar";
import SideBar from "@/components/core/side-bar";
import RightBar from "@/components/core/right-bar";
import Footer from "@/components/core/footer";

export default {
  name: "App",
  components: { NavBar, SideBar, RightBar, Footer },
  data: () => {
    return {
      isMenuCondensed: false
    };
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn", "authStatus", "getUser"]),
    ...mapState("auth", {
      currentUser: state => state.user
    }),
    routeName() {
      // We will see what `params` is shortly
      return this.$route.name;
    },
    hasLayout() {
      return this.$route.meta.hasLayout;
    }
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("auth/logout");
        }
        throw err;
      });
    });
  },
  methods: {
    toggleMenu() {
      this.isMenuCondensed = !this.isMenuCondensed;
      document.body.classList.toggle("sidebar-enable");
      if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
          navigator.userAgent
        )
      ) {
        document.body.classList.toggle("enlarged");
      }
    },
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    }
  }
};
</script>

<style lang="scss">
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selector-class-pattern

// Design variables and utilities from src/design.
//@import '@/styles/index.scss';
.error--text {
    color: #ff5252 !important;
    caret-color: #ff5252 !important;
}

.v-application ol, .v-application ul {
  padding-left: 0 !important;
}
.dropdown-item {
  color: #6c757d !important;
}
</style>

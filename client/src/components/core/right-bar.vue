<script>
import { authComputed } from '@/store/helpers'

export default {
  components: {},
  computed: {
    ...authComputed
  },
  methods: {
    hide() {
      this.$parent.toggleRightSidebar()
    }
  }
}
</script>

<template>
  <div>
    <!-- Right Sidebar -->
    <div class="right-bar">
      <div class="rightbar-title">
        <a
          href="javascript:void(0);"
          class="right-bar-toggle float-right"
          @click="hide"
        >
          <i class="fe-x noti-icon"/>
        </a>
        <h4 class="m-0 text-white">Settings</h4>
      </div>
      <div class="slimscroll-menu">
        <!-- User box -->
        <div class="user-box">
          <div class="user-img">
            <img
              src="@/assets/images/users/user-1.jpg"
              alt="user-img"
              title="Mat Helme"
              class="rounded-circle img-fluid"
            >
            <a href="javascript:void(0);" class="user-edit"
              ><i class="mdi mdi-pencil"/></a>
          </div>

          <h5><a href="javascript: void(0);">Nik G. Patel</a> </h5>
          <p class="text-muted mb-0"><small>Admin Head</small></p>
        </div>
      </div>
      <!-- end slimscroll-menu-->
    </div>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"/>
  </div>
</template>

<style lang="scss"></style>

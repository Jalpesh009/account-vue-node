<template>
  <div class="h-100 d-flex flex-column justify-content-between">

    <!--- Sidemenu -->
    <div id="sidebar-menu">
        <ul id="side-menu" class="metismenu">
            <li>
                <a href="#" @click.prevent="handleRoute('/dashboard')">
                    <i class="mdi mdi-view-dashboard"/>
                    <span>Dashboard</span>
                </a>
            </li>

            <li>
                <a href="#" @click.prevent="handleRoute('/calendar')">
                  <span class="badge badge-danger rounded-circle bedz float-right">3</span>
                    <i class="fas fa-calendar-alt"/>
                    <span>Calendar</span>
                </a>
            </li>

            <li>
                <a href="#" @click.prevent="handleRoute('/todos')">
                  <span class="badge badge-danger rounded-circle roun float-right">4</span>
                    <i class="fas fa-tasks"/>
                    <span>To-dos</span>
                </a>
            </li>

            <li>
                <a href="#" @click.prevent="handleRoute('/calls')">
                  <span class="badge badge-danger rounded-circle roun float-right">2</span>
                    <i class="fas fa-phone"/>
                    <span>Calls</span>
                </a>
            </li>

            <li>
                <a href="#" @click.prevent="handleRoute('/contacts')">
                  <i class="mdi mdi-contacts"/>
                    <span>Contacts</span>
                </a>
            </li>

            <li>
                <a href="javascript: void(0);">
                    <i class="fas fa-file-invoice-dollar"/>
                    <span>Billing</span>
                    <span class="menu-arrow"/>
                </a>
                <ul class="nav-second-level" aria-expanded="false">
                    <li><a href="#" @click.prevent="handleRoute('/billing')">Billing</a></li>
                    <li><a href="#" @click.prevent="handleRoute('/invoices')">Invoices</a></li>
                </ul>
            </li>

            <li>
                <a href="javascript: void(0);">
                    <i class="fas fa-cog"/>
                    <span>Settings</span>
                    <span class="menu-arrow"/>
                </a>
                <ul class="nav-second-level" aria-expanded="false">
                    <li><a href="#" @click.prevent="handleRoute('/team')">Team</a></li>
                    <li><a href="#" @click.prevent="handleRoute('/plans')">Plans</a></li>
                    <li><a href="#" @click.prevent="handleRoute('/types')">Call types</a></li>
                    <li><a href="#" @click.prevent="handleRoute('/faqs')">Business FAQs</a></li>
                    <li><a href="#" @click.prevent="handleRoute('/tour')">Tour</a></li>
                    <li><a href="#" @click.prevent="handleRoute('/account')">Account</a></li>
                </ul>
            </li>

            <li>
                <a href="javascript: void(0);">
                    <i class="mdi mdi-dots-horizontal"/>
                    <span>More</span>
                    <span class="menu-arrow"/>
                </a>
                <ul class="nav-second-level" aria-expanded="false">
                    <li><a href="#" @click.prevent="handleRoute('/reports')">Reports</a></li>
                    <li><a href="#" @click.prevent="handleRoute('/integrations')">Integrations</a></li>
                </ul>
            </li>

            <li>
                <a href="typography.html">
                  <i class="fas fa-sign-out-alt"/>
                  <span>Logout</span>
                </a>
            </li>

            <li id="tour">
                <a href="#" @click.prevent="handleRoute('/tour')">
                  <img src="assets/images/Tour.png">
                  <span>Tour</span>
                </a>
            </li>
        </ul>


    </div>
    <!-- End Sidebar -->
    <div class="welcome-back">
      Welcome back,<br><span class="company-name">ACME Inc</span>
    </div>
  </div>
</template>

<script>
import { authComputed } from '@/store/helpers'

import MetisMenu from 'metismenujs/dist/metismenujs'

export default {
  components: {},
  props: {
    user: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  computed: {
    ...authComputed
  },
  mounted: function() {
    // eslint-disable-next-line no-unused-vars
    var menuRef = new MetisMenu('#side-menu')
  },
  methods: {
    handleRoute (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss">
@import '~metismenujs/scss/metismenujs';
</style>

<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/Accounts">
        <md-icon>work</md-icon>
        <p>Researcher Accounts</p>
      </sidebar-link>
      <sidebar-link to="add">
        <md-icon>person_add</md-icon>
        <p>Add Account</p>
      </sidebar-link>
      <sidebar-link to="/profile">
        <md-icon>person</md-icon>
        <p>Profile</p>
      </sidebar-link>

    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content>

      </dashboard-content>

    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    MobileMenu
  }
}
</script>

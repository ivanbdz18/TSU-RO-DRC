<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-80">
        <add-account-form class="md-body-2" data-background-color="orange">

        </add-account-form>
      </div>
    </div>
  </div>
</template>
<style>
.md-menu-content{
  max-width: 350px !important;
}
</style>
<script>
import {
  AddAccountForm
} from '@/pages'

export default{
  components: {
    AddAccountForm
  }
}
</script>

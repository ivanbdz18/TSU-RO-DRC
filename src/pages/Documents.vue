<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Research Documents</h4>
          </md-card-header>
          <md-card-content class="md-body-2">
            <documents-table class="md-body-2" table-header-color="orange"></documents-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>
<style>
 .md-table-head-label {
   font-weight: 400;
 }
</style>

<script>
import {
  DocumentsTable
} from '@/components'

export default{
  components: {
    DocumentsTable
  },
  data () {
    return {

    }
  }
}
</script>

<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Ingoing Research from Faculty Researcher</h4>
            <p class="category">List of Documents</p>
          </md-card-header>
          <md-card-content>
            <res-from-fr class="md-body-2" table-header-color="orange"></res-from-fr>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Ingoing Research from CREC</h4>
            <p class="category">List of Documents</p>
          </md-card-header>
          <md-card-content>
            <res-from-crec class="md-body-2" table-header-color="orange"></res-from-crec>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ResFromFr,
  ResFromCrec
} from '@/components'

export default{
  components: {
    ResFromFr,
    ResFromCrec
  },
  data () {
    return {

    }
  }
}
</script>

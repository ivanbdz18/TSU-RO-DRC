<template>
  <div class="content">
    <div class="md-layout">
       <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Outgoing Research proceeding to Faculty Researcher</h4>
            <p class="category">List of Documents</p>
          </md-card-header>
          <md-card-content>
            <drc-to-fr1 class="md-body-2" table-header-color="orange"></drc-to-fr1>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Outgoing Research proceeding to Faculty Researcher</h4>
            <p class="category">List of Documents</p>
          </md-card-header>
          <md-card-content>
            <drc-to-fr2 class="md-body-2" table-header-color="orange"></drc-to-fr2>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  DrcToFr2,
  DrcToFr1
} from '@/components'

export default{
  components: {
    DrcToFr1,
    DrcToFr2
  },
  data () {
    return {

    }
  }
}
</script>

<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Information Technology Department</h4>
            <p class="category">List of Faculty Researchers</p>
          </md-card-header>
          <md-card-content>
            <it-department class="md-body-2" table-header-color="orange"></it-department>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Computer Science Department</h4>
            <p class="category">List of Faculty Researchers</p>
          </md-card-header>
          <md-card-content>
            <cs-department class="md-body-2" table-header-color="orange"></cs-department>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Information System Department</h4>
            <p class="category">List of Faculty Researchers</p>
          </md-card-header>
          <md-card-content>
            <is-department   class="md-body-2" table-header-color="orange"></is-department>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ItDepartment,
  CsDepartment,
  IsDepartment
} from '@/components'

export default{
  components: {
    ItDepartment,
    CsDepartment,
    IsDepartment
  },
  data () {
    return {
    }
  }
}
</script>

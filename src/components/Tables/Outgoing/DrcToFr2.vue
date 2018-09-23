<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row class="md-body-2" slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.time_date }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Grade in Colloquium"><md-field>
              <label>Input Grade</label>
              <md-input v-model="item.gradeUrec" type="text"></md-input>
          </md-field>
        </md-table-cell>
        <md-table-cell md-label="Action">
          <md-button to="/comment" class="md-raised md-success">Comment</md-button>
          <md-button class="md-raised md-success">Proceed</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'drc-to-fr2',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      users: [
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null,
          gradeIn: null,
          incentive: null,
          univAgenda: null
        },
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null,
          gradeIn: null,
          incentive: null,
          univAgenda: null
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID Number">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name + item.name2 + item.name3 }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Contact Number">{{ item.number }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button  class="md-just-icon md-simple md-primary">
            <md-icon>delete_forever</md-icon>
            <md-tooltip md-direction="bottom">Delete</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'it-department',
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
          id: 2015102651,
          name: 'ivan',
          name2: ' david',
          name3: ' badbaden',
          email: 'ivanbadbaden@gmail.com',
          number: '09773798525'
        }
      ]
    }
  }
}
</script>

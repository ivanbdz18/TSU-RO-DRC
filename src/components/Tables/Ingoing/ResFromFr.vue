<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
        <md-table-cell md-label="User ID">{{ item.userId }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Author">{{ item.author }}</md-table-cell>
        <md-table-cell md-label="Action">
            <md-button class="md-raised md-success">Recieve</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'res-from-fr',
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
          posted: '01/01/2018 12:30pm',
          userId: '1001',
          title: 'Faculty Research Tracking Sytem',
          author: 'Ivan Badbaden, Anjeanette Francia'
        },
        {
          posted: '01/01/2018 12:51pm',
          userId: '1002',
          title: 'Faculty Research Management Sytem',
          author: 'Nomar Lapitan, Michelle Quibuyen'
        }
      ]
    }
  }
}
</script>

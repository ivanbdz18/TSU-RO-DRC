<template>
  <div>
    <md-dialog-confirm
      :md-active.sync="active"
      md-title="Do You Really Want To Update/Replace?"
      md-content="Replacing the current file."
      md-confirm-text="Yes"
      md-cancel-text="No"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Track No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Author">{{ item.author }}</md-table-cell>
        <md-table-cell md-label="Track Document">
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>get_app</md-icon>
            <md-tooltip md-direction="top">Download</md-tooltip>
          </md-button>
          <md-button to="tracking" class="md-just-icon md-simple md-primary">
            <md-icon>remove_red_eye</md-icon>
            <md-tooltip md-direction="bottom">Track Document</md-tooltip>
          </md-button>
        </md-table-cell>
        <!-- <md-table-cell md-label="Action">
          <md-button class="md-raised md-primary" @click="active = true">Update</md-button>
          <md-button class="md-raised md-success" to="/progreport">Progress Report
            <md-tooltip md-direction="bottom">Upload Progress Report</md-tooltip>
          </md-button>
        </md-table-cell> -->
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'documents-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: false,
      selected: [],
      users: [
        {
          tracking_number: '86ss6263-6d9f-543b',
          title: 'Dynamic Embedding and Speculation: A Cointegration Analysis of Food Prices ',
          author: 'Aries Sim, Jay Pasco'
        },
        {
          tracking_number: '80cd9201-7e2e-457b',
          title: 'Statistical Arbitrage Strategies and Profit Potential in Commodity Futures Market',
          author: 'Vanessa Vivas, Raymond Castro'
        },
        {
          tracking_number: '96sr6136-9s5f-541c',
          title: 'The Effect of Variety-Seeking in Store Choice on Brand Seeking',
          author: 'Hannah David, Marc Sembrano'
        },
        {
          tracking_number: '86kg4316-9g2r-460g',
          title: 'An Approach to Lending with Heterogeneous Borrowers',
          author: 'Jessica Sanchez, Maureen Solano'
        },
        {
          tracking_number: '92vo9133-4v8f-531j',
          title: 'Running Head: Pricing and Microfinance',
          author: 'Chantal Druja, Clei Dela Cruz'
        },
        {
          tracking_number: '86gl5463-9f9g-541f',
          title: 'The American Dream—Deferred',
          author: 'Alex Concha, Jessa Davis'
        }
      ]
    }
  },
  methods: {
    onConfirm () {
      this.value = 'Agreed'
    },
    onCancel () {
      this.value = 'Disagreed'
    }
  }
}
</script>

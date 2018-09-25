<template>
  <div>
    <md-table v-model="documentsState2" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.received }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Authors">{{ item.authors }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>get_app</md-icon>
            <md-tooltip md-direction="top">Download</md-tooltip>
          </md-button>
          <md-button class="md-raised md-success" :to="`/comment?document=${item.id}&state=2`">Comment</md-button>
          <md-button class="md-raised md-success" @click.native="proceed(item.id)">Proceed</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'drc-to-fr1',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      documents: [],
      documentsState2: [
        {
          received: '04:12:15 07/28/18',
          tracking_number: '62kd6267-9q6r-216f',
          title: 'Tabulation for WOD Competition',
          authors: 'Abegail Mendoza, Miguel Bacong'
        },
        {
          received: '05:45:18 08/11/18',
          tracking_number: '90gh9562-5e4d-217r',
          title: 'FoodHub: An online food store tracker',
          authors: 'Vhong Torres. Angelina Dela Torre'
        },
        {
          received: '10:30:02 04/15/18',
          tracking_number: '84ip6484-3j0s-123pj',
          title: 'Evaluating the Impact of Supply-side Factors on Conditional Cash Transfer Programs: The Case of Nicaragua ',
          authors: 'Kevin Morales, Justine Yusi'
        }
      ]
    }
  },
  created: async function () {
    await this.getDocuments()
  },
  methods: {
    proceed: async function (documentId) {
      const rootApi = process.env.VUE_APP_ROOT_API
      await axios.post(`${rootApi}/documents/${documentId}/release`)
      await this.getDocuments()
    },
    getDocuments: async function () {
      const rootApi = process.env.VUE_APP_ROOT_API
      this.documents = (await axios.get(`${rootApi}/documents`)).data
      this.documentsState2 = this.documents.filter(d => d.state === 2 && d.received !== null)
    }
  }
}
</script>

<template>
  <div>
    <md-table v-model="documentsState2" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Posted">{{ item.prev_release }}</md-table-cell>
        <md-table-cell md-label="Tracking number">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Author">{{ item.author }}</md-table-cell>
        <md-table-cell md-label="Action">
            <md-button class="md-raised md-success" @click.native="receiveDocument(item.id)">Recieve</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'

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
      documents: [],
      documentsState2: [
        {
          prev_release: '05:56:15 08/11/18',
          tracking_number: '92jf4613-61d3-f3db',
          title: 'POS for Urdu Restaurant and Catering',
          authors: 'Sheena Abejura. Mika Salamanca'
        },
        {
          prev_release: '05:45:18 08/11/18',
          tracking_number: '90gh9562-5e4d-217r',
          title: 'FoodHub: An online food store tracker',
          authors: 'Vhong Torres. Angelina Dela Torre'
        },
        {
          prev_release: '04:12:15 07/28/18',
          tracking_number: '62kd6267-9q6r-216f',
          title: 'Tabulation for WOD Competition',
          authors: 'Abegail Mendoza, Miguel Bacong'
        }
      ]
    }
  },
  created: async function () {
    await this.getDocuments()
  },
  methods: {
    getDocuments: async function () {
      const rootApi = process.env.VUE_APP_ROOT_API
      this.documents = (await axios.get(`${rootApi}/documents`)).data
      this.documentsState2 = this.documents.filter(d => d.state === 2 && d.received === null)
    },
    receiveDocument: async function (documentId) {
      const rootApi = process.env.VUE_APP_ROOT_API
      await axios.post(`${rootApi}/documents/${documentId}/receive`)
      await this.getDocuments()
    }
  }
}
</script>

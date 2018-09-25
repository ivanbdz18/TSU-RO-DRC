<template>
  <div>
    <md-table v-model="documentsState5" :table-header-color="tableHeaderColor">
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
  name: 'res-from-crec',
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
      documentsState5: [
        {
          prev_release: '05:28:15 08/15/18',
          tracking_number: '86kv8621-9f3e-s46b',
          title: 'Antitrust Law and the Promotion of Democracy and Economic Growth',
          authors: 'Sheena Abejura. Mika Salamanca'
        },
        {
          prev_release: '05:26:15 08/15/18',
          tracking_number: '62jg3453-5f1d-643b',
          title: 'An Analysis of Keynesian Economics',
          authors: 'Vhong Torres. Abgelina Dela Torre'
        },
        {
          prev_release: '05:12:15 07/25/18',
          tracking_number: '62kd6267-9q6r-216f',
          title: 'Who Will Pay to Reduce Global Warming?  A Multivariate Analysis of Concern, Efficacy, and Action',
          authors: 'Vhong Torres. Abgelina Dela Torre'
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
      this.documentsState5 = this.documents.filter(d => d.state === 5 && d.received === null)
    },
    receiveDocument: async function (documentId) {
      const rootApi = process.env.VUE_APP_ROOT_API
      await axios.post(`${rootApi}/documents/${documentId}/receive`)
      await this.getDocuments()
    }
  }
}
</script>

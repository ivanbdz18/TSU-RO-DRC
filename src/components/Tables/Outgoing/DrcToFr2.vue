<template>
  <div>
    <md-table v-model="documentsState5" :table-header-color="tableHeaderColor">
      <md-table-row class="md-body-2" slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.received }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Authors">{{ item.authors }}</md-table-cell>
        <md-table-cell md-label="Grade in Colloquium">
          <md-field>
              <label>Input Grade</label>
              <md-input v-model="item.gradeUrec" type="text"></md-input>
          </md-field>
        </md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>get_app</md-icon>
            <md-tooltip md-direction="top">Download</md-tooltip>
          </md-button>
          <md-button class="md-raised md-success" :to="`/comment?document=${item.id}&state=5`">Comment</md-button>
          <md-button class="md-raised md-success" @click.native="proceed(item.id)">Proceed</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'

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
      documents: [],
      documentsState5: [
        {
          received: '04:15:46 08/28/18',
          tracking_number: '54sa4613-8s5r-216f',
          title: 'POS fo Urban Brew Cafe',
          authors: 'Michelle Turato, Isaiah Cruz'
        },
        {
          received: '05:45:18 08/11/18',
          tracking_number: '90gh9562-5e4d-217r',
          title: 'Online Canvassing System for Tarlac',
          authors: 'Shaira Muncda'
        },
        {
          received: '10:30:02 07/15/18',
          tracking_number: '45sd5431-6s2f-123pj',
          title: 'Online Selling for TSU Stuents',
          authors: 'Barbara Manabat'
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
      this.documentsState5 = this.documents.filter(d => d.state === 5 && d.received !== null)
    }
  }
}
</script>

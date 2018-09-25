<template>
  <form>
    <md-card>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Message / Comment:</label>
              <md-textarea v-model="message"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label for="form">Form Type</label>
              <md-select v-model="forms" name="forms" id="forms">
                <md-option value="SF-30">SF-10</md-option>
                <md-option value="SF-30">SF-20</md-option>
                <md-option value="SF-30">SF-30</md-option>
                <md-option value="SF-30">SF-40</md-option>
                <md-option value="SF-30">SF-50</md-option>
                <md-option value="SF-30">SF-60</md-option>
                <md-option value="SF-30">SF-70</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-input type="file" name="datafile" class="md-raised md-success"></md-input>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-primary">Send</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: 'edit-request-form',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      message: ''
    }
  }
}

</script>

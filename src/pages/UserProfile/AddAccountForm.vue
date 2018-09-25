<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Add Researcher</h4>
        <p class="category">Complete the profile</p>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>ID Number</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label for="college">College and Department</label>
              <md-select v-model="department_college" name="college" id="college">
                <md-option value="CCS - Information Technology Department">CCS - Information Technology Department</md-option>
                <md-option value="CCS - Computer Science Department">CCS - Computer Science Department</md-option>
                <md-option value="CCS - Information System Department">CCS - Information System Department</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>First Name</label>
              <md-input v-model="firstname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Middle Name</label>
              <md-input v-model="middlename" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Last Name</label>
              <md-input v-model="lastname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Email</label>
              <md-input v-model="address" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Contact Number</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label for="college">User Type</label>
              <md-select v-model="usert_type" name="user type" id="user type">
                <md-option value="Faculty Researcher">Faculty Researcher</md-option>
                <md-option value="Department Research Chairperson">Department Research Chairperson</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Add Account</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: 'add-account-form',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      username: null,
      lastname: null,
      firstname: null,
      middlename: null,
      college: 'College of Computer Studies',
      user_type: 'Faculty Researcher'
    }
  }
}

</script>
<style>

</style>

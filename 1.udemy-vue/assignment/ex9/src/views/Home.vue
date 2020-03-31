<template>
  <div class="container">

    <!-- Exercise 2 -->
    <!-- Only display the Form if it has NOT been submitted -->
    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
    <form v-if="userFormSubmitted === false">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
          <full-name v-model="userDetails.fullName"></full-name>

          <!-- Mail -->
          <div class="form-group">
            <label>Mail</label>
            <input type="text" class="form-control" v-model="userDetails.mail">
          </div>
          <!-- Password -->
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="userDetails.password">
          </div>
          <!-- Store Data? Yes/No -->
          <div class="form-group">
            <label>
              <input type="radio" value="Yes" v-model="store_in_database"> Yes
            </label>
            <label>
              <input type="radio" value="No" v-model="store_in_database"> No
            </label>
          </div>
          <div class="form-group">
            <button
              class="btn btn-primary"
              @click="userFormSubmitted = true"
            >Submit</button>
          </div>

        </div>
      </div>
    </form>
    <div class="row" v-else>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userDetails.fullName }}</p>
            <p>Mail: {{ userDetails.mail }}</p>
            <p>Password: {{ userDetails.password }}</p>
            <p>Store in Database?: {{ store_in_database }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from '@/components/FullName.vue';

export default {
  data() {
    return {
      userDetails: {
        fullName: {
          firstName: '',
          lastName: '',
        },
        mail: '',
        password: '',
      },
      store_in_database: 'No',
      userFormSubmitted: false,
    };
  },
  components: {
    FullName,
  },
};
</script>

<template>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"
             v-model="value.firstName">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"
             v-model="value.lastName">
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'value',
  ],
};
</script>

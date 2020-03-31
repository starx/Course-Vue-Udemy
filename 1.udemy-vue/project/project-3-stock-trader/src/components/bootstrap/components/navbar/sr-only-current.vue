<template>
  <span v-if="$route.name === expectedRouteName" class="sr-only">(current)</span>
</template>

<script>
export default {
  props: [
    'expectedRouteName',
  ],
};
</script>

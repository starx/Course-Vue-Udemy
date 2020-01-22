<template>
  <li
    class="list-group-item"
    @click="$emit('serverSelected', id)"
  >
    Server #{{ id }}: {{ status }}
  </li>
</template>

<script>
export default {
  props: {
    id: Number,
    status: String,
  },
};
</script>

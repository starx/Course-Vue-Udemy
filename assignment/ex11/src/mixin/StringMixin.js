export default {
  data() {
    return {
      bValue: 'Bye world!',
    };
  },
  computed: {
    computedReverseBValue() {
      return this.bValue.split('').reverse().join('');
    },
    computedBAppendCount() {
      return `${this.bValue} (${this.bValue.length})`;
    },
  },
};

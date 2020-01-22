<template>
  <div class="col-12 col-sm-6 col-md-4">
    <div class="card text-left mb-3" style="max-width: 18rem;">
      <div class="card-header text-white bg-success">
        {{ stock.name }}
        <small>(Price: {{ stock.price | currency }})</small>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            type="number"
            class="form-control"
            :class="{ danger: insufficientFunds }"
            placeholder="Quantity"
            v-model.number="quantity"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success btn-outline-dark text-white"
            @click="buyStock"
            :disabled="
              insufficientFunds
              || quantity <= 0
              || !Number.isInteger(quantity)
            ">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters['portfolio/funds'];
    },
    insufficientFunds() {
      return (this.quantity * this.stock.price) > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log('Buying: ', order);
      this.$store.dispatch('stocks/buyStock', order);
      // Reset the input
      this.quantity = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
  input {
    &[type='number'] {
      width: 100px;
    }
    &.danger {
      border-color: red;
    }
  }
</style>

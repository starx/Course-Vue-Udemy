<template>
  <div class="col-12 col-sm-6 col-md-4">
    <div class="card text-left mb-3" style="max-width: 18rem;">
      <div class="card-header text-white bg-info">
        {{ stock.name }}
        <small>(Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }})</small>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            type="number"
            class="form-control"
            :class="{danger: insufficientQuantity }"
            placeholder="Quantity"
            v-model.number="quantity"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-info btn-outline-dark text-white"
            @click="sellStock"
            :disabled="quantity <= 0 || !Number.isInteger(quantity) || insufficientQuantity "
          >Sell</button>
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
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log('Selling: ', order);
      this.$store.dispatch('portfolio/sellStock', order);
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

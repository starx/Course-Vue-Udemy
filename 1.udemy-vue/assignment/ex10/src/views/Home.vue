<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-sm-8 com-dh-6">
        <h1>Directive Exercise</h1>
        <!-- Exercise -->
        <button v-myon:click="runThisFunction">Fantastic button</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  directives: {
    myon: {
      bind(el, binding) {
        switch (binding.arg) {
          case 'click':
            // let fnName = binding.value;

            el.addEventListener('click', binding.value);
            break;
          default:
            console.error('Not supported');
            break;
        }
      },
    },
  },
  methods: {
    runThisFunction() {
      console.log('ran this function');
    },
  },
  components: {
  },
};
</script>

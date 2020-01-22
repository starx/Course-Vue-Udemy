<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>
          <!-- Exercise 1) -->
          <!-- Build a local Filter which reverses the Text it is applied on -->
          {{ aValue | reverseString }}
        </p>


        <p>
          <!-- Exercise 2 -->
          <!-- Build a global Filter which counts the length of a word and it appends it -->
          <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
          {{ aValue | appendCount }}
        </p>

        <p>
          <!-- Exercise 3 -->
          <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
          {{ computedReverseAValue }}
          <br/>
          {{ computedAppendCount }}
        </p>

        <p>
          <!-- Exercise 4 -->
          <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
          {{ computedReverseBValue }}
          <br/>
          {{ computedBAppendCount }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StringMixin from '../mixin/StringMixin';

export default {
  name: 'home',
  mixins: [StringMixin],
  filters: {
    reverseString(value) {
      return value.split('').reverse().join('');
    },
  },
  data() {
    return {
      aValue: 'Hello world!',
    };
  },
  computed: {
    computedReverseAValue() {
      return this.aValue.split('').reverse().join('');
    },
    computedAppendCount() {
      return `${this.aValue} (${this.aValue.length})`;
    },
  },
  methods: {
  },
};
</script>

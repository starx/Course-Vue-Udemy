<template>
  <div class="row">
    <div class="col-12">
      <header>
        <h1>Wonderful quotes</h1>
      </header>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :aria-valuenow="quoteCount"
          aria-valuemin="0"
          :aria-valuemax="maxQuotes"
          :style="{ width: (quoteCount / maxQuotes) * 100 + '%'}">
            {{ quoteCount }} / {{ maxQuotes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['quoteCount', 'maxQuotes'],
};
</script>

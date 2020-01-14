<template>
  <div class="container">
    <Header></Header>
    <hr>
    <new-quote @quoteAdded="addQuote"></new-quote>
    <quote-grid :quotes="quotes"></quote-grid>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import NewQuote from '@/components/NewQuote.vue';
import QuoteGrid from '@/components/QuoteGrid.vue';

export default {
  name: 'home',
  data() {
    return {
      quotes: [
        'Just a quote to see something',
      ],
      maxQuotes: 10,
    };
  },
  computed: {
  },
  methods: {
    addQuote(quote) {
      this.quotes.push(quote);
    },
  },
  components: {
    Header,
    Footer,
    NewQuote,
    QuoteGrid,
  },
};
</script>

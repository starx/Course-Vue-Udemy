<template>
  <div class="container">
    <Header
      :quoteCount="quotes.length"
      :maxQuotes="maxQuotes"
    ></Header>
    <hr>
    <new-quote @quoteAdded="addQuote"></new-quote>
    <quote-grid
      @quoteDeleted="deleteQuote"
      :quotes="quotes"></quote-grid>
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
      maxQuotes: 2,
    };
  },
  computed: {
  },
  methods: {
    addQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        alert('Please delete quote first');
      } else {
        this.quotes.push(quote);
      }
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
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

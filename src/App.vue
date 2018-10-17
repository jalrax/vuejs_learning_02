<template>
  <div id="app" class="container">
    <Header :quotesCount="quotes.length" :maxQuotes="maxQuotes"></Header>
    <NewQuote @quoteAdded="newQuote"></NewQuote>
    <QuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"></QuoteGrid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info margin-top">Info: Click on a Quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from '../src/components/QuoteGrid';
  import NewQuote from '../src/components/NewQuote';
  import Header from '../src/components/Header';

  export default {
    data() {
      return {
        quotes: [
          'Just a sting to see something',
        ],
        maxQuotes: 10,
      };
    },
    methods: {
      newQuote(quote) {
        if (this.quotes.length >= this.maxQuotes) {
          return alert('Please delete quotes first!');
        }
        !!quote ? this.quotes.push(quote) : alert('Please enter quote first!');
      },
      deleteQuote(i) {
        this.quotes.splice(i, 1);
      },
    },
    components: {
      QuoteGrid,
      NewQuote,
      Header,
    },
  };
</script>

<style scoped>
  .margin-top {
    margin-top: 15px;
  }
</style>

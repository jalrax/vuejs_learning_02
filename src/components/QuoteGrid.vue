<template>
  <div class="row">
    <Quote v-for="(quote, i) in quotes" @click.native="deleteQuote(i)">{{ quote }}</Quote>
  </div>
</template>

<script>
  import Quote from '../components/Quote';

  export default {
    props: ['quotes'],
    components: {
      Quote,
    },
    methods: {
      deleteQuote(i) {
        this.$emit('quoteDeleted', i);
      },
    },
    name: 'QuoteGrid',
  };
</script>

<style scoped>

</style>
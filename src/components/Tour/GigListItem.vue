<template>
  <div class="list-item">
    <p class="info">{{prettyDate(date)}}</p>
    <p class="dots">.....................................................</p>
    <p class="info">{{city}}, {{state}}</p>
  </div>
</template>

<script>
export default {
  name: 'gigListItem',
  props: {
    date: Date,
    city: String,
    state: String,
  },
  methods: {
    prettyDate: date => `${date.toLocaleString('en-us', { month: 'short' })} ${date.getDate()}`,
  },
};
</script>


<style lang="scss" scoped>
  @import '@/assets/variables.scss';
  .list-item {
    display: flex;
    align-items: baseline;
    width: 100%;
    max-width: 650px;
    @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );

  }
  .info {
    padding: 10px 10px;
  }
  .dots {
    flex: 1;
    margin: 0px;
    font-size: 40px;
    overflow: hidden;
  }
</style>

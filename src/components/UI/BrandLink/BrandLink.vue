<template>
  <a
    v-if="hasUrl"
    :href="url" target="_blank"
    rel="noopener noreferrer"
    :aria-label="'Vist our ' + name + '!'"
  >
    <font-awesome-icon :icon="['fab', name]" size="1x" />
  </a>
</template>


<script>
export default {
  name: 'BrandLink',
  props: {
    url: String,
    name: String,
  },
  computed: {
    hasUrl() {
      return this.url !== null;
    },
  },
};
</script>


<style scoped lang="scss">
  @import '@/assets/variables.scss';
  svg:hover {
    color: $color-secondary;
  }
  @media (min-width: $break-point) {
    .fa-1x {
      font-size: 2em;
    }
  }
</style>

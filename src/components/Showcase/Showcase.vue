<template>
  <div class="container showcase">
    <div class="header">
      <h1 v-if="showcase.isVideo">Watch NOW</h1>
      <h1 v-if="!showcase.isVideo">Listen NOW</h1>
      <h1>{{showcase.description}}</h1>
    </div>
<!-- Video Frame START -->
    <div class="iframe-container" v-if="showcase.isVideo">
      <Spinner/>
      <iframe
        rel="preconnect"
        width='760'
        height='515'
        :src='this.embededUrl'
        :title="showcase.description"
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen>
      </iframe>
    </div>
<!-- Video Frame END -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Spinner from '../UI/Spinner/Spinner.vue';


export default {
  name: 'showcase',
  components: {
    Spinner,
  },
  computed: {
    embededUrl() {
      return this.showcase.url.replace('watch?v=', 'embed/');
    },
    ...mapState({
      showcase: state => state.showcase,
    }),
  },
};
</script>


<style lang="scss" scoped>
@import '@/assets/variables.scss';
  .header h1{
    margin: 5px 0px;
    @include fluid-type($min-width, $max-width, $min-header-font, $max-header-font );
  }
  .showcase {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    iframe {
      margin-top: 5px;
      max-width: 100vw;
      max-height: 56.25vw;
      box-sizing: border-box;
      border: 3px solid $color-primary;
    }
    .iframe-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .fulfilling-bouncing-circle-spinner {
        position: absolute;
        z-index: -1;
      }
    }
  }

  @media(min-width: $break-point) {
  }
</style>

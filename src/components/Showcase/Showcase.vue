<template>
  <div class="container showcase">
    <div class="header">
      <h1 v-if="showcase.url">Watch NOW</h1>
      <h1>{{showcase.description}}</h1>
    </div>
<!-- Video Frame START -->
    <div class="iframe-container" v-if="showcase.url">
      <Spinner/>
      <iframe
        defer
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
import Spinner from '../UI/Spinner/Spinner.vue';
import { GET_SHOWCASE } from '../../queries';


export default {
  name: 'showcase',
  components: {
    Spinner,
  },
  apollo: {
    $loadingKey: 'loading',
    showcases: {
      query: GET_SHOWCASE,
      variables: { where: { onDisplay: true } },
    },
  },
  computed: {
    embededUrl() {
      return this.showcase.url.replace('watch?v=', 'embed/');
    },
    showcase() {
      return this.showcases ? this.showcases[0] : {};
    },
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
    .showcase {
      margin-top: 5vh;
    }
  }
</style>

<template>
  <div class="container showcase">
    <div class="header">
      <h1 v-if="showcase.url">Watch NOW</h1>
      <h1>{{showcase.description}}</h1>
    </div>
    <!-- Video Frame START -->
    <div class="iframe-container" v-if="showcase.url">
      <LoadingSpinner />
      <iframe
        defer
        width='760'
        height='515'
        :src='embededUrl'
        :title="showcase.description"
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen />
    </div>
    <!-- Video Frame END -->
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import LoadingSpinner from '../UI/Spinner/Spinner.vue';
import { GET_SHOWCASE } from '../../queries';

const { result } = useQuery(GET_SHOWCASE, { where: { onDisplay: true } });
const showcase = computed(() => result.value?.showcases?.[0] ?? {});
const embededUrl = computed(() => showcase.value.url.replace('watch?v=', 'embed/'));
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;
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

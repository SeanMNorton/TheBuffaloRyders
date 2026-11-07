<template>
  <div class="footer">
    <div class="container">
      <router-link to="/"><h2>- The Buffalo Ryders -</h2></router-link>
      <div>
        <a class='press-kit-link' v-if="download" target="_blank" rel="noopener noreferrer" :href="download.file.url">
          <h2>- press kit -</h2>
        </a>
        <h3>Booking@buffaloryders.com</h3>
      </div>
      <div class="brands">
        <BrandLink
          :key="url.siteName"
          v-for="url in urls"
          :url="url.url"
          :name="url.siteName"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_PRESS_KIT, GET_URLS } from '../../queries';
import BrandLink from '../UI/BrandLink/BrandLink.vue';

const { result: urlsResult } = useQuery(GET_URLS);
const { result: downloadResult } = useQuery(GET_PRESS_KIT);
const urls = computed(() => urlsResult.value?.urls);
const download = computed(() => downloadResult.value?.download);
</script>

<style scoped lang="scss">
    @use '@/assets/variables.scss' as *;
    h2 {
      text-align: center;
      margin: 5px 0px;
      @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
    }
    .footer {
      padding: 0px 20px;
      width: 100vw;
      min-height: 50px;
      background-color: $color-background-lighter;
      box-sizing: border-box;
    }
    .container {
      display: flex;
      margin: auto auto;
      min-height: 50px;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      padding: 2vh 0vh;
    }
    .brands {
      display: flex;
    }
    .brands > * {
      padding: 0 1vw;
    }
    .press-kit-link {
      width: 100%;
      margin-bottom: 10px;
    }
    @media (min-width: $break-point) {
      .container {
        justify-content: space-between;
      }
      .press-kit-link {
        width: unset;
        margin-bottom: unset;
      }
    }
</style>

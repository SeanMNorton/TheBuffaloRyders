<template>
  <div class="press">
    <div v-if="loading > 0">
      <h1  style="text-align: center; margin-top: 100px">Redirecting...</h1>
    </div>
  </div>
</template>


<script>
import { GET_PRESS_KIT } from '../queries';

export default {
  name: 'press',
  data() {
    return {
      loading: 0,
    };
  },
  watch: {
    loading() {
      window.location.href = this.download.file.url;
    },
  },
  apollo: {
    $loadingKey: 'loading',
    download: GET_PRESS_KIT,
  },
};
</script>

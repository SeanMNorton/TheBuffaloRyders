<template>
  <div class="press">
    <div v-if="loading">
      <h1 style="text-align: center; margin-top: 100px">Redirecting...</h1>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_PRESS_KIT } from '../queries';

const { result, loading } = useQuery(GET_PRESS_KIT);

// send the visitor straight to the press kit file once we know its url
watch(() => result.value?.download?.file?.url, (url) => {
  if (url) window.location.href = url;
});
</script>

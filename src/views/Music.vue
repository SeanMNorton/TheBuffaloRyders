<template>
  <div class="music">
    <MetaData v-if="metaDatas" :data="metaDatas[0]" />
    <h1 class="header" style="text-align: center">Music</h1>
    <div class="albums-container">
      <AlbumComponent :key="album.id" v-for="album in albums" :album="album" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import MetaData from '@/components/UI/MetaData/MetaData.vue';
import useMetaDatas from '../composables/useMetaDatas';
import { GET_ALBUMS } from '../queries';
import AlbumComponent from '../components/Albums/Album.vue';

const metaDatas = useMetaDatas('music');
const { result } = useQuery(GET_ALBUMS, { where: {}, orderBy: 'releaseDate_DESC' });
const albums = computed(() => result.value?.albums);
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;
.header {
  @include fluid-type($min-width, $max-width, $min-header-font, $max-header-font);
}

.albums-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 850px;
  margin: 0 auto;
}
@media (min-width: $break-point) {
  .header {
    display: none;
  }
  .albums-container {
    justify-content: space-around;
  }
}
</style>

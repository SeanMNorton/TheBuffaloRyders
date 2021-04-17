<template>
  <div class="music">
    <MetaData v-if="metaDatas" :data="metaDatas[0]" />
    <h1 class="header" style="text-align: center">Music</h1>
    <div class="albums-container">
      <Album :key="album.id" v-for="album in albums" :album="album" />
    </div>
  </div>
</template>

<script>
import { GET_ALBUMS, GET_METADATA } from "../queries";
import MetaData from "@/components/UI/MetaData/MetaData.vue";
import Album from "../components/Albums/Album.vue";

export default {
  name: "music",
  components: {
    Album,
    MetaData,
  },
  apollo: {
    $loadingKey: "loading",
    albums: {
      query: GET_ALBUMS,
      variables: { where: {}, orderBy: "releaseDate_DESC" },
    },
    metaDatas: {
      query: GET_METADATA,
      variables: { where: { page: "music" } },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
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

<template>
  <iframe
    width="280"
    height="280"
    title="Map of the venue"
    frameborder="0"
    style="border:0"
    :src="mapsURL"
    allowfullscreen />
</template>

<script>
export default {
  name: 'MapEmbed',
  props: {
    latitude: String,
    longitude: String,
    state: String,
    place: String,
    city: String,
  },

  computed: {
    mapsURL() {
      return `${'https://www.google.com/maps/embed/v1/search?q='
      + `${this.place},${this.city},${this.state}`
      + '&key='}${import.meta.env.VUE_APP_GOOGLE_MAPS_API_KEY}`;
    },
    // mapsURL() {
    //   return `${'https://www.google.com/maps/embed/v1/view?key='}${import.meta.env.VUE_APP_GOOGLE_MAPS_API_KEY}&center=${this.latitude},${this.longitude}`;
    // },
  },
};
</script>

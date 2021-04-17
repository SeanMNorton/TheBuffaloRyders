<template>
  <iframe
    width="280"
    height="280"
    frameborder="0"
    style="border:0"
    :src="mapsURL"
    allowfullscreen>
  </iframe>
</template>

<script>

export default {
  name: 'Map',
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
      + '&key='}${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}`;
    },
    // mapsURL() {
    //   return `${'https://www.google.com/maps/embed/v1/view?key='}${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}&center=${this.latitude},${this.longitude}`;
    // },
  },
};
</script>

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
    city: String,
    state: String,
    place: String,
  },

  computed: {
    mapsURL() {
      return `${'https://www.google.com/maps/embed/v1/search?q='
      + `${this.place},${this.city},${this.state}`
      + '&key='}${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}`;
    },
  },
};
</script>

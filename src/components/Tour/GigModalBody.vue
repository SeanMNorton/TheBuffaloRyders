<template>
  <div class="modal-body">
    <div id="map-box" class="map-box">
      <MapEmbed
        :city="gig.city"
        :place="gig.place"
        :state="gig.state"
      />
    </div>
    <div class="show-info">
      <p class="date">{{ prettyDate(new Date(gig.date)) }} @ {{ prettyTime(gig.date) }}</p>
      <p>
        Artist: <span class="info">{{ gig.artist }}</span>
      </p>
      <p>
        Venue: <span class="info">{{ gig.place }}, {{ gig.city }} {{ gig.state }}</span>
      </p>
      <p>
        Info: <span class="info">{{ gig.info }}</span>
      </p>
      <br />
      <a
        class="underline"
        v-if="gig.ticketsUrl"
        :href="gig.ticketsUrl"
        target="_blank"
        rel="noopener noreferrer">
        Get Tickets
      </a>
    </div>
  </div>
</template>

<script>
import MapEmbed from '../UI/Map/MapEmbed.vue';

export default {
  name: 'gigModalBody',
  components: {
    MapEmbed,
  },
  props: ['gig'],
  methods: {
    prettyDate: (date) => `${date.toLocaleString('en-us', { month: 'short' })} ${date.getUTCDate()}`,
    prettyTime(dateTime) {
      // convert time + 12 hours... not sure what's up with time objects from graphcms
      const time = new Date(dateTime).getTime();
      return `${new Date(time + 12 * 60 * 60 * 1000).toLocaleTimeString('en-US', { timeStyle: 'short' })}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;
.underline {
  text-decoration: underline;
}
.modal-body {
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
  @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font);
}
.map-box {
  width: 280px;
  height: 280px;
  border: 2px solid $color-primary;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  iframe {
    z-index: 200;
  }
  .fulfilling-bouncing-circle-spinner {
    position: absolute;
    z-index: 150;
  }
}
.show-info {
  margin-top: 30px;
}
.info {
  font-family: $secondary-font;
  letter-spacing: 0;
  font-weight: 300;
}

@media (min-width: $break-point) {
  .modal-body {
    flex-direction: row;
    justify-content: space-around;
  }
  .show-info {
    margin-top: none;
    max-width: 500px;
  }
}
</style>

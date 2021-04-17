<template>
  <div class="modal-body">
    <div id="map-box" class="map-box">
      <Spinner />
      <Map
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
        Venue: <span class="info">{{ gig.venue }}, {{ gig.city }} {{ gig.state }}</span>
      </p>
      <p>
        Info: <span class="info">{{ gig.info }}</span>
      </p>
      <br/>
      <a class="underline" v-if="gig.ticketsUrl" :href="gig.ticketsUrl">Get Tickets</a>
    </div>
  </div>
</template>

<script>
import Map from '../UI/Map/Map.vue';
import Spinner from '../UI/Spinner/Spinner.vue';

export default {
  name: 'gigModalBody',
  components: {
    Map,
    Spinner,
  },
  props: ['gig'],
  methods: {
    prettyDate: date => `${date.toLocaleString('en-us', { month: 'short' })} ${date.getUTCDate()}`,
    prettyTime: dateTime => `${new Date(dateTime).toLocaleTimeString('en-US', { timeStyle: 'short' })}`,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
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

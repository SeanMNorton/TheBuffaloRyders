<template>
  <div class="modal-body">
    <div id="map-box" class="map-box">
      <Map :place="gig.venue" :city="gig.city" :state="gig.state" />
    </div>
    <div class="show-info">
      <p class="date">{{prettyDate(gig.date)}} @ {{gig.time}}</p>
      <p>Artist: <span class='info'>{{gig.artist}}</span></p>
      <p>Venue: <span class='info'>{{gig.venue}}, {{gig.city}} {{gig.state}}</span></p>
      <p>Info: <span class='info'>{{gig.info}}</span></p>
    </div>
  </div>
</template>

<script>
import Map from '../UI/Map/Map.vue';

export default {
  name: 'gigModalBody',
  components: {
    Map,
  },
  props: ['gig'],
  methods: {
    prettyDate: date => `${date.toLocaleString('en-us', { month: 'short' })} ${date.getDate()}`,
  },
};
</script>


<style lang="scss" scoped>
  @import '@/assets/variables.scss';
  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50vh;
    @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
  }
  .map-box {
    width: 300px;
    height: 300px;
    border: 2px solid $color-primary;
  }
  .show-info {
    margin-top: 30px;
  }
  .info {
    font-family: $secondary-font;
    letter-spacing: 0;
    font-weight: 300;
  }

  @media( min-width: $break-point) {
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

<template>
  <div class="footer">
    <div class="container">
      <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
      <font-awesome-icon :icon="['fab', 'facebook']" size="2x"/>
      <h2>Book Now</h2>
      <font-awesome-icon :icon="['fab', 'youtube']" size="2x"/>
      <font-awesome-icon :icon="['fab', 'bandcamp']" size="2x"/>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Footer',
};
</script>


<style scoped lang="scss">
    @import '../../assets/variables.scss';
    .footer {
      padding: 0px 20px;
      width: 100vw;
      position: absolute;
      bottom: 0;
      min-height: 50px;
      background-color: lighten($color-black, 10%);
      box-sizing: border-box;
    }
    .container {
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      max-width: 800px;
    }
    svg:hover {
      color: $color-orange;
    }
</style>

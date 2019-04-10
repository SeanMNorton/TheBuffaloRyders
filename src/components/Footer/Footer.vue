<template>
  <div class="footer">
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
      width: 100vw;
      position: absolute;
      bottom: 0;
      min-height: 50px;
      background-color: lighten($color-black, 10%);
    }
</style>

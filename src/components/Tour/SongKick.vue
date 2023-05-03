<template>
  <div>
    <h1 class="gigs-header">FUTURE GIGS</h1>
    <a href="https://www.songkick.com/artists/5189358" class="songkick-widget" data-theme="dark" data-track-button="on" data-detect-style="on" data-background-color="#000000" data-font-color="#ffffff" data-locale="en" data-other-artists="on" data-share-button="on" data-country-filter="off"></a>
  </div>
</template>

<script>
export default {
  name: 'songkick',
  mounted() {
    let songKickScript = document.getElementById('song-kick-script');
    if (songKickScript) songKickScript.remove();

    songKickScript = document.createElement('script');
    songKickScript.setAttribute('src', '//widget-app.songkick.com/injector');
    songKickScript.setAttribute('id', 'song-kick-script');
    document.head.appendChild(songKickScript);
  },
};
</script>


<style lang="scss" scoped>
@import '@/assets/variables.scss';
  .gigs-header {
    margin-top: 40px;
    margin-bottom: 15px;
    @include fluid-type($min-width, $max-width, $min-header-font, $max-header-font );
    text-align: center;
  }
</style>

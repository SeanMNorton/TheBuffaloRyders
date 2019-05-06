<template>
  <div>
    <link href="https://assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />
    <ul class="juicer-feed" data-feed-id="the_buffalo_ryders_1">
      <h1 class="referral"><a href="https://www.juicer.io">Powered by Juicer</a></h1>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'instagram',
};
</script>

<style lang="scss">
  @import '@/assets/variables.scss';
  .juicer-feed {
    padding: 20px !important;
  }
  .juicer-feed h1.referral a {
    display: none !important;
  }
  .juicer-ad, .j-share  {
    display: none !important;
  }
  .j-overlay .j-close {
    height: 0px !important;
    top: 10px !important;
    right: 5px !important;
    color: $color-primary !important;
  }
  .j-overlay {
    color: white !important;
  }
  .feed-item {
    padding: none !important;
    .j-message {
      display: none !important;
    }
    .j-text {
      padding: 0px 15px 20px 20px !important;
    }
  }
  .j-overlay-content, .feed-item {
    border: none !important;
    background-color: $color-background-lighter !important;
    border-radius: $border-radius !important;
    color: white !important;
  }
  .j-poster h3 {
    color: white !important;
  }
  .j-poster {
    display: none !important;
  }
  .juicer-feed.modern .j-image img {
    border-radius: 8px 8px 0 0 !important;
  }
</style>

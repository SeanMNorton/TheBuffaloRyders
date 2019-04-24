<template>
 <transition name="fade">
    <div class="mask" @click="$emit('close')">
      <div class="wrapper">
        <div class="container" @click.stop>
          <div class="header">
              {{header}}
              <p class="default-button" @click="$emit('close')"> x </p>
          </div>
          <div class="body">
            <slot> </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: 'Modal',
  props: ['header'],
};
</script>

<style scoped lang="scss">
  @import '@/assets/variables.scss';
  .mask {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(49, 49, 49, 0.7);
    display: table;
    transition: opacity .3s ease;
  }

  .wrapper {
    width: 90vw;
    max-width: 850px;
    z-index: 1;
    position: relative;
    bottom: 0%;
    display: table-cell;
    vertical-align: middle;

  }

  .container {
    display: flex;
    flex-direction: column;
    max-width: 95vw;
    margin: 0px auto;
    padding: 10px 10px;
    max-height: 95vh;
    background-color: $color-background-lighter;
    border-radius: $border-radius;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    box-sizing: border-box;
    overflow: hidden;
  }
  .header {
    padding: 0px 1em;
    @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
  }
  .body {
    margin: 20px 0;
    overflow-y: auto;
  }

  .default-button {
    float: right;
    font-size: 1.2em;
    color: $color-primary;
    &:hover {
      color: $color-danger;
      cursor: pointer;
    }
  }

// Transitions
  .fade-enter {
    opacity: 0;
  }
  .fade-leave-active {
    opacity: 0;
  }
  .fade-enter .container,
  .fade-leave-active .container {
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }

// Media
  @media(min-height: 645px) {
    .modal-wrapper {
      bottom: 10%;
    }
  }

   @media(min-width: $break-point) {
    .modal-container {
      max-width: $break-point;
    }
  }

</style>

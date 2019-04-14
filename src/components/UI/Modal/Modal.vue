<template>
 <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
              {{header}}
              <p class="modal-default-button" @click="$emit('close')"> x </p>
          </div>
          <div class="modal-body">
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
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(49, 49, 49, 0.7);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    width: 90vw;
    max-width: 850px;
    z-index: 1;
    position: relative;
    bottom: 0%;
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    display: flex;
    flex-direction: column;
    max-width: 95vw;
    margin: 0px auto;
    padding: 10px 10px;
    background-color: $color-background-lighter;
    border-radius: $border-radius;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    box-sizing: border-box;
  }
  .modal-header {
    padding: 0px 1em;
    @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
  }
  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
    font-size: 1.2em;
    color: $color-primary;
    &:hover {
      color: $color-danger;
      cursor: pointer;
    }
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media(min-width: 350px) {
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

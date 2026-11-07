<template>
  <div>
    <button
      type="button"
      class="bm-burger-button"
      aria-label="Open menu"
      :aria-expanded="isOpen"
      @click="open"
    >
      <span class="bm-burger-bars line-style-1" />
      <span class="bm-burger-bars line-style-2" />
      <span class="bm-burger-bars line-style-3" />
    </button>
    <div class="bm-overlay" :class="{ open: isOpen }" @click="close" role="presentation" />
    <nav class="bm-menu" :class="{ open: isOpen }" :aria-hidden="!isOpen">
      <button type="button" class="bm-cross-button" aria-label="Close menu" @click="close">
        <span class="bm-cross" style="transform: rotate(45deg)" />
        <span class="bm-cross" style="transform: rotate(-45deg)" />
      </button>
      <div class="bm-item-list" @click="onItemClick">
        <slot />
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue';

const props = defineProps({
  closeOnNavigation: { type: Boolean, default: false },
});

const isOpen = ref(false);

function onKeydown(event) {
  if (event.key === 'Escape') {
    close();
  }
}

function open() {
  isOpen.value = true;
  document.addEventListener('keydown', onKeydown);
}

function close() {
  isOpen.value = false;
  document.removeEventListener('keydown', onKeydown);
}

function onItemClick(event) {
  if (props.closeOnNavigation && event.target.closest('a')) close();
}

onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown));
</script>

<style lang="scss">
// Class names mirror the old vue-burger-menu so Navigation.vue's overrides still apply.
// :where() keeps these defaults at zero specificity so overrides win.
:where(.bm-burger-button) {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  z-index: 1000;
}
:where(.bm-burger-bars) {
  position: absolute;
  display: block;
  height: 20%;
  left: 0;
  right: 0;
  background-color: #fff;
}
:where(.bm-burger-bars.line-style-1) { top: 0; }
:where(.bm-burger-bars.line-style-2) { top: 40%; }
:where(.bm-burger-bars.line-style-3) { top: 80%; }

:where(.bm-overlay) {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 999;
  &.open {
    opacity: 1;
    visibility: visible;
  }
}

:where(.bm-menu) {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  max-width: 100vw;
  height: 100%;
  background-color: #000;
  overflow: auto;
  transform: translate3d(-100%, 0, 0);
  visibility: hidden;
  transition: transform 0.3s, visibility 0.3s;
  z-index: 1000;
  &.open {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
}

:where(.bm-cross-button) {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}
:where(.bm-cross) {
  position: absolute;
  top: 0;
  left: 10px;
  width: 3px;
  height: 24px;
  background: #fff;
}

:where(.bm-item-list) {
  padding: 2.5em;
  a {
    display: block;
    padding: 0.8em;
    text-decoration: none;
  }
}
</style>

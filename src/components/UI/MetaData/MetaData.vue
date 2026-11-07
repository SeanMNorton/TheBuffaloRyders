<template>
  <div />
</template>

<script setup>
import { useHead } from '@unhead/vue';

const props = defineProps({
  data: { type: Object, required: true },
});

const imageUrl = () => `https://media.graphcms.com/compress/${props.data.image?.handle}`;

useHead(() => ({
  title: 'The Buffalo Ryders',
  meta: [
    { property: 'og:title', content: props.data.title },
    { property: 'og:description', content: props.data.description },
    { property: 'og:image', content: imageUrl() },
    { property: 'og:url', content: props.data.url },
    { name: 'twitter:title', content: props.data.title },
    { name: 'twitter:description', content: props.data.description },
    { name: 'twitter:image', content: imageUrl() },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
}));
</script>

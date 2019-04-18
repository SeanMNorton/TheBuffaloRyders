<template>
  <div></div>
</template>


<script>
export default {
  name: 'MetaData',
  props: ['data'],
  metaInfo() {
    return {
      title: 'The Buffalo Ryders',
      meta: [
        { name: 'og:title', content: this.data.title },
        { name: 'og:description', content: this.data.description },
        { name: 'og:image', content: `https://media.graphcms.com/compress/${this.data.image.handle}` },
        { name: 'og:url', content: this.data.url },
        { name: 'twitter:title', content: this.data.title },
        { name: 'twitter:description', content: this.data.description },
        { name: 'twitter:image', content: `https://media.graphcms.com/compress/${this.data.image.handle}` },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    };
  },
};
</script>

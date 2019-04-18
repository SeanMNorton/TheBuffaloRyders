<template>
  <div>
    <meta property="og:title" :content="data.title">
    <meta property="og:description" :content="data.description">
    <meta property="og:image" :content="'https://media.graphcms.com/resize=width:255/compress/'+data.image.handle">
    <meta property="og:url" :content="data.url">

    <meta name="twitter:title" :content="data.title">
    <meta name="twitter:description" :content="data.description">
    <meta name="twitter:image" :content="'https://media.graphcms.com/resize=width:255/compress/'+data.image.handle">
    <meta name="twitter:card" content="summary_large_image">
  </div>
</template>


<script>
export default {
  name: 'MetaData',
  props: ['data'],
};
</script>

<template>
  <div class="tour" @click="secret()">
    <GigList :isNew="true" :limit='25'/>
    <GigList :isNew="false" :limit='25'/>
  </div>
</template>


<script>
import GigList from '@/components/Tour/GigList.vue';

export default {
  name: 'tour',
  components: {
    GigList,
  },
  methods: {
    secret() {
      console.log('tacos');
      console.log(process.env.VUE_APP_SECRET);
    },
  },
};
</script>

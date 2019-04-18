<template>
  <div class="logo">
      <router-link to="/">
        <img :src="src" :alt="alt">
      </router-link>
  </div>
</template>


<script>
import logo from '../../assets/logo.png';

export default {
  name: 'Logo',
  data() {
    return {
      src: logo,
      alt: 'band logo',
    };
  },
};
</script>


<style scoped lang="scss">
    @import '../../assets/variables.scss';
    .logo {
        display: flex;
        justify-content: center;
        align-content: center;
        img {
            padding-top: 10px;
            padding-right: 20px;
            height: 30vw;
            max-height: 90px;
            box-sizing: border-box;
            &:hover {
              opacity: 0.7;
              filter: alpha(opacity=70);
            }
        }
    }

    @media(min-width: $break-point) {
        .logo {
            img {
                max-height: 350px;
             }
        }
    }
</style>

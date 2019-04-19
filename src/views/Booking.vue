<template>
  <div>
    <transition name="slide"><div class="msg" v-if="submitted">Message was sent.</div></transition>
    <form class="form" @submit.prevent="handleSubmit">
      <div class="field">
        <input required v-model="name" class="input" type="text" placeholder="Your Name">
      </div>

      <div class="field">
        <input required v-model="email" class="input" type="textarea" placeholder="Contact Email">
      </div>

      <div class="field">
        <input required v-model="subject" class="input" type="textarea" placeholder="Subject">
      </div>

      <div class="field" @keydown.enter.stop>
        <textarea required
          v-model="message"
          class="textarea"
          type="textarea"
          placeholder="Body">
        </textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>

</template>

<script>
const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.VUE_APP_POSTMARK_API_KEY);

export default {
  name: 'Booking',
  data() {
    return {
      name: undefined,
      email: undefined,
      subject: undefined,
      message: undefined,
      body: '',
      submitted: false,
    };
  },
  methods: {
    sendEmail() {
      client.sendEmail({
        From: 'booking@thebuffaloryders.com',
        To: 'booking@thebuffaloryders.com',
        Subject: this.subject,
        TextBody: this.body,
      });
    },
    setBody() {
      this.body = `
        You received a message from ${this.name} \n\n
        The email address they left: ${this.email} \n\n
        Message: \n\n
        ${this.message}
      `;
    },
    clearForm() {
      this.submitted = true;
      this.name = undefined;
      this.email = undefined;
      this.message = undefined;
      this.subject = undefined;
      this.body = '';
      setTimeout(() => { this.submitted = false; }, 2000);
    },
    handleSubmit() {
      if (this.name && this.message && this.email && this.subject) {
        this.setBody();
        this.sendEmail();
        this.clearForm();
      } else {
        // eslint-disable-next-line
        alert('You might have forgotten something...');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/variables.scss';
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 65vh;
    margin: 0 auto;
    max-width: 850px;
  }
  .msg {
    text-align: center;
    background-color: $color-background-lighter;
    padding: 10px;
    max-width: 90vw;
    margin: 0 auto;
    border-radius: $border-radius;
    position: fixed;
    top: 12vh;
    transition: 1s;
    left: 0;
  }
  .slide-leave-active,
  .slide-enter-active {
    transition: 1s;
  }
  .slide-enter {
    transform: translate(100%, 0);
  }
  .slide-leave-to {
    transform: translate(-100%, 0);
  }
  input, textarea {
    margin: 1vh;
    width: 80vw;
    box-sizing: border-box;
    border-radius: $border-radius;
    border: none;
    padding: 3px;
    max-width: 850px;
  }
  input {
    height: 5vh;
    font-size: 1em;
  }
  textarea {
    height: 20vh;
    font-size: 1em;
  }
  button {
    margin: 1vh;
    color: $color-primary;
    background-color: $color-background-lighter;
    border: none;
    padding: 10px;
    font-family: $primary-font;
    @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
    border-radius: $border-radius;
    &:hover {
      cursor: pointer;
      color: $color-secondary;
    }
    &:focus {
      outline: $color-secondary auto 5px;
    }
  }
  @media (min-width: $break-point){
    .msg {
      top: 10vh;
      @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
    }
  }

</style>

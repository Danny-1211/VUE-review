const card={
  data () {
    return {
      title: 'card元件內容'
    }
  },
  created() {
    console.log('card was created');
  },
};
const app=Vue.createApp({
  extends: card
});
app.mount('#app');
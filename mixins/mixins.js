
const card = {
  data () {
    return {
      title: 'card',
      content: 'card的內容',
      cardid: 'one'
    }
  },
  methods: {
    toggleCardMethod () {
      console.log('觸發了 card 方法');
    }
  },
  mounted() {
    console.log('card was created');
  }
};
const card2 = {
  data () {
    return {
      title: 'card2',
      content: 'card2的內容',
      card2id: 'two'
    }
  },
  methods: {
    toggleCard2Method () {
      console.log('觸發了 card2 方法');
    }
  },
  mounted() {
    console.log('card2 was created');
  }
};
const app=Vue.createApp({
    components: {
        card,
        card2
    },
    mixins: [card, card2]
});
app.mount('#app');
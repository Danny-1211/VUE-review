const app=Vue.createApp({
  data () {
    return {
      num: 0
    };
  },
  methods: {
    addNum () {
      this.num++;
    }
  },
  mounted() {
    this.num = 1;
  }
});

app.mount('#app');
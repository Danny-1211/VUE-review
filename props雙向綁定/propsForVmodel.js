const app=Vue.createApp({
  data () {
    return {
        name: 'danny123',
        name2: 'rose'
    }
  }
});

app.component('card',{
  props:['text'],
  template: `#card`
});

app.component('card2',{
    props:['text2'],
    template: `#card2`
  });

app.mount('#app');
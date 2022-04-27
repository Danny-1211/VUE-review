const emitter = mitt();
const app=Vue.createApp({
});
app.component('card',{
  data () {
    return {
      sentfood: '蛋餅'
    }
  },
  methods: {
    clickFromSent () { // 發送端
      console.log('來自 mitt 發送端');
      emitter.emit('sent-event',this.sentfood);
    }
  },
  template: `#Forcard`
});
app.component('card2',{
  data () {
    return {
      item:''
    }
  },
  mounted () {
    emitter.on('sent-event', (data) =>{
      console.log(data);
      this.item = data;
    });
  },
  template:`#Forcard2`
});

app.mount('#app');
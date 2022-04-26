const app=Vue.createApp({
});
app.component('card',{
  data () {
    return {
        food: {
            name: '蛋餅',
            price: 35,
            kind: 'corn'
          }
    }
  },
  template: `<div>
              <slot :product="food">
                <p>這是預設值</p>
              </slot>
            </div>`
});

app.mount('#app');
const app=Vue.createApp({
    data () {
        return {
            text: '根元件內容'
        }
      }
});
app.component('card',{
  data () {
    return {
        text: '內部元件'
    }
  },
  template: `<div>
              <slot>
                <p>這是預設值</p>
              </slot>
            </div>`
});

app.mount('#app');
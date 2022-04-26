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
              <h2>段落1</h2>
              <slot name="g1">
                <p>預設段落1文字</p>
              </slot>
            </div>
            <div>
            <h2>段落2</h2>
              <slot>
                <p>預設段落2文字</p>
              </slot>
            </div>
            <div>
            <h2>段落3</h2>
              <slot name="g3">
                <p>預設段落3文字</p>
              </slot>
            </div>`
});

app.mount('#app');
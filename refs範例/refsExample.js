const app=Vue.createApp({
  methods: {
      getComponentInfo () {
        this.$refs.card.title = '被更新的元件標題' // 透過 refs 更改子元件的 data
      }
  },
  mounted() {
    console.log(this.$refs); // 查看 refs
    console.log(this.$refs.input); // 取得 input DOM 元素
    this.$refs.input.focus(); // 操作 input 並使用 focus();
  },
});
app.component('card',{
  data () {
    return {
      title: '元件標題'
    }
  },
  template: `<div> 
              <p>{{ title }}</p>
            </div>`
});
app.mount('#app');
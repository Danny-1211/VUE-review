const card2 = {
  data () {
    return {
      title : '包在 card 元件'
    }
  },
  inject: ['root'],
  template: `
    <div style="border:1px solid blue; width:200px; height:180px;">
      <h5>這是 card2 ， card 的子元件</h5>
      <p>{{ root.title }}</p>
    </div>
  `,
  created () {
      this.root.title = '修改的root';
  },
}
const card = {
  data () {
    return {
        title: '第一層元件'
    }
  },
  components: {
    card2
  },
  inject: ['root'],
  template: `
    <div style="border:1px solid black;">
      <h5>這在 card 元件</h5>
      <p> 第一層元件 inject 值: {{ root.title }}</p>
      <card2></card2>
    </div>
  `
};
const app=Vue.createApp({
  data () {
    return {
      root: {
        title: '根元件的資料'
      }
    }
  },
  components: {
    card
  },
  provide: {
    root: {
        title: '根元件的資料'
    }
  }
  /**
   *   provide () { //利用函式形式建立 provide
   *    return {
   *      root: this.root  // 利用函式形式可以直接用 this 抓 data
   *    }
   *   }
   * 
   */
});
app.mount('#app');

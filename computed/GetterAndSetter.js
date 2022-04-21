const app=Vue.createApp({
  data () {
    return {
        products: [
            {
                name:'蛋餅',
                price: 30
            },
            {
                name:'漢堡',
                price: 50
            },
            {
                name:'蘿蔔糕',
                price: 25
            }
        ],
        sum:0,
        search: '',
        num: 10
    }
  },
  computed: {
      total: {
        get () {  // 讀取 total
          let total=0;
          total=this.num;
          return total;
          // return this.sum || total; 
          // 另類寫法如果監聽中 get 有 sum的值則抓 sum 否則就抓 total
        },
        set (val) {
          this.sum = val*0.5; //可以監聽修改在 data 的 sum
        }
      }
  }
});
app.mount('#app');
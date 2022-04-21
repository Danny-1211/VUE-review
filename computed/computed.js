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
        search: ''
    }
  },
  computed: {
      total() {
        let total =0;
        this.products.forEach( item=>{
           if (item.name === this.search) {
              total += item.price;
           } 
        });
         return total;
      }
  }
});
app.mount('#app');
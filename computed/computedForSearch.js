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
      filterProduct () {
        return this.products.filter( item => {
          return item.name.match(this.search);
        });
      }
    }
  });
  app.mount('#app');
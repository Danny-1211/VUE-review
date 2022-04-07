const app=Vue.createApp({
    data(){
      return{
        num:0,
      }
    },
    methods:{
      addNum(){
         console.log('觸發了addNum');
         this.num++;
      }
    }
});
app.component('card',{
    data(){
      return{
        
      }
    },
   methods:{
     click(){
       this.$emit('emit-data'); // 宣告方式 : this.$emit('自訂名稱',函數參數)
     }
   },
  template: `
    <input class="btn btn-primary" type="button" value="點擊我" @click="click">
    <!--也可以直接在 template 的標籤上直接宣告emit @click="$emit('emit-data')"-->
  `,
});
app.mount('#app');
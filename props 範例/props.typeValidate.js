const app=Vue.createApp({
    data () {
        return {
            money:300,
            booleanV:true,
        }
    }
}).component('props-type',{
    props:['money'],
    template:`
    <div> props 傳入資料值&型別 </div>
    <div> value:{{money}} </div>
    <div> typeOfValue:{{typeof money}} </div>`
}).component('props-validation',{
    props:{
      propsA: Number, // 單一型別檢查
      propsB: [Boolean, Number], // 多型別檢查
      propsC: { // 必要值   
          type: Number,
          required: true
      }
    },
    template: `propsA:{{propsA}}
    \n propsB:{{propsB}}
    \n propsC:{{propsC}}`
});
app.mount('#app');

// props若為 陣列 是用來接收資料
// 若為物件 裡面的 key 就為 props 名稱
const app=Vue.createApp({
    data(){
      return{
        text:'這是外層的文字',
      }
    },
    methods:{
      
    },
   mounted(){
     
   },
});
app.component('card',{
   data(){
     return{
       inner:'這是內層文字',
     }
   },
  props:['innerText']
  ,
  template:`
   <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">props抓取外層文字(單向數據流不能直接修改抓到的外層文字):</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
            v-model=innerText>
   </div>
  `,
  mounted(){
  }
})

app.mount('#app');
import outercom from './export_component.js';

const card1 = { // 區域註冊
    data () {
      return {
         text:"區域註冊下的元件"
      }
    },
    template: `<div>區域註冊下的元件1 : {{text}}</div>`
  }
  const card2={
    data(){
      return{
        text:"區域註冊的噢"
      }
    },
    template: `<div>區域註冊下的元件2 : {{text}}</div>`,
  }
  const app=Vue.createApp({
    components: {
      card1,
      card2,
      outercom
    }
  }).component('alert2',{ //串接方式全域註冊
    data () {
       return{
           text:'alert2'
       }
    },
    template: `<div>串接方式全域註冊元件 : {{text}}</div>`
  });



  app.component('alert',{ // 全域註冊
    data () {
       return{
           text:'alert1'
       }
    },
    template: `<div>寫在 createApp 外的全域註冊元件2 : {{text}}</div>`
  });
  
  app.component('templateSample',{ // 使用 text-x-template 套用模板的元件
   template: `#textTemplate`
  });

  app.mount('#app');
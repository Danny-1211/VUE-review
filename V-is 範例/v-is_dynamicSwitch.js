const app=Vue.createApp({
    data () {
      return {
         componentName: 'alert2'
      }
    }
   }).component('alert2',{ 
     data () {
        return{
            text:'alert2'
        }
     },
     template: `<div> alert2元件值 : {{text}}</div>`
   }).component('alert1',{ 
     data () {
        return{
            text:'alert1'
        }
     },
     template: `<div> alert1元件值 : {{text}}</div>`
   })
  ;
 app.mount('#app');
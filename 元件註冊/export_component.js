export default{
    data(){
        return{
          text:"外部匯入的元件"
        }
      },
      template: `<div>外部匯入元件 : {{text}} </div>`,
};
// 使用外部元件方法
/*
1. 用 import 匯入元件
2. 在 components 下 註冊匯入的元件
3. 在 html 加上對應的元件標籤就可使用了
*/
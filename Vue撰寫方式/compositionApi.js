
import { createApp , ref , onMounted} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.33/vue.esm-browser.min.js';
const composition = createApp({
  setup() {
    // define data
    const num = ref(0);
    // 生命週期
    onMounted(() => {
        num.value = 1;
    })
    // methods
    function addNum() {
      num.value++;
    }
    // 匯出 method and data 
    return {
      addNum,
      num
    }
  }
});

composition.mount('#app');


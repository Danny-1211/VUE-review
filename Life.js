// for vue3
const app=Vue.createApp({
mounted() {
    console.log('mounted');
},
unmounted() {
    console.log('unmounted');
},
// ......
// 其他 Hooks Function 的使用方法也相同
});

app.mount('#app');
// 若沒有執行 mount
// 後續所有的 life hooks function 都不會被執行

app.unmount('#app');
// 若直接在 createApp 接 mount 則無法 unmount 元件  ex: createApp({}).mount('#app');
// 需要像上面那樣分開寫 createApp 跟 mount 才能卸載元件
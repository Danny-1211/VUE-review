const app=Vue.createApp({
  methods: {
    teleport () {
      this.$refs.card.teleportBoo =  !this.$refs.card.teleportBoo;
    }
  },
});
app.component('card',{
  data () {
    return {
      title: '元件位置',
      teleportBoo: false
    }
  },
  template: ` 
  <div v-if="!teleportBoo">
    <p>{{ title }}</p>
  </div>
  <template v-if="teleportBoo">
    <teleport to="#teleportAfter">
        <div>
            <p>{{ title }}</p>
        </div>
    </teleport>
  </template>
  `
});
app.mount('#app');
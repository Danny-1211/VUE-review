const app = Vue.createApp({
  methods: {
    openModal () {
      this.$refs.modal.openModal();
    }
  }
});
app.component('modal' , {
  data () {
    return {
      MyModal: '',
    };
  },
  methods: {
    openModal () {
      this.MyModal.show();
    }
  },
  mounted () {
    this.MyModal = new bootstrap.Modal(this.$refs.textModal);
  },
  template: '#modal'
});
app.mount('#app');
<template src="./index.html"></template>
<style lang="less" src="./index.less"></style>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      active: 0,
      vipName: '',
      vipPwd: '',
      tName: '',
      tPwd: '',
    };
  },
  computed: {
    ...mapGetters(['test']),
  },
  mounted() {
  },
  methods: {
    ysLogin() {
      this.active = this.active + 1;
    },
    tbLogin() {
      this.active = this.active + 1;
    },
    getTaoBaoCookie() {
      window.open('https://login.taobao.com/');
    },
  },
};
</script>

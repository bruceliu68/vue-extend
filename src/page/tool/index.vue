<template src="./index.html"></template>
<style lang="less" src="./index.less"></style>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Tool',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    ...mapGetters(['test']),
  },
  mounted() {
  },
  methods: {
    getTaoBaoCookie() {
      window.open('https://login.taobao.com/');
    },
  },
};
</script>

<template src="./index.html"></template>
<style lang="less" src="./index.less"></style>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      activeIndex: '',
    };
  },
  computed: {
    ...mapGetters(['test']),
  },
  mounted() {
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    resetActiveIndex() {
      this.$router.push('/login');
    },
  },
};
</script>

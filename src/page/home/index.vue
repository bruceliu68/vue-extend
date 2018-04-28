<template src="./index.html"></template>
<style lang="less" src="./index.less"></style>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    ...mapGetters(['test']),
  },
  mounted() {
    console.log(this.$utils);
    console.log('====1', this.test);
    console.log('====2', this.$store.state.home.test);
    console.log('====3', this.$store.getters.test);
    // const params = {
    //   endExecTime: 0,
    //   startExecTime: 0,
    // };
    // for (let i = 0; i < 5; i++) {
    //   this.$axios.post('http://10.247.16.56:18080/tourbillon/jobsSummary/projects', params).then((res) => {
    //     console.log('res', res);
    //   });
    // }
  },
  methods: {
    test33() {
      this.$notify('msg', 'success', 'title');
      this.$store.commit('getTest', '456');
    },
  },
};
</script>

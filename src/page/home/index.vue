<template src="./index.html"></template>
<style lang="less" src="./index.less"></style>
<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  mounted() {
    console.log(this.$utils);
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
    test() {
      this.$notify('msg', 'success', 'title');
    },
  },
};
</script>

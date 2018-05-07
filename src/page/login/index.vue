<template src="./index.html"></template>
<style lang="less" src="./index.less"></style>
<script>

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
  },
  mounted() {
  },
  methods: {
    // 易数账号登录
    ysLogin() {
      this.$axios.post(this.$api.login, {
        loginName: this.vipName,
        password: this.vipPwd,
      }).then((res) => {
        if (res.data.code === 'ACK') {
          // document.cookie = `token=${res.data.data}`;
          this.active = this.active + 1;
          this.$notify('登录成功', 'success', 'success');
        } else {
          this.$notify(res.data.message, 'error', '登录失败');
        }
      });
    },
    // 重置易数账号
    reset() {
      this.vipName = '';
      this.vipPwd = '';
    },
    // 淘宝登录
    tbLogin() {
      this.$axios.post(this.$api.taobaoLogin, {
        loginName: this.tName,
        password: this.tPwd,
      }).then((res) => {
        if (res.data.code === 'ACK') {
          this.active = this.active + 1;
          this.$notify('登录成功', 'success', 'success');
          this.$router.push('/tool');
        } else {
          this.$notify(res.data.message, 'error', '登录失败');
        }
      });
    },
    // 返回上一步
    back() {
      this.active = 0;
    },
    test() {
      // const params = {
      //   image: '',
      //   itemId: '',
      //   name: '',
      //   price: '',
      // };
      this.$axios.get(this.$api.text).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

import Vue from 'vue';
import {
  Button,
  MessageBox,
  Message,
  Notification,
} from 'element-ui';
import './utils/filter'; // 过滤器
import * as utils from './utils/helper';
// import axios from './axios';

Vue.use(Button);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = (msg, type, title, duration) => {
  const realduration = duration || 10000;
  Notification({
    message: msg,
    title,
    type,
    duration: realduration, // 显示时长  单位s
  });
};
Vue.prototype.$message = Message;
Vue.prototype.$utils = utils;
// Vue.prototype.$axios = axios;

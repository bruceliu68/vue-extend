import moment from 'moment';
import Vue from 'vue';

// 日期格式化
Vue.filter('date', (value, format = 'YYYY-MM-DD') => {
  const date = moment(value).format(format);
  return date;
});

// 日期格式化
Vue.filter('dateTime', (value, format = 'YYYY-MM-DD HH:mm:ss') => {
  const date = moment(value).format(format);
  return date;
});

// 日期格式化-时间戳
Vue.filter('timestamp', (value) => {
  const date = new Date();
  date.setTime(value);
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? (`0${m}`) : m;
  let d = date.getDate();
  d = d < 10 ? (`0${d}`) : d;
  let h = date.getHours();
  h = h < 10 ? (`0${h}`) : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? (`0${minute}`) : minute;
  second = second < 10 ? (`0${second}`) : second;
  return `${y}-${m}-${d} ${h}:${minute}:${second}`;
});

// 保留 N 位小数
Vue.filter('number', (value, num = 2) => {
  parseFloat(value).toFixed(num);
});

// 金额格式化
// Vue.filter('currency', (value, symbol = '￥', num = 2) => {
//   if (!value) value = 0;
//   const val = (value / 1).toFixed(num);
//   return `${symbol}${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
// });

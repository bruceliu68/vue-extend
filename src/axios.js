import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
  withCredentials: true,
});
let pending = [];
const CancelToken = axios.CancelToken;
const removePending = (config, f) => {
  const flagUrl = `${config.url}&${config.method}`;
  if (pending.indexOf(flagUrl) !== -1) {
    if (f) {
      f(); // 执行取消操作
    } else {
      pending.splice(pending.indexOf(flagUrl), 1); // 把这条记录从数组中移除
    }
  } else if (f) {
    pending.push(flagUrl);
  }
};
// http request 拦截器
instance.interceptors.request.use((config) => {
  if (config.method === 'post') {
    console.log('我是拦截');
    config.cancelToken = new CancelToken((c) => {
      removePending(config, c);
    });
  }
  return config;
}, (err) => {
  return Promise.reject(err);
});

// http response 拦截器
instance.interceptors.response.use((response) => {
  if (response.config.method === 'post') {
    removePending(response.config);
  }
  return response;
}, (error) => {
  pending = [];
  return { data: { error } }; // 返回接口返回的错误信息
});

instance.defaults.paramsSerializer = function(params) {
  return qs.stringify(params, { indices: false });
};

export default instance;

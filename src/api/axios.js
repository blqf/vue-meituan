import axios from 'axios';

axios.defaults.baseURL = 'http://open.duyiedu.com/';

axios.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    appkey: 'duyiM_1585816009880'
  }
  return config;
}, (err) => {

  return err;
})

export default axios;
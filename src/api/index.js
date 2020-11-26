import axios from './axios.js';

let apis = {
  getSearchHotWords() {
    return axios.get('/api/meituan/header/searchHotWords.json');
  },
  getSearchWord() {
    return axios.get('/api/meituan/header/search.json');
  },
  getMenuNav() {
    return axios.get('/api/meituan/index/nav.json');
  },
  getStyle() {
    return axios.get('/api/meituan/index/resultsByKeywords.json');
  },
  getProductsList() {
    return axios.get('/api/meituan/list/goodsList.json');
  },
  getHotCity() {
    return axios.get('/api/meituan/city/hot.json');
  },
  getRecentCity() {
    return axios.get('/api/meituan/city/recents.json');
  },
  getProvinceList() {
    return axios.get('/api/meituan/city/province.json');
  },
  getCurPos() {
    return axios.get('/api/meituan/city/getPosition.json');
  },
  getCityList() {
    return axios.get('/api/meituan/city/cityList.json');
  },
  login(config) {
    return axios.get('/api/meituan/login', config);
  },
  register(config) {
    return axios.get('/api/meituan/register', config);
  },
}
export default apis;
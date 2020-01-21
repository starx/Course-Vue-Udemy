import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://starx-course-udemy-vue.firebaseio.com',
});

instance.defaults.headers.common.Accepts = 'application/json';

export default instance;

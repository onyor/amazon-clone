import axios from 'axios';

const instance = axios.create({
  // THE API (Cloud function) URL
  baseURL: 'http://localhost:5001/challange-5f62a/us-central1/api',
});

export default instance;

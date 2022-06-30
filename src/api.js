import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/8VgYmbKpNHtApdvmNAd4DiyIZkoDjoe6',
});

const api = {
  async loadRestaurants() {
    const res = await client.get('/restaurants');
    return res.data;
  },
};

export default api;

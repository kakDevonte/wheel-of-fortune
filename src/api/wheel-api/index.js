import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

export const wheelAPI = {
  getUser(id) {
    return instance.get(`users/${id}`);
  },
  createUser(user) {
    return instance.post(`users/`, user);
  },
  changeBalance(user) {
    return instance.put(`users/`, user);
  },
  getWinners() {
    return instance.get(`winners/`);
  },
  addWinner(winner) {
    return instance.post(`winners/`, winner);
  },
};

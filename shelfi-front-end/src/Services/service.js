import axios from 'axios';

export function getShelf(id) {
  return axios.get(`/api/shelf/${id}`).then(response => response.data);
}

export function getBin(id) {
  return axios.get(`/api/bin/${id}`).then(response => response.data);
}

export function createItem(item, id) {
  console.log(id, item);
  return axios.post(`/api/bin/${id}`, item).then((response) => {
  });
}

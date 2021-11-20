import axios from 'axios'

const baseURL = "http://54.191.157.156:8000"


const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});


export const fetchClientsAPI = () => {
  return api({
    url : "/client",
    method: "GET"
  });
};
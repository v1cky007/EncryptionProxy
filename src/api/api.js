import axios from "axios";

const API_URL = "http://localhost:8000";

export const fetchLogs = async () => {
  const res = await axios.get(`${API_URL}/logs`);
  return res.data;
};

export const fetchStatus = async () => {
  const res = await axios.get(`${API_URL}/status`);
  return res.data;
};

export const fetchStats = async () => {
  const res = await axios.get(`${API_URL}/stats`);
  return res.data;
};

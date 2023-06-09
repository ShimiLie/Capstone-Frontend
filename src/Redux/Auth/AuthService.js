import axios from "axios";
import { baseUrl } from "../../Utils/Utils";

const register = async (user) => {
  const response = await axios.post(`${baseUrl}/signup`, user);
  console.log(response);
  return response.data;
};

const login = async (user) => {
  const response = await axios.post(`${baseUrl}/signin`, user);
  console.log(response);
  // if logged in, need to store token and user in local storage

  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.access_token));
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }
  return response.data;
};

const resetnewPassword = async (email) => {
  const response = await axios.post(`${baseUrl}/reset-password`, { email });
  console.log(response);
  return response.data;
};

const newPassword = async (tokenData) => {
  const response = await axios.post(`${baseUrl}/new-password`, {
    password: tokenData.password,
    token: tokenData.token,
  });
  console.log(response);
  return response.data;
};

export const AuthService = {
  register,
  login,
  resetnewPassword,
  newPassword,
};

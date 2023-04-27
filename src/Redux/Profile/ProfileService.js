import axios from "axios";
import { baseUrl, config } from "../../Utils/Utils";

const getProfile = async () => {
  const response = await axios.get(`${baseUrl}/mypost`, config);
  console.log(response.data);
  return response.data;
};

//updateprofile
const updateUserProfile = async (userData) => {
  const response = await axios.put(
    `${baseUrl}/updateProfile`,
    { name: userData.name, password: userData.password, email: userData.email },
    config
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.result));
  }
  // console.log(response);
  return response.data;
};

export const ProfileService = {
  getProfile,
  updateUserProfile,
};

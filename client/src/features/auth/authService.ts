import axios from "axios";
import { AUTH_URL } from "../../utils/apiUrls";
import { LoginFormData } from "../../interfaces/loginFormData";

const login = async (userData: LoginFormData) => {
  const response = await axios.post(`${AUTH_URL}/login`, userData);

  if (response.data) {
    console.log("RESPONSE ", response.data)
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
}

const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  logout,
  login,
}
export default authService;
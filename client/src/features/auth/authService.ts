import axios from "axios";
import { AUTH_URL } from "../../utils/apiUrls";
import { LoginFormData } from "../../interfaces/loginFormData";
import jwtDecode from "jwt-decode";
import { UserI } from "./userI";

const login = async (userData: LoginFormData) => {
  const response = await axios.post(`${AUTH_URL}/login`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.token));
    const jwt: UserI = jwtDecode(response.data.token);
    console.log("JWT", jwt)
    return jwt;
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
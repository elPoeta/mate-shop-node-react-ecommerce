import axios from "axios";
import { AUTH_URL } from "../../utils/apiUrls";
import { LoginFormData, RegisterFormData } from "../../interfaces/loginFormData";
import jwtDecode from "jwt-decode";
import { UserI } from "./userI";

const register = async (userData: RegisterFormData) => {
  return await authHelper(userData, 'register');
}


const login = async (userData: LoginFormData) => {
  return await authHelper(userData, 'login');
}

const logout = () => {
  localStorage.removeItem('user')
}

const authHelper = async (userData: LoginFormData | RegisterFormData, url: string) => {
  const response = await axios.post(`${AUTH_URL}/${url}`, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.token));
    const jwt: UserI = jwtDecode(response.data.token);
    console.log("JWT", jwt)
    return jwt;
  }
  return response.data;
}

const authService = {
  logout,
  login,
  register
}
export default authService;
import axios from "axios";
import { USERNAME, PASSWORD } from '@env';
import { useDispatch, useSelector } from "react-redux";

const API_URL = "https://api.kvikmyndir.is/authentication";
const accessToken = useSelector(selectToken);
const credentials = {
    username: `${USERNAME}`,
    password: `${PASSWORD}`
}
class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
}

export default new AuthService();
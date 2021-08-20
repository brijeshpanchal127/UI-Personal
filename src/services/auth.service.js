import { apiAction } from "./api.service";
import authAction from '../reducers/actions/auth.action';

const API_URL = window.location.href.replaceAll(/\?/g, '');

class AuthService {
    login(username, password) {
        return apiAction({
            url: "/login",
            method: "POST",
            data: {
                "username": username,
                "password": password
            },
            onSuccess: authAction.loginSuccess,
            onFailure: authAction.loginFail
        });
    };

    // logout = () => {
    //     localStorage.removeItem("user");
    // };
}
export default new AuthService();
import { apiAction } from "./api.service";
import { MessageData } from "../reducers/actions/landing.action";
import { apiError } from "../reducers/actions/api.action";

const API_URL = window.location.href.replaceAll(/\?/g, "");

class messageService {
  getMessages(accessToken) {
    return apiAction({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
      accessToken: accessToken,
      onSuccess: MessageData,
      onFailure: apiError,
    });
  }
}

export default new messageService();

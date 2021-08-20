import { apiAction } from "./api.service";
import { cacheStoresData } from "../reducers/actions/landing.action";
import { apiError } from "../reducers/actions/api.action";
import { store } from "../reducers/store";
import { useSelector } from "react-redux";

const API_URL = window.location.href.replaceAll(/\?/g, '');

class LandingService {
    getStores(accessToken) {
        return apiAction({
            url: "/stores",
            method: "GET",
            accessToken: accessToken,
            onSuccess: cacheStoresData,
            onFailure: apiError
        });
    };
}

export default new LandingService();
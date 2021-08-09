// inspired by https://leanpub.com/redux-book
import axios from "axios";
import { API } from "./actions/types";
import { accessDenied, apiError, apiStart, apiEnd } from "./actions/api.action";

const ApiMiddleware = ({ dispatch }) => next => action => {

  console.log("ApiMiddleware layer");
  console.log("action");
  console.log(action);


  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headers
  } = action.payload;
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

  // axios default configs
  //axios.defaults.baseURL = process.env.APP_BASE_URL || "";
  axios.defaults.baseURL = window.location.href || "";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  // for Node.js Express back-end
  // axios.defaults.headers.common["x-access-token"] = ${accessToken};


  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch(error => {
      dispatch(apiError(error));
      dispatch(onFailure(error));

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default ApiMiddleware;

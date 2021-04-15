import { AxiosResponse } from "axios";
import { callAPI } from "../../shared/services";
import { AuthRequest } from "./modals/auth.modal";

const API = {
  login: (params: AuthRequest) => {
    return callAPI("POST", "auth/login", params).then(
      (res: AxiosResponse) => res.data
    );
  },
  register: (params: AuthRequest) => {
    return callAPI("POST", "auth/register", params).then(
      (res: AxiosResponse) => res.data
    );
  },
};

export default API;

import service from "../utils/request.js";

/**
 * @登录接口
 */

export function Login(data) {
  service.post("/login", data);
}

import service from "../utils/request.js";

/**
 * @登录接口
 */

export function Login(data) {
 return  service.post("/login", data);
}

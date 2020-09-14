import service from "../utils/request.js";

/**
 * @登录接口
 */
// 登录接口
export function Login(data) {
  return service.post("/login/", data);
}

// 验证码
export function getSms(data) {
  return service.post("/getSms/", data);
}

// 注册接口
export function register(data) {
  return service.post("/register/", data);
}

// 部门列表接口
export function departmentList(data) {
  return service.post("/department/list/", data);
}

// 部门新增/修改接口
export function departmentAdd(data) {
  return service.post("/department/add/", data);
}

// 部部门详情接口
export function departmentDetailed(data) {
  return service.post("/department/detailed/", data);
}

//部门禁启用接口
export function departmentStatus(data) {
  return service.post("/department/status/", data);
}

// 部门删除接口
export function departmentDelete(data) {
  return service.post("/department/delete/", data);
}

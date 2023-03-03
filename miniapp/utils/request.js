import { showToast } from "./index";

const baseUrl = "http://localhost:3000";

function request(options) {
  return new Promise((resolve, reject) => {
    let data = options.data;
    uni.request({
      url: baseUrl + options.url,
      method: options.method,
      data: data || {},
      success: (res) => {
        if (res.data.code === 200) {
          resolve(res.data);
        } else {
          showToast(res.data.msg);
        }
      },
      fail: (e) => {
        reject(e);
      },
    });
  });
}
request.get = function (url, data) {
  return request({
    url,
    method: "get",
    data,
  });
};

request.post = function (url, data) {
  return request({
    url,
    method: "post",
    data,
  });
};

request.patch = function (url, data) {
  return request({
    url,
    method: "patch",
    data,
  });
};

request.delete = function (url, data) {
  return request({
    url,
    method: "delete",
    data,
  });
};
export default request;

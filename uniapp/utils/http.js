import baseAPI from "../config/config.js";

module.exports = (params) => {
	let token = uni.getStorageSync("token") || "";
	let url = baseAPI + params.url;
	let method = params.method || "POST";
	let header = params.header || {};
	let data = params.data || {};
	if (method) {
		method = method.toUpperCase();
		if (method == "POST") {
			header = {
				"content-type": "application/x-www-form-urlencoded",
				"token": token
			}
		} else {
			header = {
				"token": token
			}
		}
	}
	uni.request({
		url: url,
		method: method,
		header: header,
		data: data,
		dataType: "json",
		success: res => {
			if (res.data.code == 401) {
				
			} else {
				typeof params.success == "function" && params.success(res.data);
			}
		},
		fail: err => {
			typeof params.fail == "function" && params.fail(err.data);
		},
		complete: (e) => {
			typeof params.complete == "function" && params.complete(e.data);
			return;
		}
	})
}
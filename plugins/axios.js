import Vue from 'vue';
import { Message } from 'element-ui';
import { getType } from '@/utils/object';
import { BASE_URL, ACCEPT } from '@/utils/variable';
export default function ({ app, $axios, redirect }) {
	$axios.interceptors.request.use(function (config) {
		return config;
	}, function (error) {
		return Promise.reject(error);
	});

	// 添加响应拦截器
	$axios.interceptors.response.use(function (response) {
		if (getType(response) === 'object') {
				let res = response.data;
				return res;
		}
		return response;
	}, function (error) {
		// 如果401 则跳转去登录
		if (error && error.response && error.response.status === 401) {
			
		}
		return Promise.reject(error);
	});
  /**
   * 请求
   */
  $axios.onRequest(config => {

  });
  /**
   * 响应
   */
  $axios.onResponse(response => {
    
  });
  /**
   * 错误
   */
  $axios.onError(error => {
  });
	function Http ({
		url = '',
		data = {},
		method = 'get',
		type = 'json',
		fullPath = false,
		responseType = 'json'
	}) {
		let fullUrl = url;
		// if (process.env.NODE_ENV === 'production') {
		// 	fullUrl = fullPath ? url : BASE_URL + url;
		// }
		let config = {
			method: method,
			url: fullUrl,
			responseType,
		};
		config.headers = {};
		config.headers.Accept = ACCEPT;
		if (method === 'get' || method === 'GET') {
			Object.assign(config, {
				params: data
			});
		} else {
			if (type === 'form') {
				config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
				Object.assign(config, {
					data: qs.stringify(data)
				});
			} else if (type === 'json') {
				config.headers['Content-Type'] = 'application/json';
				Object.assign(config, {
					data: data
				});
			} else if (type === 'formData') {
				let formData = new FormData();
				Object.keys(data).forEach(key => {
					formData.append(key, data[key]);
				});
				config.headers['Content-Type'] = 'multipart/form-data';
				Object.assign(config, {
					data: formData
				});
			} else if (type === 'oss') {
				config.headers['Content-Type'] = data.type;
				Object.assign(config, {
					data: data
				});
			}
		}
		return new Promise((resolve, reject) => {
			$axios(config).then((response) => {
				resolve(response);
			}, (error) => {
				reject(error);
			}).catch((error) => {
				reject(error);
			});
		});
	};
	app._axios = Http;
	Vue.prototype._axios = Http;
}

// 获取头部导航
export function getNavigation (_axios, params) {
  return _axios({
    url: '/api/navigation/desktop',
		method: 'get',
    data: params
  });
}

// 获取合作伙伴
export function getCooperation (_axios) {
  return _axios({
    url: '/api/blocks/2019_12_02_101033_index_links',
		method: 'get'
  });
}


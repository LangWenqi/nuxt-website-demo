// 资讯列表
export function getInformationList (_axios, params) {
  return _axios({
    url: '/api/articles/3',
		method: 'get',
		data: params
  });
}
// 搜索资讯列表
export function getSearchInformationList (_axios, params) {
  return _axios({
    url: '/api/search',
		method: 'get',
		data: {...params, typeid: 3}
  });
}
// 资讯轮播
export function getInformationBanner (_axios) {
  return _axios({
    url: '/api/blocks/2018_03_04_224524_index_slide_block_2',
		method: 'get'
  });
}
// 资讯详情
export function getInformationDetail (_axios, id) {
  return _axios({
    url: `/api/article/${id}`,
		method: 'get'
  });
}

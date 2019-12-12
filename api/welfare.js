// 公益列表
export function getWelfareList (_axios, params) {
  return _axios({
    url: '/api/articles/4',
		method: 'get',
		data: params
  });
}
// 搜索公益列表
export function getSearchWelfareList (_axios, params) {
  return _axios({
    url: '/api/search',
		method: 'get',
		data: {...params, typeid: 4}
  });
}
// 公益轮播
export function getWelfareBanner (_axios) {
  return _axios({
    url: '/api/blocks/2018_03_04_224524_index_slide_block_5',
		method: 'get'
  });
}
// 公益详情
export function getWelfareDetail (_axios, id) {
  return _axios({
    url: `/api/article/${id}`,
		method: 'get'
  });
}
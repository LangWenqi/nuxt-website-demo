// 获取留学导航分类
export function getExpandTypeList (_axios, params) {
  return _axios({
    url: '/api/articles/1?type=course',
		method: 'get',
		data: params
  });
}
// 获取留学导航列表
export function getExpandList (_axios, params, id) {
  return _axios({
    url: `/api/articles/${id}?type=course`,
		method: 'get',
		data: params
  });
}
// 留学轮播
export function getExpandBanner (_axios) {
  return _axios({
    url: '/api/blocks/2018_03_04_224524_index_slide_block_3',
		method: 'get'
  });
}
// 未来工作室轮播
export function getStudioBanner (_axios) {
  return _axios({
    url: '/api/blocks/2018_03_04_224524_index_slide_block_4',
		method: 'get'
  });
}
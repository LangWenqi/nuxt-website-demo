// 学院介绍轮播
export function getCollegeBanner (_axios) {
  return _axios({
    url: '/api/blocks/2018_03_04_224524_index_slide_block_6',
		method: 'get'
  });
}
// 学院介绍详情
export function getCollegePage (_axios) {
  return _axios({
    url: '/api/pages/2',
		method: 'get'
  });
}
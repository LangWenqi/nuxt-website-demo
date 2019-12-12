// 首页轮播
export function getHomeBanner (_axios) {
  return _axios({
    url: '/api/blocks/2018_03_04_224524_index_slide_block_1',
		method: 'get'
  });
}
// 首页表格
export function getTableJson (_axios) {
  return _axios({
    url: '/api/table/json',
		method: 'get'
  });
}
// 首页详情
export function getHomePage (_axios) {
  return _axios({
    url: '/api/pages/1',
		method: 'get'
  });
}
// 获取首页推荐
export function getRecommended (_axios) {
  return _axios({
    url: '/api/blocks/2018_03_04_235951_index_recommend_news_block',
		method: 'get'
  });
}
// 获取首页课程视频
export function getCourseVideo (_axios) {
  return _axios({
    url: '/api/articles/2?type=video',
		method: 'get'
  });
}
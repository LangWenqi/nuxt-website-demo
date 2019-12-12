<template>
  <div class="home__container">
		<home-banner :bannerList="bannerObject.data" />
    <home-top :mainContent="pageData.content" :mainVideoSrc="pageData.attribute && pageData.attribute.video_path || ''" :mainVideoCover="pageData.thumb || ''" />
		<home-subject/>
		<home-why :whyList="whyObject.data || []"/>
		<home-advantage/>
		<home-course/>
		<home-table :tableJson="tableJson"/>
		<home-show :courseList="courseObject.data || []" @play="playVideo"/>
		<video-player :visible.sync="visible" :src="videoSrc" :cover="videoCover"/>
  </div>
</template>

<script>
	import videoPlayer from '@/components/video/video';
	import homeBanner from './components/banner/banner';
	import homeTop from './components/top/top';
	import homeSubject from './components/subject/subject';
	import homeWhy from './components/why/why';
	import homeAdvantage from './components/advantage/advantage';
	import homeCourse from './components/course/course';
	import homeTable from './components/table/table';
	import homeShow from './components/show/show';
	import bigTitle from '@/components/bigTitle/bigTitle';
	import { getTableJson, getHomeBanner, getHomePage, getRecommended, getCourseVideo } from '@/api/home';
  export default {
		head: {
			title: '首页'
		},
		data () {
			return {
				pageData: {},
				tableJson: {},
				bannerObject: {},
				whyObject: {},
				visible: false,
				videoSrc: '',
				videoCover: '',
				courseObject: {},
			}
		},
    components: {
			videoPlayer,
			bigTitle,
			homeBanner,
			homeTop,
			homeSubject,
			homeWhy,
			homeAdvantage,
			homeCourse,
			homeTable,
			homeShow
    },
		async asyncData ({ app, params, query, $axios }) {
      const [tableJson, bannerObject, pageData, whyObject, courseObject] = await Promise.all([getTableJson(app._axios), getHomeBanner(app._axios), getHomePage(app._axios), getRecommended(app._axios), getCourseVideo(app._axios)]);
      return { 
				tableJson: tableJson || [],
				bannerObject: bannerObject || {},
				pageData: pageData || {},
				whyObject: whyObject || {},
				courseObject: courseObject || {}
			};
    },
    mounted () {
			console.log('tableJson', this.tableJson);
			console.log('pageHomeData', this.pageData);
			console.log('courseObject', this.courseObject);
			console.log('homeBanner', this.bannerObject);
    },
		destroyed () {
		},
    methods: {
      playVideo (videoSrc, videoCover) {
        this.videoSrc = videoSrc;
        this.videoCover = videoCover;
				this.showVideo(true);
      },
			showVideo (visible) {
				this.visible = visible;
			}
    }
  };
</script>

<style scoped lang="scss">
  
	
</style>

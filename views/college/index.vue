<template>
  <div class="college__container">
		<college-banner :bannerList="bannerObject.data" />
    <college-top :mainContent="pageData.content" :mainVideoSrc="pageData.attribute && pageData.attribute.video_path || ''" :mainVideoCover="pageData.thumb || ''" />
		<college-feature/>
		<college-training/>
		<college-method/>
		<college-practice :practiceImg="practiceImg"/>
		<college-mien :mienList="pageData.multiple || []"/>
  </div>
</template>

<script>
	import collegeBanner from './components/banner/banner';
	import collegeTop from './components/top/top';
	import collegeFeature from './components/feature/feature';
	import collegeTraining from './components/training/training';
	import collegeMethod from './components/method/method';
	import collegePractice from './components/practice/practice';
	import collegeMien from './components/mien/mien';
	import bigTitle from '@/components/bigTitle/bigTitle';
	import { getCollegeBanner, getCollegePage } from '@/api/college';
  export default {
		head: {
			title: '学院介绍'
		},
		data () {
			return {
				pageData: {},
				bannerObject: {},
				practiceImg: require('../../images/practice.png'),
			}
		},
    components: {
			bigTitle,
			collegeBanner,
			collegeTop,
			collegeFeature,
			collegeTraining,
			collegeMethod,
			collegePractice,
			collegeMien
    },
		async asyncData ({ app, params, query, $axios }) {
      const [bannerObject, pageData] = await Promise.all([getCollegeBanner(app._axios), getCollegePage(app._axios)]);
      return { 
				bannerObject: bannerObject || {},
				pageData: pageData || {},
			};
    },
    mounted () {
			console.log('pageCollegeData', this.pageData);
			console.log('collegeBanner', this.bannerObject);
    },
		destroyed () {
		},
    methods: {
      
    }
  };
</script>

<style scoped lang="scss">
  
	
</style>

<template>
  <div class="studio__container">
   	<studio-banner :bannerList="bannerObject.data || []"/>
		<div class="studio__wrapper">
			<studio-tabs/>
			<div class="studio__content animated" :class="{'fadeInLeft': animateContent}" ref="content">
				“未来工作室”给每一位学生提供职业生涯规划服务，早一步让孩子知道“自己想做什么”，“自己能做什么”和 “未来做什么”。我们以每个学生个体差异性出发，为学生提供精准化的一站式美国高端 留学解决方案，尤其注重“留学前”和“留学后”的有价值服务，致力于帮助每一位学生通过海外教育实现自我价值并 创造美好的未来。
			</div>
			<div class="studio__title animated" :class="{'fadeInRight': animateTitle}" ref="title">
				帮助学生现在或是未来能够在正确的时机做出正确的决策<br/>
				我们为您定制“未来”的解决方案
			</div>
		</div>
		<studio-map/>
  </div>
</template>

<script>
	import studioBanner from './components/banner/banner';
	import studioTabs from './components/tabs/tabs';
	import studioMap from './components/map/map';
	import { getStudioBanner } from '@/api/expand';
  export default {
		head: {
			title: '未来工作室'
		},
		data() {
			return {
				animateContent: false,
				animateTitle: false,
				bannerObject: {}
			}
		},
    components: {
			studioBanner,
			studioTabs,
			studioMap
    },
		async asyncData ({ app, params, query, $axios }) {
      const [bannerObject] = await Promise.all([getStudioBanner(app._axios)]);
      return { 
				bannerObject: bannerObject || {},
			};
    },
    mounted () {
			console.log('studioBanner', this.bannerObject);
			this.initScroll();
			window.addEventListener('scroll', this.initScroll);
    },
		destroyed () {
			window.removeEventListener('scroll', this.initScroll);
		},
    methods: {
			initScroll () {
				if (!this.animateContent && (this.$refs.content.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.content.getBoundingClientRect().top))) {
					this.animateContent = true;
				}
				if (!this.animateTitle && (this.$refs.title.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.title.getBoundingClientRect().top))) {
					this.animateTitle = true;
				}
			},
    }
  };
</script>

<style scoped lang="scss">
	.studio {
		&__wrapper {
			background: #fafbfb;
		}
		&__title {
			width: $common-width;
			margin: 0 auto;
			color: $color-primary;
			text-align: center;
			line-height: 1.5;
			font-size: $font-20;
			font-weight: bold;
			padding: 40px 0;
		}
		&__content {
			width: $common-width;
			margin: 0 auto;
			text-align: justify;
			color: $color-gray;
			font-size: $font-14;
		}
	}
</style>

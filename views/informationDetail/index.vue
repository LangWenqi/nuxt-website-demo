<template>
  <div class="information__container">
		<information-banner :bannerList="bannerObject.data || []" />
		<div class="information__wrapper">
			<div class="information__title">
				{{detail.title}}
			</div>
			<div class="information__time">{{detail.created_at}}</div>
			<div class="information__content" v-html="detail.content"></div>
			<!-- <information-pagination :detail="detail"/> -->
		</div>
  </div>
</template>

<script>
	import informationBanner from './components/banner/banner';
	import informationPagination from './components/pagination/pagination';
	import { getInformationBanner, getInformationDetail } from '@/api/information';
  export default {
		head: {
			title: '学锋资讯'
		},
		data () {
			return {
				detail: {},
				bannerObject: {}
			}
		},
    components: {
			informationBanner,
			informationPagination
    },
		async asyncData ({ app, params, query, $axios }) {
      const [bannerObject, detail] = await Promise.all([getInformationBanner(app._axios), getInformationDetail(app._axios, params.id)]);
      return { 
				bannerObject: bannerObject || {},
				detail: detail || {},
			};
    },
    mounted () {
			console.log('informationDetail', this.detail);
    },
		destroyed () {
		},
    methods: {
			
    }
  };
</script>

<style scoped lang="scss">
	.information__wrapper {
		margin: 0 auto;
		width: $common-width;
		padding: 40px 0;
	}
	.information__title {
		font-size: $font-20;
		color: $color-black-3;
		text-align: center;
	}
	.information__time {
		font-size: $font-14;
		color: $color-black-9;
		text-align: center;
		padding: $margin-12 0 0;
	}
	.information__content {
		padding: 40px 0 0;
		text-align: justify;
	}
</style>

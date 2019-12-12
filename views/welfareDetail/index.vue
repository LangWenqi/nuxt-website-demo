<template>
  <div class="welfare__container">
		<welfare-banner :bannerList="bannerObject.data || []" />
		<div class="welfare__wrapper">
			<div class="welfare__title">
				{{detail.title}}
			</div>
			<div class="welfare__time">{{detail.created_at}}</div>
			<div class="welfare__content" v-html="detail.content"></div>
			<!-- <welfare-pagination :detail="detail"/> -->
		</div>
  </div>
</template>

<script>
	import welfareBanner from './components/banner/banner';
	import welfarePagination from './components/pagination/pagination';
	import { getWelfareBanner, getWelfareDetail } from '@/api/welfare';
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
			welfareBanner,
			welfarePagination
    },
		async asyncData ({ app, params, query, $axios }) {
      const [bannerObject, detail] = await Promise.all([getWelfareBanner(app._axios), getWelfareDetail(app._axios, params.id)]);
			return { 
				bannerObject: bannerObject || {},
				detail: detail || {},
			};
    },
    mounted () {
			console.log('welfareDetail', this.detail);
    },
		destroyed () {
		},
    methods: {
			
    }
  };
</script>

<style scoped lang="scss">
	.welfare__wrapper {
		margin: 0 auto;
		width: $common-width;
		padding: 40px 0;
	}
	.welfare__title {
		font-size: $font-20;
		color: $color-black-3;
		text-align: center;
	}
	.welfare__time {
		font-size: $font-14;
		color: $color-black-9;
		text-align: center;
		padding: $margin-12 0 0;
	}
	.welfare__content {
		padding: 40px 0 0;
		text-align: justify;
	}
</style>

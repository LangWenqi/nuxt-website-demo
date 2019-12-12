<template>
  <div class="information__container">
		<information-banner :bannerList="bannerObject.data || []" />
		<div class="information__input" flex="main:right">
			<information-input flex-box="0"  v-model="inputValue" @on-search="changePage(1, ...arguments)"/>
		</div>
		<div>
			<information-list :list="list"/>
		</div>
		<div class="information__pagination" flex="main:center">
			<v-pagination :pageCount="pageCount" 
			:currentPage="page" 
			@on-prev-click="changePage" 
			@on-next-click="changePage"
			@on-first-click="changePage"
			@on-last-click="changePage"
			/>
		</div>
  </div>
</template>

<script>
	import vPagination from '@/components/pagination/pagination';
	import informationBanner from './components/banner/banner';
	import informationInput from './components/input/input';
	import informationList from './components/list/list';
	import { getInformationList, getInformationBanner, getSearchInformationList } from '@/api/information';
  export default {
		head: {
			title: '学锋资讯'
		},
		data () {
			return {
				bannerObject: {},
				page: 1,
				total: 0,
				pageCount: 1,
				pageSize: 10,
				list: [],
				inputValue: '',
			}
		},
    components: {
			informationBanner,
			informationInput,
			vPagination,
			informationList
    },
		async asyncData ({ app, params, query, $axios }) {
      const [bannerObject] = await Promise.all([getInformationBanner(app._axios)]);
      return { 
				bannerObject: bannerObject || {},
			};
    },
    mounted () {
			console.log('informationBanner', this.bannerObject)
			this.changePage(1);
    },
		destroyed () {
		},
    methods: {
			changePage (page) {
				this.page = page;
				this.getList();
			},
      async getList () {
				let params = {
					page: this.page,
				}
				if (this.inputValue) {
					params.query = this.inputValue;
				}
				const getList = this.inputValue ? getSearchInformationList : getInformationList;
				const listObject = await getList(this._axios, params);
				this.list = listObject.data || []
				this.total = listObject.meta.pagination.total;
				this.pageCount = listObject.meta.pagination.total_pages;
			}
    }
  };
</script>

<style scoped lang="scss">
	.information__input {
		width: $common-width;
		margin: 0 auto;
		padding: 40px 0 $margin-24 0;
	}
	.information__pagination {
		padding: 20px 0 60px;
	}
</style>

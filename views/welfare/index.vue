<template>
  <div class="welfare__container">
		<welfare-banner :bannerList="bannerObject.data || []" />
		<div class="welfare__input" flex="main:right">
			<welfare-input flex-box="0"  v-model="inputValue" @on-search="changePage(1, ...arguments)"/>
		</div>
		<div>
			<welfare-list :list="list"/>
		</div>
		<div class="welfare__pagination" flex="main:center">
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
	import welfareBanner from './components/banner/banner';
	import welfareInput from './components/input/input';
	import welfareList from './components/list/list';
	import { getWelfareBanner, getWelfareList, getSearchWelfareList } from '@/api/welfare';
  export default {
		head: {
			title: '学锋公益'
		},
		data () {
			return {
				page: 1,
				total: 0,
				pageCount: 1,
				pageSize: 10,
				list: [],
				inputValue: ''
			}
		},
    components: {
			welfareBanner,
			welfareInput,
			vPagination,
			welfareList
    },
		async asyncData ({ app, params, query, $axios }) {
      const [bannerObject] = await Promise.all([getWelfareBanner(app._axios)]);
			return { 
				bannerObject: bannerObject || {},
			};
    },
    mounted () {
			console.log('welfare', this.bannerObject);
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
				const getList = this.inputValue ? getSearchWelfareList : getWelfareList;
				const listObject = await getList(this._axios, params);
				this.list = listObject.data || []
				this.total = listObject.meta.pagination.total;
				this.pageCount = listObject.meta.pagination.total_pages;
			}
    }
  };
</script>

<style scoped lang="scss">
	.welfare__input {
		width: $common-width;
		margin: 0 auto;
		padding: 40px 0 $margin-24 0;
	}
	.welfare__pagination {
		padding: 20px 0 60px;
	}
</style>

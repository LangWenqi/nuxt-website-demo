<template>
  <div class="abroad__container">
		<abroad-banner ref="banner" :bannerList="tabList" />
		<abroad-tabs :tabList="tabList" :nowIndex="tabIndex"  @on-change-tab="changeTab"/>
		<abroad-list :list="list"/>
		<div class="abroad__pagination" flex="main:center">
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
	import abroadBanner from './components/banner/banner';
	import abroadList from './components/list/list';
	import abroadTabs from './components/tabs/tabs';
	import { getExpandList, getExpandTypeList } from '@/api/expand';

  export default {
		head: {
			title: '"锋"游学'
		},
		data () {
			return {
				tabList: [],
				page: 1,
				total: 0,
				pageCount: 1,
				pageSize: 10,
				tabIndex: 0,
				list: [],
			}
		},
    components: {
			abroadBanner,
			vPagination,
			abroadList,
			abroadTabs
    },
		async asyncData ({ app, params, query, $axios }) {
			const [data] = await Promise.all([getExpandTypeList(app._axios)]);
			return { 
				tabList: data.meta.categories || [],
			};
    },
    mounted () {
			console.log('expandBanner', this.tabList);
			this.changePage(1);
    },
		destroyed () {
		},
    methods: {
			changeTab (tabIndex) {
				this.tabIndex = tabIndex;
				this.changePage(1);
				if (this.$refs.banner) {
					this.$refs.banner.slideTo(tabIndex);
				} 
			},
			changePage (page) {
				this.page = page;
				this.getList();
			},
      async getList () {
				const params = {
					page: this.page,
				}
				const listObject = await getExpandList(this._axios, params, this.tabList[this.tabIndex].id);
				this.list = listObject.data
				? listObject.data.map(el=>{
					return {...el, course: el.attribute && el.attribute.course ? JSON.parse(el.attribute.course) : {} }
				})
				: [];
				this.total = listObject.meta.pagination.total;
				this.pageCount = listObject.meta.pagination.total_pages;
			}
    }
  };
</script>

<style scoped lang="scss">
	.abroad__pagination {
		padding: 20px 0 60px;
	}
</style>

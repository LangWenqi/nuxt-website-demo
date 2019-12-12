<template>
  <div class="home__table" ref="animateTable">
		<div class="home__table__title" flex>
			<div class="home__table__title__item animated" flex="cross:center" :class="{'slideInUp': animateTable}" flex-box="1" :key="courseTitleIndex" v-for="(courseTitleItem, courseTitleIndex) in courseTitleList">
				<img :src="courseTitleItem.url"><div class="home__table__title__item__font">{{courseTitleItem.name}}</div>
			</div>
		</div>
		<div class="home__table__inner">
			<div flex v-for="(courseTable, courseTableIndex) in courseTableList" :key="courseTableIndex">
				<div class="home__table__inner__item home__table__inner__item__title animated" :class="{'jello': animateTable}" flex-box="0">
					{{courseTable.title}}
				</div>
				<div class="home__table__inner__item animated" :class="{'flash': animateTable}" flex-box="1" v-for="(courseTableItem, courseTableItemIndex) in courseTable.content" :key="courseTableItemIndex">
					{{courseTableItem}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { courseTitleList } from '@/config/map';
  export default {
		props: {
			tableJson: {
				default () {
					return {}
				}
			}
		},
		data () {
			return {
				courseTitleList,
				animateTable: false
			}
		},
		computed: {
			courseTableList () {
				return this.tableJson ? this.tableJson.data : [];
			}
		},
    components: {
			
    },
    mounted () {
			this.initScroll();
			window.addEventListener('scroll', this.initScroll);
    },
		destroyed () {
			window.removeEventListener('scroll', this.initScroll);
		},
    methods: {
			initScroll () {
				if (!this.animateTable && (this.$refs.animateTable.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.animateTable.getBoundingClientRect().top))) {
					this.animateTable = true;
				}
			},
    }
  };
</script>

<style scoped lang="scss">
  
	.home__table {
		background: $color-primary;
		width: $common-width;
		margin: 60px auto;
		padding: $margin-12;
		&__title {
			height: 50px;
			padding: 0 0 0 200px;
			&__item {
				width: 0;
				height: 100%;
				padding: 0 0 0 $margin-24;
				&__font {
					font-size: $font-12;
					color: $color-yellow;
					margin: 0 0 0 $margin-12;
				}
			}
		}
		&__inner {
			border-left: 1px solid $color-line; 
			border-top: 1px solid $color-line;
			background: $color-white;
			&__item {
				border-right: 1px solid $color-line; 
				border-bottom: 1px solid $color-line;
				min-height: 100px;
				padding: $margin-24;
				text-align: justify;
				width: 0;
				color: $color-gray;
				&__title {
					width: 200px;
					font-size: $font-20;
					color: $color-primary;
				}
			} 
		}
	}
</style>

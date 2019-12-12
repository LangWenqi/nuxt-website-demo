<template>
	<div flex="cross:center">
		<span class="btn" :class="{'disabled': currentPage === 1}" @click="firstClick">首页</span>
		<el-pagination
			background
			layout="prev, slot, next"
			small
			prev-text="上一页"
			next-text="下一页"
			@prev-click="prevClick"
			@next-click="nextClick"
			:current-page="currentPage"
			:page-count="pageCount"
			>
			<span class="page"><span class="current">{{currentPage}}</span>/{{pageCount}}</span>
		</el-pagination>
		<span class="btn" :class="{'disabled': currentPage === pageCount}" @click="lastClick">末页</span>
	</div>
</template>
<script>
export default {
	props: {
		pageCount: {
			type: Number,
			default: 1
		},
		currentPage: {
			type: Number,
			default: 1
		}
	},
	methods: {
		prevClick () {
			this.$emit('on-prev-click', this.currentPage - 1);
		},
		nextClick () {
			this.$emit('on-next-click', this.currentPage + 1);
		},
		firstClick () {
			if (this.currentPage === 1) return;
			this.$emit('on-first-click', 1);
		},
		lastClick () {
			if (this.currentPage === this.pageCount) return;
			this.$emit('on-last-click', this.pageCount);
		}
	}
}
</script>
<style lang="scss" scoped>
	.page {
		font-size: $font-12;
		color: #606266;
		text-align: center;
		margin: 0 $margin-12;
	}
	.btn {
		font-size: $font-12;
		color: #606266;
		margin: 0 $margin-12;
		cursor: pointer;
	}
	.current {
		color: $color-primary;
		min-width: 0 !important;
	}
	.disabled {
		color: #c0c4cc;
		cursor: default;
	}
</style>



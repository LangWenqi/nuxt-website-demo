<template>
	<div class="information__pagination" flex="cross:center main:justify">
		<div class="information__pagination__item" flex="cross:center" v-if="detail.prev">
			<div class="information__pagination__item__label">
				上一篇：
			</div>
			<div class="information__pagination__item__link" v-if="detail.prev.id" @click="toDetail(detail.prev)">
				{{detail.prev.title}}
			</div>
			<div class="information__pagination__item__label" v-else>
				没有了
			</div>
		</div>
		<div class="information__pagination__item" flex="cross:center" v-if="detail.next">
			<div class="information__pagination__item__label">
				下一篇：
			</div>
			<div class="information__pagination__item__link" v-if="detail.next.id" @click="toDetail(detail.next)">
				{{detail.next.title}}
			</div>
			<div class="information__pagination__item__label" v-else>
				没有了
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		detail: {
			type: Object,
			default: {}
		}
	},
	methods: {
		toDetail (item) {
				if (item.type === 1) {
					this.$router.push(`/information/${item.id}`);
				} else {
					window.open(item.path);
				}
			}
	}
}
</script>
<style lang="scss" scoped>
	.information__pagination {
		padding: 40px 0;
		width: $common-width;
		margin: 0 auto;
		&__item {
			&__label {
				font-size: $font-14;
				color: $color-black-6;
			}
			&__link {
				font-size: $font-14;
				color: $color-primary;
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>



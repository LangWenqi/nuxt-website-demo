<template>
  <div class="welfare__list">
			<div class="welfare__item cursor" flex v-for="item in list" :key="item.id" @click="toDetail(item)">
				<div class="welfare__item__img" flex-box="0">
					<img class="img" :src="item.thumb">
				</div>
				<div flex-box="1">
					<div class="welfare__item__time">
						{{item.updated_at}}
					</div>
					<div class="welfare__item__title">
						{{item.title}}
					</div>
					<div class="welfare__item__content">
						{{item.description}}
					</div>
					<div class="welfare__item__detail">
						查看详情
					</div>
				</div>
			</div>
	</div>
</template>

<script>
  export default {
		props: {
			list: {
				type: Array,
				default () {
					return [];
				}
			}
		},
		data () {
			return {
				
			}
		},
    components: {
    },
    mounted () {
			
    },
		destroyed () {
		},
    methods: {
			toDetail (item) {
				if (item.is_link + '' === '1') {
					window.open(item.link);
				} else {
					this.$router.push(`/welfare/${item.id}`);
				}
			}
    }
  };
</script>

<style scoped lang="scss">
	.welfare__list {
		overflow: hidden;
		width: $common-width;
		margin: 0 auto;
	}
	.welfare__item {
		min-height: 260px;
		background: #fff;
		padding: $margin-24;
		margin-bottom: $margin-24;
		&__img {
			background: $color-line;
			@include imgBox(340px, 210px, cover, 4px);
			margin-right: 30px;
		}
		&__title {
			color: $color-black-3;
			font-size: $font-20;
			padding-bottom: $margin-24;
			@include ellipsis(1);
			font-weight: bold;
		}
		&__content {
			@include ellipsis(2);
			text-align: justify;
			color: $color-gray;
			font-size: $font-16;
			height: 44px;
		}
		&__time {
			color: #8590a8;
			font-size: $font-20;
			padding-bottom: $margin-24;
		}
		&__detail {
			padding-top: 40px;
			color: $color-primary;
			font-size: $font-16;
			text-align: right;
		}
	}
</style>

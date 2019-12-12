<template>
  <div class="footer__container">
		<div class="footer__wrapper" flex>
			<div class="footer__logo"></div>
			<div class="footer__cooperation">
				<div class="footer__title">合作伙伴</div>
				<div class="footer__content" @click="toCooperation(cooperationItem)" v-for="(cooperationItem) in cooperation.data" :key="cooperationItem.id">
					{{cooperationItem.name}}
				</div>
			</div>
			<div class="footer__contact" flex-box="1">
				<div class="footer__title">联系方式</div>
				<div class="footer__content">客服电话：</div>
				<div class="footer__phone" flex="cross:baseline">021-6100-5055<span class="footer__des" style="margin: 0 6px">转</span>6410</div>
				<div class="footer__content">邮箱地址：learningpioneer@163.com</div>
			</div>
			<div class="footer__code" flex>
				<div class="footer__code__wrapper">
					<div class="footer__code__font">微博二维码</div>
					<div class="footer__code__img">
						<img class="img" src="../../images/weibo.png">
					</div>
				</div>
				<div class="footer__code__wrapper">
					<div class="footer__code__font">公众号二维码</div>
					<div class="footer__code__img">
						<img class="img" src="../../images/gongzhonghao.png">
					</div>
				</div>
			</div>
		</div>
		<div class="footer__bottom">
    	2110-2016 xuefeng.com 版权所有  沪ICP备 51142145号-2
		</div>
  </div>
</template>

<script>
  export default {
    components: {
    },
		props: {
			cooperation: {
				type: Object,
				default () {
					return {};
				}
			}
		},
		data () {
			return {
				
			}
		},
    mounted () {
			console.log('cooperation', this.cooperation);
    },
    methods: {
      toCooperation (item) {
				if (!item.url) return;
				window.open(item.url);
			}
    }
  };
</script>

<style scoped lang="scss">
  .footer__container {
		min-height: $padding-footer;
		background: $color-footer;
		min-width: $common-width;
		position: relative;
		padding-bottom: 44px;
	}
	.footer__wrapper {
		padding: 30px 0;
		width: $common-width;
		margin: 0 auto;
	}
	.footer__title {
		color: $color-white;
		font-size: $font-14;
		padding: $margin-12 0 0;
	}
	.footer__des {
		color: $color-white-opacity;
		font-size: $font-12;
	}
	.footer__content {
		@extend .footer__des;
		padding-top: $margin-12;
		cursor: pointer;
		&:hover {
			color: $color-white;
		}
	}
	.footer__bottom {
		position: absolute;
		bottom:0;
		left: 0;
		right: 0;
		background: #1b2033;
		height: 44px;
		min-width: $common-width;
		margin: 0 auto;
		text-align: center;
		line-height: 44px;
		@extend .footer__des;
	}
	.footer__logo {
		height: 50px;
		width: 120px;
		background: url("../../images/logo.png") no-repeat center center/contain;
		margin-right: 150px; 
	}
	.footer__cooperation {
		margin-right: 150px;
	}
	.footer__contact {
		margin-right: $margin-24;
	}
	.footer__phone {
		color: $color-primary;
		font-size: $font-20;
		padding-top: 6px;
	}
	.footer__code {
		&__wrapper {
			margin-left: $margin-24; 
		}
		&__font {
			color: $color-white-opacity;
			font-size: $font-12;
			text-align: center;
			padding: 20px 0 $margin-12;
		}
		&__img {
			@include imgBox(80px, 80px, contain);
		}
	}
</style>

<template>
  <div class="abroad__banner">
			<div class="swiper-no-swiping" v-swiper:bannerSwiper="swiperOption" v-if="bannerList && bannerList.length > 0">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(bannerItem) in bannerList" :key="bannerItem.id">
						<div class="abroad__banner__img" @click="navigateTo(bannerItem)">
							<img class="img" :src="bannerItem.thumb" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
  export default {
		props: {
			bannerList: {
				type: Array,
				default () {
					return [];
				}
			}
		},
		data () {
			return {
				swiperOption: {
					slidesPerView: "auto",
					speed: 500,
					observer: true, //监听，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
					pagination: {
						el: ".swiper-pagination"
					}
        }
			}
		},
    components: {
    },
    mounted () {
			
    },
		destroyed () {
		},
    methods: {
			navigateTo (item) {
				
			},
			slideTo(index) {
				if (this.bannerSwiper && this.bannerSwiper.slideTo) {
					this.bannerSwiper.slideTo(index, 500);
				}
			}
    }
  };
</script>

<style scoped lang="scss">
	.abroad__banner {
		width: 100%;
		height: 5rem;
		position: relative;
		&__img {
			background: $color-line;
			@include imgBox(100%, 5rem, cover);
		}
		z-index: 0;
		&:hover {
			.abroad__icon {
				position: absolute;
				top: 30%;
				bottom: 0;
				margin: auto;
				left: 50px;
				width: 50px;
				height: 50px;
				background: url("../../../../images/Left.png") no-repeat center center/contain;
				z-index: 1;
				&__right {
					left: auto;
					right: 50px;
					background: url("../../../../images/Right.png") no-repeat center center/contain;
				}
			}
		}
	}
	
</style>

<template>
  <div class="college__banner">
			<div v-swiper:bannerSwiper="swiperOption" v-if="bannerList && bannerList.length > 0">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(bannerItem) in bannerList" :key="bannerItem.id">
						<div class="college__banner__img" @click="navigateTo(bannerItem)">
							<img class="img" :src="bannerItem.image" alt="">
						</div>
					</div>
				</div>
			</div>
			<div class="college__icon college__icon__left cursor" @click="prev"></div>
			<div class="college__icon college__icon__right cursor" @click="next"></div>
		</div>
</template>

<script>
	import { menuType } from '@/config/map';
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
					loop: true,
					slidesPerView: "auto",
					speed: 500,
					autoplay: {
						disableOnInteraction: false, //手动滑动之后不打断播放
						delay: 5000
					},
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
			prev() {
				this.bannerSwiper.slidePrev();
			},
			next() {
				this.bannerSwiper.slideNext();
			}
    }
  };
</script>

<style scoped lang="scss">
	.college__banner {
		width: 100%;
		height: 6rem;
		position: relative;
		&__img {
			background: $color-line;
			@include imgBox(100%, 6rem, cover);
		}
		z-index: 0;
		&:hover {
			.college__icon {
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

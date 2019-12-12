<template>
	<div class="studio__map">
		<div class="studio__map__top"  ref="mapTitle" flex="main:center cross:center">
			<big-title :class="['animated',{'zoomInDown': animateMapTitle}]">
				我们已为同学们<span class="studio__map__title">成功申请</span>以下大学
			</big-title>
		</div>
		<div class="studio__map__bottom" ref="map">
			<div class="swiper-slide" v-for="(mapItem, mapIndex) in mapList" :key="mapIndex">
				<div class="studio__map__bottom__img">
					<img class="img" :src="mapItem.url">
					<div class="studio__map__bottom__font animated" :class="{'zoomIn': animateMap}"
						:style="{left: university.x, top: university.y, 'font-size': university.font, opacity: university.opacity}"
						:key="universityIndex" 
						v-for="(university, universityIndex) in mapItem.universityList">
						{{university.name}}
					</div>
				</div>
			</div>
			<!-- <div v-swiper:mapSwiper="swiperOption" v-if="mapList && mapList.length > 0">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(mapItem, mapIndex) in mapList" :key="mapIndex">
						<div class="studio__map__bottom__img">
							<img class="img" :src="mapItem.url">
							<div class="studio__map__bottom__font animated" :class="{'zoomIn': animateMap}"
								:style="{left: university.x, top: university.y, 'font-size': university.font, opacity: university.opacity}"
								:key="universityIndex" 
								v-for="(university, universityIndex) in mapItem.universityList">
								{{university.name}}
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div> -->
		</div>
	</div>
</template>

<script>
	import bigTitle from '@/components/bigTitle/bigTitle';
	import { mapList } from '@/config/map';
  export default {
		data() {
			return {
				mapList,
				animateMap: false,
				animateMapTitle: false,
				swiperOption: {
					// loop: true,
					slidesPerView: "auto",
					speed: 500,
					// autoplay: {
					// 	disableOnInteraction: false, //手动滑动之后不打断播放
					// 	delay: 5000
					// },
					observer: true, //监听，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
					pagination: {
						el: ".swiper-pagination"
					}
        }
			}
		},
    components: {
			bigTitle
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
				if (!this.animateMap && (this.$refs.map.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.map.getBoundingClientRect().top))) {
					this.animateMap = true;
				}
				if (!this.animateMapTitle && (this.$refs.mapTitle.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.mapTitle.getBoundingClientRect().top))) {
					this.animateMapTitle = true;
				}
			},
    }
  };
</script>

<style scoped lang="scss">
	.studio {
		&__map {
			width: $common-width;
			margin: 0 auto;
			&__top {
				padding: 50px 0;
			}
			&__title {
				font-size: inherit;
				color: $color-primary;
			}
			&__bottom {
				padding: 20px 0 70px;
				height: 672px;
				&__img {
					@include imgBox(100%, 100%, contain);
				}
				&__font {
					color: $color-primary;
					position: absolute;
					cursor: pointer;
					transition: all 0.3s;
					&:hover {
						font-size: 30px !important;
						opacity: 1 !important;
						font-weight: bold;
						z-index: 1;
					}
				}
			}
		}
	}
</style>

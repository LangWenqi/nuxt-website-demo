<template>
  <div class="college__practice" ref="practice">
		<div class="college__practice__wrapper">
			<middle-title class="animated" :class="{'bounceInRight': animatePractice}">
				重实践&nbsp;&nbsp;重过程&nbsp;&nbsp;项目驱动
			</middle-title>
			<div class="college__practice__inner" flex="main:justify cross:top">
				<div class="college__practice__left animated" flex-box="0" :class="{'rollIn': animatePractice}">
					<img class="img" :src="practiceImg">
				</div>
				<div class="college__practice__right" flex-box="0" flex flex-wrap>
					<div class="college__practice__right__item" flex="cross:center" flex-box="0" :key="practiceIndex" v-for="(practiceItem, practiceIndex) in  practiceList">
						<div class="college__practice__right__img animated2" flex-box="0" :class="{'zoomIn': animatePractice}">
							<img class="img" :src="practiceItem.url">
						</div>
						<div class="college__practice__right__wrap">
							<div class="college__practice__right__title animated" flex="cross:center" :class="{'zoomInLeft': animatePractice}">
								<div class="college__practice__right__title_zh">{{practiceItem.zh}}</div>
								<div class="college__practice__right__title_en">{{practiceItem.en}}</div>
							</div>
							<div class="college__practice__right__content animated" :class="{'zoomInRight': animatePractice}">
								{{practiceItem.content}}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { practiceList } from '@/config/map';
	import middleTitle from '../middleTitle/middleTitle';
  export default {
		props: {
			practiceImg: {
				type: String,
				default: ''
			}
		},
		data () {
			return {
				animatePractice: false,
				practiceList
			}
		},
    components: {
			middleTitle
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
				if (!this.animatePractice && (this.$refs.practice.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.practice.getBoundingClientRect().top))) {
					this.animatePractice = true;
				}
			},
    }
  };
</script>

<style scoped lang="scss">
	.college__practice {
		height: 440px;
		background: #f8f9fb;
		&__wrapper {
			width: $common-width;
			height: 100%;
			margin: 0 auto;
		}
		&__inner {
		
		}
		&__left {
			box-shadow:5px 5px 10px -4px #E4E7ED;
			@include imgBox(355px,238px, cover, 6px);
		}
		&__right {
			width: 760px;
			padding: 40px 0 0;
			&__item {
				width: 330px;
				margin: 0 40px 45px 0;
			}
			&__img {
				width: 50px;
				height: 50px;
				position: relative;
				border: 1px solid #{$color-line};
				border-radius: 100%;
				margin-right: $margin-12;
				.img {
					width: $margin-24;
					height: $margin-24;
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
				}
			}
			&__title {
				padding: 0 0 6px;
				&_zh {
					font-size: $font-16;
					color: $color-gray;
					margin-right: 6px;
				}
				&_en {
					font-size: $font-16;
					color: #d1d5da;
					font-weight: bolder;
				}
			}
			&__content {
				font-size: $font-14;
				color: $color-gray;
				text-align: justify;
			}
		}
	}
</style>

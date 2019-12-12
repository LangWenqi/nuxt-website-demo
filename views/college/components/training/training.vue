<template>
  <div class="college__training" ref="training">
		<div class="college__training__wrapper">
			<middle-title class="animated" :class="{'bounceInLeft': animateTraining}" style="color:#fff">
			学练一体化平台
			</middle-title>
			<div class="college__training__list" flex="main:justify">
				<div class="college__training__item" :key="trainingIndex" v-for="(trainingItem, trainingIndex) in  trainingList">
					<div class="college__training__item__title animated" :class="{'bounceIn': animateTraining}">
						{{trainingItem.title}}
					</div>
					<div class="college__training__item__img animated" :class="{'zoomInDown': animateTraining}">
						<img class="img" :src="trainingItem.url">
					</div>
					<div class="college__training__item__content animated" :class="{'bounceIn': animateTraining}">
						{{trainingItem.content}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { trainingList } from '@/config/map';
	import middleTitle from '../middleTitle/middleTitle';
  export default {
		data () {
			return {
				trainingList,
				animateTraining: false
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
				if (!this.animateTraining && (this.$refs.training.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.training.getBoundingClientRect().top))) {
					this.animateTraining = true;
				}
			},
    }
  };
</script>

<style scoped lang="scss">
	.college__training {
		height: 500px;
		&__wrapper {
			background: $color-primary;
			height: 380px;
		}
		&__list {
			margin: 0 auto;
			width: $common-width;
		}
		&__item {
			border-radius: 4px;
			width: 384px;
			height: 360px;
			background: $color-white;
			box-shadow:0 10px 5px -5px $color-line;
			padding: $margin-24;
			&__img {
				@include imgBox(336px, 217px, cover, 4px);
			}
			&__title {
				padding-bottom: $margin-12;
				text-align: center;
				font-size: $font-16;
				color: $color-gray;
			}
			&__content {
				text-align: justify;
				padding-top: 8px;
				color: $color-gray;
				font-size: $font-14; 
			}
		}
	}
</style>

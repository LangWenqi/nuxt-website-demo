<template>
  <div class="home__method">
		<div ref="methodTitle">
			<middle-title class="animated" :class="{'bounceInRight': animateMethodTitle}">我们的6S教学方法</middle-title>
		</div>
		<div class="home__method__inner" ref="method">
			<div class="home__method__center animated1" :class="{'rotateIn': animateMethod}"></div>
			<div class="home__method__1 animated1" :class="{'slideInLeft': animateMethod}">
				<div class="home__method__font" style="text-align: right; padding-right: 0">
					分享作品的成就感，反省没有完成任务的挫
				</div>
				<div class="home__method__font" style="text-align: right; padding-right: 4px">
					败感，对其他孩子的作品进行互相评价和学习。
				</div>
			</div>
			<div class="home__method__2 animated1" :class="{'slideInRight': animateMethod}">
				<div class="home__method__font" style="text-align: left; padding-left: 0">
					即自我意识，个体对自己存在的觉
				</div>
				<div class="home__method__font" style="text-align: left; padding-left: 10px">
					察，包括对自己行为和心理状态的认知。
				</div>
			</div>
			<div class="home__method__3 animated1" :class="{'slideInLeft': animateMethod}">
				<div class="home__method__font" style="text-align: right;">
					丰富设计的外观造型，编程的二次创新等，比如
				</div>
				<div class="home__method__font" style="text-align: right;">
					为机器人增加LED灯、音乐卡、传感器等装置。
				</div>
			</div>
			<div class="home__method__4 animated1" :class="{'slideInRight': animateMethod}">
				<div class="home__method__font" style="text-align: left;">
					教师通过游戏、故事、语言、道具等形式，让孩
				</div>
				<div class="home__method__font" style="text-align: left;">
					子置身情景，激发学生探索思维和学习兴趣。
				</div>
			</div>
			<div class="home__method__5 animated1" :class="{'slideInLeft': animateMethod}">
				<div class="home__method__font" style="text-align: right; padding-right: 18px">
					了解设计原理、物理原理、编程思
				</div>
				<div class="home__method__font" style="text-align: right; padding-right: 0">
					维，加深对项目的理解和认知。
				</div>
			</div>
			<div class="home__method__6 animated1" :class="{'slideInRight': animateMethod}">
				<div class="home__method__font" style="text-align: left; padding-left: 10px">
					根据项目目标作好设计并开始进行创作，比如
				</div>
				<div class="home__method__font" style="text-align: left; padding-left: 0">
					对机器人的设计、组装、编程与运行等。
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import middleTitle from '../middleTitle/middleTitle';
  export default {
		data () {
			return {
				animateMethod: false,
				animateMethodTitle: false,
			}
		},
    components: {
			middleTitle,
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
				if (!this.animateMethod && (this.$refs.method.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.method.getBoundingClientRect().top))) {
					this.animateMethod = true;
				}
				if (!this.animateMethodTitle && (this.$refs.methodTitle.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.methodTitle.getBoundingClientRect().top))) {
					this.animateMethodTitle = true;
				}
			},
    }
  };
</script>

<style scoped lang="scss">
	@mixin methodFuc($num, $width, $height, $top: auto, $left: auto, $right: auto, $bottom: auto) {
		&__#{$num} {
			width: $width;
			height: $height;
			top: $top;
			left: $left;
			right: $right;
			bottom: $bottom;
			position: absolute;
		}
		@content;
	}
	.home__method {
		&__inner {
			width: $common-width;
			margin: 0 auto;
			height: 486px;
			position: relative;
		}
		&__center {
			width: 508px;
			height: 416px;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			margin: auto;
			background: url("../../../../images/method.png") no-repeat center center/contain;
		}
		&__font {
			font-size: $font-16;
			line-height: 1.7;
			color: $color-gray;
		}
		@include methodFuc(1, auto, auto, 15px, 80px);
		@include methodFuc(2, auto, auto, 15px, auto, 120px);
		@include methodFuc(3, auto, auto, 178px, 0);
		@include methodFuc(4, auto, auto, 178px, auto, 0);
		@include methodFuc(5, auto, auto, 346px, 170px);
		@include methodFuc(6, auto, auto, 346px, auto, 84px);
	}
</style>

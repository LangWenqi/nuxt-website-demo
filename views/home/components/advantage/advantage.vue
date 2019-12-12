<template>
  <div class="home__advantage">
		<div flex="main:center" ref="advantageTitle">
			<big-title class="animated" :class="{'bounceInLeft': animateAdvantageTitle}">我们的优势</big-title>
		</div>
		<div class="home__advantage__inner" ref="advantage">
			<div class="home__advantage__center animated1" :class="{'rotateIn': animateAdvantage}"></div>
			<div class="home__advantage__1 animated1" :class="{'slideInRight': animateAdvantage}"></div>
			<div class="home__advantage__2 animated1" :class="{'slideInLeft': animateAdvantage}"></div>
			<div class="home__advantage__3 animated1" :class="{'slideInRight': animateAdvantage}"></div>
			<div class="home__advantage__4 animated1" :class="{'slideInLeft': animateAdvantage}"></div>
			<div class="home__advantage__5 animated1" :class="{'slideInLeft': animateAdvantage}">
				<div class="home__advantage__font" style="text-align: right; padding-right: 0">
					经过美国十多家学校和数千名学生实地验证，采用美国STEAM教育
				</div>
				<div class="home__advantage__font" style="text-align: right; padding-right: 7px">
					模式和课件，并结合中国教学情况和学生特点；课程从K-12年龄
				</div>
				<div class="home__advantage__font" style="text-align: right; padding-right: 4px">
					段，形成从零基础培养学生思维到高阶实际应用的体系课程。
				</div>
			</div>
			<div class="home__advantage__6 animated1" :class="{'slideInRight': animateAdvantage}">
				<div class="home__advantage__font" style="text-align: left; padding-left: 0">
					采用学练一体化的云平台教学系统，采用最新技术实现高并发
				</div>
				<div class="home__advantage__font" style="text-align: left; padding-left: 7px">
					的音视频在线学习和应用练习，并能够实时跟踪学生学习
				</div>
				<div class="home__advantage__font" style="text-align: left; padding-left: 10px">
					和练习情况，利用大数据给予最匹配的学习和改进方案。
				</div>
			</div>
			<div class="home__advantage__7 animated1" :class="{'slideInLeft': animateAdvantage}">
				<div class="home__advantage__font" style="text-align: right; padding-right: 20px">
					凯蒙学院独创并利用6S教学方法，全方位一体化的培养
				</div>
				<div class="home__advantage__font" style="text-align: right; padding-right: 0">
					学生的综合素质和创新思维，充分体现STEAM精髓。
				</div>
			</div>
			<div class="home__advantage__8 animated1" :class="{'slideInRight': animateAdvantage}">
				<div class="home__advantage__font" style="text-align: left; padding-left: 24px">
					结合计算机科学教育、中美IT以及人力资源领域经营资
				</div>
				<div class="home__advantage__font" style="text-align: left; padding-left: 15px">
					源，提供从学龄前儿童到高等教育以及之后的职业生
				</div>
				<div class="home__advantage__font" style="text-align: left; padding-left: 0px">
					涯规划服务，给予学生最适合自身发展的职业路径。
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import bigTitle from '@/components/bigTitle/bigTitle';
  export default {
		data () {
			return {
				animateAdvantage: false,
				animateAdvantageTitle: false,
			}
		},
    components: {
			bigTitle,
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
				if (!this.animateAdvantage && (this.$refs.advantage.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.advantage.getBoundingClientRect().top))) {
					this.animateAdvantage = true;
				}
				if (!this.animateAdvantageTitle && (this.$refs.advantageTitle.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.advantageTitle.getBoundingClientRect().top))) {
					this.animateAdvantageTitle = true;
				}
			},
    }
  };
</script>

<style scoped lang="scss">
	@mixin advantageFuc($num, $width, $height, $top: auto, $left: auto, $right: auto, $bottom: auto) {
		&__#{$num} {
			width: $width;
			height: $height;
			top: $top;
			left: $left;
			right: $right;
			bottom: $bottom;
			position: absolute;
			@if $num <= 4 {
      	background: url("../../../../images/advantage#{$num}.png") no-repeat center center/contain;
			}
		}
		@content;
	}
	.home__advantage {
		&__inner {
			width: $common-width;
			margin: 60px auto;
			height: 352px;
			position: relative;
		}
		&__center {
			width: 362px;
			height: 352px;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			background: url("../../../../images/advantage0.png") no-repeat center center/contain;
		}
		&__font {
			font-size: $font-14;
			line-height: 1.7;
			color: $color-gray;
		}
		@include advantageFuc(1, 80px, 20px, 70px, 355px);
		@include advantageFuc(2, 80px, 20px, 70px, auto, 355px);
		@include advantageFuc(3, 102px, 20px, 208px, 310px);
		@include advantageFuc(4, 119px, 20px, 208px, auto, 286px);
		@include advantageFuc(5, auto, auto, 110px, 7px);
		@include advantageFuc(6, auto, auto, 110px, auto, 34px);
		@include advantageFuc(7, auto, auto, 246px, 86px);
		@include advantageFuc(8, auto, auto, 246px, auto, 82px);
	}
</style>

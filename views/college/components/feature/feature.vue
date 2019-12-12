<template>
  <div class="college__feature">
		<div flex="main:center" ref="featureTitle">
			<big-title class="animated" :class="{'bounceInLeft': animateFeatureTitle}">学院特色</big-title>
		</div>
		<div class="college__feature__wrapper"  ref="feature">
			<middle-title class="animated" :class="{'bounceInRight': animateFeature}">
				为您精心打造的课程体系
			</middle-title>
			<div class="college__feature__wrapper__btn_1 animated1" 
			:class="{'fadeInUpBig': animateFeature}">
				<div class="college__feature__wrapper__title">
					美国团队研发
				</div>
			</div>
			<div class="college__feature__wrapper__content_1 animated1"
			:class="{'flash': animateFeature}">
				美国团队与美国多所高校紧密合作，密切跟踪技术发展和教育理念最新状态，研发出体系化课程并在美国总部进行使用和迭代修订。
			</div>
			<div class="college__feature__wrapper__btn_2 animated1"
			:class="{'fadeInUpBig': animateFeature}">
				<div class="college__feature__wrapper__title">
					国内团队引进消化
				</div>
			</div>
			<div class="college__feature__wrapper__content_2 animated1"
			:class="{'flash': animateFeature}">
				国内团队及时引进美国团队研发的课程，并结合中国国情进行优化，输出适合中国学生特点的课程。
			</div>
			<div class="college__feature__wrapper__btn_3 animated1"
			:class="{'fadeInUpBig': animateFeature}">
				<div class="college__feature__wrapper__title">
					国内校本课程验证
				</div>
			</div>
			<div class="college__feature__wrapper__content_3 animated1"
			:class="{'flash': animateFeature}">
				与国内多所中小学建立了合作关系，采用引入的课程作为校本课程进行授课，锻炼老师，打造课程。
			</div>
			<div class="college__feature__wrapper__btn_4 animated1"
			:class="{'fadeInUpBig': animateFeature}">
				<div class="college__feature__wrapper__title">
					修订后固化
				</div>
			</div>
			<div class="college__feature__wrapper__content_4 animated1" 
			:class="{'flash': animateFeature}">
				结合校本课程验证情况，进行二次优化和修订，最终研发出一整套适社会化的课程体系。
			</div>
		</div>
	</div>
</template>

<script>
	import bigTitle from '@/components/bigTitle/bigTitle';
	import middleTitle from '../middleTitle/middleTitle';
  export default {
		data () {
			return {
				animateFeature: false,
				animateFeatureTitle: false,
			}
		},
    components: {
			bigTitle,
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
				if (!this.animateFeature && (this.$refs.feature.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.feature.getBoundingClientRect().top))) {
					this.animateFeature = true;
				}
				if (!this.animateFeatureTitle && (this.$refs.featureTitle.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.featureTitle.getBoundingClientRect().top))) {
					this.animateFeatureTitle = true;
				}
			},
    }
  };
</script>

<style scoped lang="scss">
	.college__feature {
		padding: 50px 0;
		&__wrapper {
			position: relative;
			width: $common-width;
			margin: 0 auto;
			height: 440px;
			background: url("../../../../images/fly.png") no-repeat center 70px/#{$common-width} 267px;
			@mixin btn ($num, $top, $left) {
				&__btn_#{$num} {
					width: 161px;
					height: 58px;
					background: url("../../../../images/feature#{$num}.png") no-repeat center center/contain;
					position: absolute;
					top: $top;
					left: $left;
				}
			}
			@mixin content ($num, $top, $left) {
				&__content_#{$num} {
					width: 161px;
					position: absolute;
					top: $top;
					left: $left;
					text-align: justify;
					font-size: $font-12;
					color: $color-gray;
					width: 161px;
				}
			}
			@include btn(1, 234px, 70px);
			@include btn(2, 144px, 360px);
			@include btn(3, 126px, 644px);
			@include btn(4, 30px, 924px);
			@include content(1, 356px, 70px);
			@include content(2, 266px, 360px);
			@include content(3, 246px, 644px);
			@include content(4, 150px, 924px);
			&__title {
				font-size: $font-16;
				color: $color-white;
				text-align: center;
				line-height: 54px;
				width: 100%;
				height: 54px;
			}
		}
	}
</style>

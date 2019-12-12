<template>
  <div class="home__top" flex="cross:center">
		<div class="home__top__wrapper" flex="cross:center" flex-box="1">
			<div class="home__top__left" flex-box="0">
				<div class="home__top__left__line"></div>
				<div class="home__top__left__video animated" :class="{'shake': animatePlay}">
					<video style="width: 100%; height: 100%" ref="mainVideo" muted :poster="mainVideoCover" controls="controls"  :src="mainVideoSrc"></video>
					<!-- <div class="home__play_big el-icon-video-play"></div> -->
				</div>
			</div>
			<div class="home__top__right" flex-box="1">
				<div class="home__top__right__title">
					<big-title class="animated" :class="{'bounceInRight': animatePlay}">关于我们</big-title>
				</div>
				<!-- <div class="home__top__right__content" v-html="mainContent"> -->
				<div class="home__top__right__content">
					&nbsp;&nbsp;&nbsp;&nbsp;学锋教育是浙数文化和边锋集团旗下的教育品牌，是一家专业从事学生综合素质和品格能力培养的教育机构。<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;学锋教育包含三大服务主体：凯蒙学院（Caml Academy），青少年计算机科学基础教育和STEAM跨学科学习（学锋在线）；“锋”游学（Pioneer Study Tour），国际游学、个性化定制游学服务；未来工作室（Future Studio），留学生涯以及职业生涯辅导。<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;学锋教育结合优质国际教育资源、中国国情以及教育文化传统，以培养学生全球化竞争优势为目标，致力于通过STEAM课程和项目制学习（Problem Based Learning）和其它国际化视野开拓项目来促进中国学生的综合素质、人格以及能力，为学生未来进入世界知名大学进修打下良好的基础
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import bigTitle from '@/components/bigTitle/bigTitle';
  export default {
		props: {
			mainVideoCover: {
				type: String,
				default: ''
			},
			mainVideoSrc: {
				type: String,
				default: ''
			},
			mainContent: {
				type: String,
				default: ''
			}
		},
		data () {
			return {
				
				showPlay: true,
				animatePlay: false,
			}
		},
    components: {
			bigTitle,
    },
    mounted () {
			this.listenVideo();
			this.initScroll();
			window.addEventListener('scroll', this.initScroll);
    },
		destroyed () {
			window.removeEventListener('scroll', this.initScroll);
		},
    methods: {
			initScroll () {
				if (this.showPlay && (this.$refs.mainVideo.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.mainVideo.getBoundingClientRect().top))) {
					this.playMainVideo();
					this.animatePlay = true;
				}
			},
			listenVideo () {
				this.$refs.mainVideo.onended = () => {
					// this.showPlay = true;
				}
			},
			playMainVideo () {
				this.showPlay = false;
				this.$refs.mainVideo.play();
			},
    }
  };
</script>

<style scoped lang="scss">
	.home__top {
		width: $common-width;
		background: #fff;
		border-radius: 10px;
		box-shadow:-5px 5px 10px -4px $color-line,5px 5px 10px -4px $color-line;
		margin: -1rem auto 0;
		height: 380px;
		position: relative;
		z-index: 1;
		&__wrapper {
			height: 320px;
			padding: 0 $margin-24;
		}
		&__left {
			position: relative;
			height: 100%;
			width: 518px;
			z-index: 0;
			&__line {
				background: $color-yellow;
				width: 40px;
				height: 100%;
			}
			&__video {
				@include imgBox(498px, 280px, cover);
				position: absolute;
				z-index: 1;
				background: $color-black-9;
				left: 20px; 
				top: 0;
				bottom: 0;
				margin: auto;
			}
		}
		&__right {
			padding-left: 26px;
			position: relative;
			height: 280px;
			width: 0;
			background: url("../../../../images/ABOUT_US.png") no-repeat left top/357px 66px;
			&__title {
				padding: 30px 0 12px;
			}
			&__content {
				line-height: 1.8;
				text-align: justify;
				font-size: 14px;
				color: $color-gray;
			}
		}
	}
</style>

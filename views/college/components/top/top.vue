<template>
  <div class="college__top">
		<div class="college__top__wrapper" flex flex-box="1">
			<div class="college__top__left" flex-box="0">
				<div class="college__top__left__line"></div>
				<div class="college__top__left__video animated" :class="{'shake': animatePlay}">
					<video style="width: 100%; height: 100%" ref="mainVideo" muted :poster="mainVideoCover" controls="controls"  :src="mainVideoSrc"></video>
					<!-- <div class="college__play_big el-icon-video-play"></div> -->
				</div>
			</div>
			<div class="college__top__right" flex-box="1">
				<div class="college__top__right__title">
					<big-title class="animated" :class="{'bounceInRight': animatePlay}">凯蒙学院简介</big-title>
				</div>
				<div class="college__top__right__content">
						&nbsp;&nbsp;&nbsp;&nbsp;凯蒙教育学院成立于2015年，是美国北卡三角科技园区最早做少儿编程的教育学院。其K12计算机科学及编程体系化课程是基于美国十多年历史的教学大纲编写，为美国43个州采用，并被9个州作为中小学的必修课程。从成立以来，先后服务北卡三角科技园区近2000名美国本地学生，并为RTP地区15所中小学输送以计算机科学为主的STEAM课程及教师培训。历时5年研发的在线计算机科学教育课程面向全美授课。<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;我们的兴趣编程课以音乐，艺术，时装设计，游戏创作，体育，机器人，APP设计等为主题，针对孩子的兴趣充分调动他们的学习兴趣，提高效率，并且将学习当作一件快乐的事情来做。通过“主题+兴趣”的全真美国课堂课，学生在学习STEAM的同时也学习了英语，让你足不出户，享受真实的美国中小学课堂教学。同时我们提供课程的中文字幕，帮助英文需要提高的学生毫无阻碍的学习我们的课程。<br/>
       			&nbsp;&nbsp;&nbsp;&nbsp;自2018年起，美国凯蒙学院应中国培训机构和学校的要求，开始为中国学生提供由美国本土老师开发的K-12全英文计算机科学和编程课程，幼儿园及中小学STEAM课程和教师培训。
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
				default () {
					return ''
				}
			},
			mainVideoSrc: {
				type: String,
				default () {
					return ''
				}
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
	.college__top {
		width: $common-width;
		background: #fff;
		border-radius: 10px;
		box-shadow:-5px 5px 10px -4px $color-line,5px 5px 10px -4px $color-line;
		margin: -1rem auto 0;
		position: relative;
		z-index: 1;
		&__wrapper {
			height: 360px;
			padding: 30px $margin-24;
		}
		&__left {
			position: relative;
			height: 100%;
			width: 518px;
			z-index: 0;
			&__line {
				background: $color-yellow;
				width: 488px;
				height: 270px;
				margin: 30px 0 0 30px;
			}
			&__video {
				@include imgBox(498px, 280px, cover);
				position: absolute;
				z-index: 1;
				background: $color-black-9;
				left: 0; 
				top: 0;
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
				font-size: 12px;
				color: $color-gray;
			}
		}
	}
</style>

<template>
  <div class="home__show">
		<div flex="main:center" ref="animateShowTitle">
			<big-title class="animated" :class="{'bounceInLeft': animateShowTitle}">课程展示</big-title>
		</div>
		<div class="home__show__list" ref="animateShow" flex="main:justify">
			<div class="home__show__item animated"  :class="{'fadeInUpBig': animateShow}" v-for="courseItem in courseList" :key="courseItem.id" @click="playVideo(courseItem.attribute.video_path, courseItem.thumb)">
				<img class="img" :src="courseItem.thumb">
				<div class="home__play el-icon-video-play"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import bigTitle from '@/components/bigTitle/bigTitle';
  export default {
		props: {
			courseList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data () {
			return {
				animateShow: false,
				animateShowTitle: false
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
				if (!this.animateShow && (this.$refs.animateShow.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.animateShow.getBoundingClientRect().top))) {
					this.animateShow = true;
				}
				if (!this.animateShowTitle && (this.$refs.animateShowTitle.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.animateShowTitle.getBoundingClientRect().top))) {
					this.animateShowTitle = true;
				}
			},
      playVideo (videoSrc, videoCover) {
				console.log(videoSrc, videoCover);
				if (!videoSrc) return;
        this.$emit('play', videoSrc, videoCover);
      },
    }
  };
</script>

<style scoped lang="scss">
  
	.home__play {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 60px;
		height: 60px;
		font-size: 60px;
		color: $color-white;
		&_big {
			@extend .home__play;
			width: 90px;
			height: 90px;
			font-size: 90px;
		}
	}
	.home__show__list {
		width: $common-width;
		margin: 0 auto;
		padding: 40px 0 80px;
	}
	.home__show__item {
		@include imgBox(282px, 170px, cover, 4px);
		background: $color-black-9;
	}
</style>

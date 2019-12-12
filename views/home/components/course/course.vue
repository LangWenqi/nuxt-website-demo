<template>
  <div class="home__course">
		<div flex="main:center" ref="animateCourseTitle">
			<big-title class="animated" :class="{'bounceInRight': animateCourseTitle}">我们的课程</big-title>
		</div>
		<div class="home__course__list" flex="cross:center" ref="animateCourse">
			<div class="home__course__item" flex-box="1" v-for="courseTypeItem in courseTypeList" :key="courseTypeItem.name">
				<div class="home__course__item__img animated1" :class="{'zoomInDown': animateCourse}">
					<img class="img" :src="courseTypeItem.url">
				</div>
				<div class="home__course__item__font animated" :class="{'flipInY': animateCourse}">{{courseTypeItem.content}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import bigTitle from '@/components/bigTitle/bigTitle';
	import { courseTypeList } from '@/config/map';
  export default {
		data () {
			return {
				animateCourseTitle: false,
				animateCourse: false,
				courseTypeList
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
				if (!this.animateCourse && (this.$refs.animateCourse.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.animateCourse.getBoundingClientRect().top))) {
					this.animateCourse = true;
				}
				if (!this.animateCourseTitle && (this.$refs.animateCourseTitle.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.animateCourseTitle.getBoundingClientRect().top))) {
					this.animateCourseTitle = true;
				}
			},
    }
  };
</script>

<style scoped lang="scss">
	.home__course {
		&__list {
			width: $common-width;
			margin: 60px auto;
		}
		&__item {
			padding: $margin-24 0;
			width: 0;
			border-right: 1px solid $color-line;
			&:nth-last-child(1) {
				border-right: none
			}
			&__img {
				@include imgBox(130px, 130px, contain);
				margin: 0 auto;
			}
			&__font {
				text-align: center;
				padding: $margin-24 $margin-12 0;
				color: $color-gray;
			}
		}
	}
</style>

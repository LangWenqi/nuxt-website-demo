<template>
  <div class="home__why">
		<div class="home__why__container">
				<div class="home__why__wrapper">
					<div ref="animateWhy">
						<div flex class="home__why__inner">
							<div flex-box="0" class="home__why__title animated" :class="{'fadeInLeft': animateWhy}">
								<big-title color="#fff" font="20px" line="4px">STEM</big-title>
							</div>
							<div class="home__why__content animated" :class="{'fadeInRight': animateWhy}">多学科融合的学生综合素质教育，美国政府从上世纪80年代开始的国家级战略教育和科技振兴计划；全面提高学生的创新思维能力，以及团队合作、批判思维、问题解决、领导力和沟通等素质能力</div>
						</div>
						<div flex class="home__why__inner">
							<div class="home__why__title animated" :class="{'fadeInLeft': animateWhy}">
								<big-title color="#fff" font="20px" line="4px">STEAM</big-title>
							</div>
							<div class="home__why__content animated" :class="{'fadeInRight': animateWhy}">加入了艺术的跨学科综合教育，STEAM将STEM提升到一个新的水平。</div>
						</div>
						<div class="home__why__inner">
							<div class="home__why__content animated" :class="{'fadeInLeft': animateWhy}">
								&nbsp;&nbsp;&nbsp;&nbsp;一直以来，我们努力推行传统教学以确保我们的学生获得“好成绩和好工作”。但实际上，我们为学生准备的只是那些已经落伍且工作中不再需要的知识。而STEAM课程中的学生创新思维、团队合作、批判思维、问题解决、领导力和沟通等素质模型和能力的培养方式，可以帮助学生有效的提升资深的综合素质，以确保学生未来具备全球化的竞争优势。
							</div>
						</div>
						<div class="home__why__inner">
							<div class="home__why__content animated" :class="{'fadeInRight': animateWhy}">
								&nbsp;&nbsp;&nbsp;&nbsp;为此，学锋教育始终在不断优化和迭代STEAM相关的课程体系。现联手美国凯蒙学院，选定美国CSTA K12标准作为课程设计参考标准，自主研发了一套适用于中国学生的计算机科学基础教育课程。
							</div>
						</div>
					</div>
					<div class="home__why__list" ref="animateWhyList" flex="main:justify cross:center">
						<div class="home__why__item" @click="navigateTo(whyItem)" flex-box="0" :key="whyItem.id" v-for="whyItem in whyList">
							<div class="home__why__item__img animated" :class="{'zoomInLeft': animateWhyList}">
								<img class="img" :src="whyItem.thumb">
							</div>
							<div class="home__why__item__font animated" :class="{'zoomInRight': animateWhyList}">{{whyItem.title}}<i class="el-icon-right home__why__item__icon"></i></div>
						</div>
					</div>
				</div>
		</div>
	</div>
</template>

<script>
	import bigTitle from '@/components/bigTitle/bigTitle';
	import { categorys } from '@/config/map';
  export default {
		props:{
			whyList: {
				type: Array,
				default () {
					return [];
				}
			}
		},
		data () {
			return {
				animateWhy: false,
				animateWhyList: false
			}
		},
    components: {
			bigTitle
    },
    mounted () {
			console.log('whyList', this.whyList);
			this.initScroll();
			window.addEventListener('scroll', this.initScroll);
    },
		destroyed () {
				window.removeEventListener('scroll', this.initScroll);
		},
    methods: {
			initScroll () {
				if (!this.animateWhy && (this.$refs.animateWhy.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.animateWhy.getBoundingClientRect().top))) {
					this.animateWhy = true;
				}
				if (!this.animateWhyList && (this.$refs.animateWhyList.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.animateWhyList.getBoundingClientRect().top))) {
					this.animateWhyList = true;
				}
			},
			navigateTo (item) {
				if (item.is_link + '' !== '1') {
					if (item.category[0] + '' === categorys.welfare + '') {
						this.$router.push({path: `/welfare/${item.id}`});
					} else if (item.category[0] + '' === categorys.information + '') {
							this.$router.push({path: `/information/${item.id}`});
					}
				} else if (item.link) {
					window.open(item.link);
				}
			}
    }
  };
</script>

<style scoped lang="scss">
	.home__why {
		height: 620px;
		&__container{
			height: 496px;
			background: $color-primary;
		}
		&__wrapper {
			width: $common-width;
			margin: 0 auto;
			height: 100%;
			padding-top: 40px; 
		}
		&__inner {
			padding: $margin-12 0 0;
		}
		&__title {
			width: 100px;
		}
		&__content {
			font-size: $font-16;
			color: $color-white;
			line-height: 1.7;
			text-align: justify;
		}
		&__list {
			padding: 40px 0 0;
		}
		&__item {
			width: 384px;
			height: 200px;
			padding: 6px 6px 0;
			border-radius: 2px; 
			background: $color-white;
			box-shadow:0 10px 5px -5px $color-line;
			color: $color-gray;
			cursor: pointer;
			&__img {
				@include imgBox(372px, 149px, cover);
			}
			&__font {
				font-size: $font-16;
				height: 45px;
				line-height: 45px;
				padding: 0 8px;
				color: inherit;
			}
			&:hover {
				color: $color-primary;
				text-decoration: underline;
			}
			&__icon {
				margin-left: $margin-12;
				font-size: $font-16; 
			}
		}
	}
</style>

<template>
  <div class="college__mien">
		<div flex="main:center" ref="mienTitle">
			<big-title class="animated" :class="{'bounceInRight': animateMienTitle}">凯蒙风采</big-title>
		</div>
		<div class="college__mien__wrapper" flex="main:justify" ref="mien">
			<div class="college__mien__left" flex-box="0" flex="dir:top main:justify">
				<div class="college__mien__left__top" flex="main:justify">
					<div class="college__mien_small" flex-box="0">
						<img v-if="mienList[0]" class="img" :src="mienList[0].previewImage" >
					</div>
					<div class="college__mien_small" flex-box="0">
						<img v-if="mienList[1]" class="img" :src="mienList[1].previewImage" >
					</div>
				</div>
				<div class="college__mien__left__bottom">
					<div class="college__mien_big" flex-box="0">
						<img v-if="mienList[4]" class="img" :src="mienList[2].previewImage" >
					</div>
				</div>
			</div>
			<div class="college__mien__right" flex-box="0" flex="dir:top main:justify">
				<div class="college__mien__right__top" flex="main:justify">
					<div flex-box="0" flex="dir:top main:justify">
						<div class="college__mien_small" flex-box="0">
							<img v-if="mienList[2]" class="img" :src="mienList[3].previewImage" >
						</div>
						<div class="college__mien_small" flex-box="0">
							<img v-if="mienList[5]" class="img" :src="mienList[4].previewImage" >
						</div>
					</div>
					<div flex-box="0" class="college__mien_middle">
						<img v-if="mienList[3]" class="img" :src="mienList[5].previewImage" >
					</div>
				</div>
				<div class="college__mien__right__bottom" flex="main:justify">
					<div class="college__mien_small" flex-box="0">
						<img v-if="mienList[6]" class="img" :src="mienList[6].previewImage" >
					</div>
					<div class="college__mien_small" flex-box="0">
						<img v-if="mienList[7]" class="img" :src="mienList[7].previewImage" >
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import bigTitle from '@/components/bigTitle/bigTitle';
  export default {
		props: {
			mienList: {
				type: Array,
				default () {
					return [];
				}
			}
		},
		data () {
			return {
				animateMien: false,
				animateMienTitle: false,
			}
		},
    components: {
			bigTitle
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
				if (!this.animateMien && (this.$refs.mien.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.mien.getBoundingClientRect().top))) {
					this.animateMien = true;
				}
				if (!this.animateMienTitle && (this.$refs.mienTitle.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.mienTitle.getBoundingClientRect().top))) {
					this.animateMienTitle = true;
				}
			},
    }
  };
</script>

<style scoped lang="scss">
	@mixin scale3d () {
		cursor: pointer;
		transition: transform 0.5s; 
		&:hover {
			transform: scale3d(1.2, 1.2, 1.2);
			z-index: 3;
		}
	}
	.college__mien {
		padding: 50px 0;
		&__wrapper {
			width: $common-width;
			margin: 0 auto;
			padding: 40px 0 0;
		}
		&__left {
			height: 597px;
			width: 594px;
			&__top {
				width: 594px;
				height: 191px;
			}
			&__bottom {
				width: 594px;
				height: 394px;
			}
		}
		&__right {
			height: 597px;
			width: 594px;
			&__top {
				height: 394px;
				width: 594px;
			}
			&__bottom {
				width: 594px;
				height: 191px;
			}
		}
		&_small {
			@include imgBox(291px, 191px, cover);
			background: $color-line;
			.img {
				@include scale3d();
			}
		}
		&_middle {
			@include imgBox(291px, 394px, cover);
			background: $color-line;
			.img {
				@include scale3d();
			}
		}
		&_big {
			@include imgBox(594px, 394px, cover);
			background: $color-line;
			.img {
				@include scale3d();
			}
		}
	}
</style>

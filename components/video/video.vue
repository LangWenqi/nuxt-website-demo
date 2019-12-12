<template>
	<div v-if="visible">
		<div class="video__container">
			<div class="video__wrapper">
				<div class="video__title">{{title}}</div>
				<video style="width: 100%; height: 540px" v-if="cover" :poster="cover" controls="controls" autoplay :src="src"></video>
				<video style="width: 100%; height: 540px" v-else  controls="controls" autoplay :src="src"></video>
				<i class="video__close el-icon-close" @click="closeVideo"></i>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
		props: {
			title: {
				default: '',
				type: String
			},
			src: {
				default: '',
				type: String
			},
			cover: {
				default: '',
				type: String
			},
			visible: {
				default: false,
				type: Boolean
			}
		},
		data() {
			return {
				
			}
		},
    components: {
    },
    mounted () {
    },
    methods: {
      closeVideo () {
				this.$emit('update:visible', false);
			}
    }
  };
</script>

<style scoped lang="scss">
  .video__container {
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: $color-black-wrapper;
	}
	.video__wrapper {
		background: $color-black;
		width: 960px;
		height: 580px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto; 
	}
	.video__title {
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: $font-14;
		color: $color-white;
	}
	.video__close {
		position: absolute;
		top: 7px;
		right: 8px;
		font-size: $margin-24;
		color: $color-white;
	}
</style>

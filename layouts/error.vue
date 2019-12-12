<template>
  <div class="error__container">
    <div v-if="error.statusCode === 404">
			<div class="img-404"></div>
			<div class="error__font">
				页面不存在
			</div>
    </div>
    <div v-else>
			<div class="img-error"></div>
			<div class="error__font">
				应用发生错误异常
			</div>
    </div>
		<div class="error__btn" flex="main:center">
			<el-button @click="back">返回上一页</el-button>
			<el-button @click="backHome" type="primary">返回首页</el-button>
		</div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'blog', // 你可以为错误页面指定自定义的布局
    methods: {
      back () {
				this.$router.go(-1);
			},
			backHome () {
				this.$router.replace({path: '/home'});
			}
    }
  };
</script>

<style scoped lang="scss">
	.error__container {
		position: fixed;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%)
	}
	.img-404 {
		width: 300px;
		height: 300px;
		background: url("../images/404.png") no-repeat center center/contain;
	}
	.img-error {
		width: 300px;
		height: 300px;
		background: url("../images/error.png") no-repeat center center/contain;
	}
	.error__font {
		color: $color-gray;
		font-size: $font-20;
		padding: $margin-12 0 0;
		text-align: center;
		font-weight: bolder;
	}
	.error__btn {
		padding: $margin-24 0 0;
	}
</style>

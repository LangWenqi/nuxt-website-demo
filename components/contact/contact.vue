<template>
	<div class="contact">
		<div class="qq" @click="showCopy('QQ', '2645765344')"></div>
		<div class="wechat" @click="showCopy('微信', '微信')"></div>
		<div class="phone" @click="showCopy('电话', '021-6100-5055 转 6410')"></div>
		<div class="back cursor" @click="toScrollTop"></div>
	</div>
</template>

<script>
  export default {
		props: {
			
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
      toScrollTop () {
				this.$emit('on-scroll-top');
			},
			showCopy (title, content) {
				this.$confirm(content, title, {
					showCancelButton: false,
          confirmButtonText: '复制',
        }).then(() => {
         	this.doCopy(content);
					this.$message({
						type: 'success',
						message: `复制成功`
					});
        }).catch(() => {
        });;
			},
			doCopy (content) {
				let oInput = document.createElement('input')
        oInput.value = content;
        document.body.appendChild(oInput)
        oInput.select()
        document.execCommand('Copy')
        oInput.style.display = 'none'
        document.body.removeChild(oInput)
			}
    }
  };
</script>

<style scoped lang="scss">
  .contact {
		position: fixed;
		bottom: 12%;
		right: $margin-24;
		z-index: 7;
		height: 230px;
		margin: auto;
	}
	@mixin item ($name) {
		border-radius: 4px; 
		width: 50px;
		height: 50px;
		margin-bottom: 6px;
		border: 1px solid #e3e5e8;
		cursor: pointer; 
		background: #fff url("../../images/#{$name}.png") no-repeat center center/30px 30px;
	}
	.qq {
		@include item(qq);
	}
	.wechat {
		@include item(wechat);
	}
	.phone {
		@include item(phone);
	}
	.back {
		margin-top: $margin-12;
		width: 50px;
		height: 50px;
		border-radius: 4px; 
		background: rgba(0, 0, 0, 0.1) url("../../images/backTop.png") no-repeat center center/17px 10px;
	}
</style>

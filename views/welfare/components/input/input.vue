<template>
  <div class="welfare__input__outer" flex="cross:center">
			<input type="text"  class="welfare__input__inner" autofocus v-model="inputValue" @keyup.prevent="search" placeholder="请输入" flex-box="1">
			<i class="el-icon-search welfare__input__icon" flex-box="0" @click="doSearch"></i>
	</div>
</template>

<script>
  export default {
		props: {
			value: {
				type: String,
				default: ''
			}
		},
		data () {
			return {
				
			}
		},
    components: {
    },
    mounted () {
			
    },
		destroyed () {
		},
		computed: {
			inputValue: {
				get () {
					return this.value;
				},
				set (val) {
					this.$emit('input', val);
				}
			}
		},
    methods: {
			search (event) {
				if (event.keyCode + '' === '13') {
					this.doSearch();
				}
			},
			doSearch () {
				this.$emit('on-search');
			}
    }
  };
</script>

<style scoped lang="scss">
	.welfare__input__outer {
		width: 324px;
		height: 40px;
		background: #e3e6ec;
		border-radius:40px;
		overflow: hidden;
	}
	.welfare__input__inner {
		display: block;
		width: 0;
		height: 100%;
		padding: 0 0 0 $margin-24;
		color: $color-black-3;
		font-size: $font-16;
	}
	.welfare__input__icon {
		margin: 0 $margin-12;
		font-size: $font-16;
		color: $color-gray;
	}
</style>

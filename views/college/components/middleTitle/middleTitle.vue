<template>
  <div class="college__title">
		<slot></slot>
	</div>
</template>

<script>
  export default {
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
    methods: {
			
    }
  };
</script>

<style scoped lang="scss">
	.college__title {
		text-align: center;
		color: $color-primary;
		padding: 40px 0;
		font-size: 26px;
	}
</style>

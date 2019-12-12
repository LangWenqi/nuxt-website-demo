<template>
	<div class="big__title" :style="{'font-size': font, color: color}">
		<slot></slot>
		<div class="big__title__line" :style="{height: line, bottom: line}"></div>
	</div>
</template>

<script>
  export default {
		props: {
			font: {
				default: '30px',
				type: String
			},
			color: {
				default: '#535d72',
				type: String
			},
			line: {
				default: '6px',
				type: String
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
     
    }
  };
</script>

<style scoped lang="scss">
  .big__title {
		position: relative;
		color: #535d72;
		font-size: 30px;
		display: inline-block;
		font-weight: bolder;
		z-index: 0;
		&__line {
			background: $color-yellow;
			height: 6px;
			position: absolute;
			bottom: 6px;
			left: 0;
			right: 0;
			border-radius: 3px;
			z-index: -1;
		}
	}
</style>

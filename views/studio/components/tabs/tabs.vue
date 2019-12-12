<template>
  <div class="studio__tabs" ref="tabs">
		<div class="studio__tabs__wrap" flex="main:justify cross:center">
			<div class="studio__tabs__item_1 animated" flex-box="0" :class="{'fadeInDown': animateTab}" flex="main:center cross:center">
				<span class="studio__tabs__font animated" :class="{'fadeInUp': animateTab}">立足教育</span>
			</div>
			<div class="studio__tabs__item_2 animated" flex-box="0" :class="{'fadeInUp': animateTab}" flex="main:center cross:center">
				<span class="studio__tabs__font animated" :class="{'fadeInDown': animateTab}">创造价值</span>
			</div>
			<div class="studio__tabs__item_3 animated" flex-box="0" :class="{'fadeInDown': animateTab}" flex="main:center cross:center">
				<span class="studio__tabs__font animated" :class="{'fadeInUp': animateTab}">个性服务</span>
			</div>
			<div class="studio__tabs__item_4 animated" flex-box="0" :class="{'fadeInUp': animateTab}" flex="main:center cross:center">
				<span class="studio__tabs__font animated" :class="{'fadeInDown': animateTab}">着眼未来</span>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
		props: {
			
		},
		data () {
			return {
				animateTab: false,
			}
		},
    components: {
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
				if (!this.animateTab && (this.$refs.tabs.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.tabs.getBoundingClientRect().top))) {
					this.animateTab = true;
				}
			},
    }
  };
</script>

<style scoped lang="scss">
	@mixin studioItem ($num) {
		&__item_#{$num} {
			color: $color-white;
			font-size: 30px;
			width: 282px;
			height: 100%;
			border-radius: 4px;
			background: url("../../../../images/studio#{$num}.png") no-repeat center center/cover;
			box-shadow:5px 5px 10px -4px #E4E7ED;
		}
	}
	.studio__tabs {
		width: $common-width;
		margin: 0 auto;
		padding: 60px 0 40px;
		&__wrap {
			height: 129px;
		}
		&__font {
			font-size: inherit;
		}
		@for $i from 1 through 4 {
			@include studioItem($i);
		}
	}
</style>

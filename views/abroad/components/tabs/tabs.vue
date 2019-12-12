<template>
  <div class="abroad__tabs">
		<div class="abroad__tabs__wrapper" flex="cross:center">
			<div flex="main:center cross:center" :class="['abroad__tabs__tab', { 'abroad__tabs__tab_focus': nowIndex === tabIndex}]" flex-box="0" @click="changeTab(tabIndex)" :key="tabItem.id" v-for="(tabItem, tabIndex) in tabList">
				{{tabItem.name}}
			</div>
		</div>
	</div>
</template>

<script>
  export default {
		props: {
			nowIndex: {
				type: Number,
				default: 0
			},
			tabList: {
				type: Array,
				default () {
					return [];
				}
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
    methods: {
			changeTab (index) {
				if (index === this.nowIndex) return;
				this.$emit('on-change-tab', index);
			}
    }
  };
</script>

<style scoped lang="scss">
	.abroad__tabs {
		height: 70px;
		background: $color-white;
		&__wrapper {
			width: $common-width;
			margin: 0 auto;
			height: 100%;
		}
		&__tab {
			padding: 0 $margin-24;
			margin: 0 $margin-24;
			height: 34px;
			color: $color-black-3;
			cursor: pointer;
			&_focus {
				border-radius:34px;
				background: $color-primary;
				color: $color-white; 
			}
		}
	}
	
</style>

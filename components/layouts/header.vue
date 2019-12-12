<template>
  <div class="header__container" :style="{'background': $route.meta.titlebgColor || ''}">
    <div class="header__wrapper" flex="main:justify cross:center">
			<div class="header__logo" v-if="$route.meta.titleImgType === '1'"></div>
			<div class="header__logo header__logo_focus" v-else></div>
			<div class="header__navs" flex="cross:center">
				<div flex="cross:center" :class="['header__nav', 'cursor', { 'header__nav_focus': getFocus(menu)}]" :key="menu.id" v-for="(menu) in menus">
					<el-dropdown v-if="menu.child && menu.child.length > 0">
						<span >
							<span @click="changePath(menu)" :class="['header__nav__name', { 'header__nav__name_focus': getFocus(menu)}]" :style="{'color': $route.meta.titleColor ? getFocus(menu) ? $route.meta.titleFocusColor : $route.meta.titleColor : ''}">
								{{menu.title}}
							</span>
							<i :class="['header__nav__icon', 'el-icon-arrow-down', 'el-icon--right', { 'header__nav__icon_focus': getFocus(menu) }]" :style="{'color': $route.meta.titleColor ? getFocus(menu) ? $route.meta.titleFocusColor : $route.meta.titleColor : ''}"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item v-for="(item) in menu.child" :key="item.id">
								<div :class="['header__nav__drop-item', {'header__nav__drop-item_focus': item.path === $route.path}]" @click="changePath(item)">
									{{item.title}}
								</div>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<span v-else @click="changePath(menu)" :class="['header__nav__name', { 'header__nav__name_focus': getFocus(menu)}]" :style="{'color': $route.meta.titleColor ? getFocus(menu) ? $route.meta.titleFocusColor : $route.meta.titleColor : ''}">
						{{menu.title}}
					</span>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	import { isUrl } from '@/utils';
	import { menuType } from '@/config/map';
  export default {
		props: {
			menus: {
				default () {
					return [];
				},
				type: Array
			}
		},
		data() {
			return {
				menuType
			}
		},
    components: {
    },
    mounted () {
			console.log('menus', this.menus);
    },
    methods: {
			getFocus(menu) {
				return (menu.link && (menu.link_type !== menuType.link) && this.$route.path.indexOf(menu.link) > -1) || ((menu.child && menu.child.findIndex(item => (item.link && item.link_type !== menuType.link && this.$route.path.indexOf(item.link) > -1 ))) > -1);
			},
			changePath (item) {
				if ((!item.link) || (item.child && item.child.length >0)) return;
				if (item.link_type === menuType.link || isUrl(item.link)) {
					window.open(item.link);
				} else {
					this.$router.push(item.link);
				}
			}
    }
  };
</script>

<style scoped lang="scss">
  .header__container {
		height: $padding-header;
		background: #ffffff;
		position: absolute;
		top:0;
		left:0;
		right:0;
		min-width: $common-width;
		z-index: 11;
	}
	.header__wrapper {
		width: $common-width;
		height: 100%;
		margin: 0 auto;
	}
	.header__logo {
		height: 50px;
		width: 120px;
		background: url("../../images/logo.png") no-repeat center center/contain;
		&_focus {
			background: url("../../images/logo2.png") no-repeat center center/contain;
		}
	}
	.header__navs {
		height: 100%;
	}
	.header__nav {
		height: 100%;
		padding: 0 36px;
		opacity: 0.7;
		&__drop-item {
			font-size: $font-14;
			&_focus {
				color: $color-primary;
			}
		}
		&__icon {
			color: $color-black-3;
			&_focus {
				color: $color-primary;
			}
		}
		&__name {
			font-size: $font-14;
			color: $color-black-3;
			&:hover {
				text-decoration: underline;
			}
			&_focus {
				color: $color-primary;
			}
		}
		&_focus {
			opacity: 1;
		}
	}
</style>

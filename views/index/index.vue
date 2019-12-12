<template>
  <div class="container">
		<div ref="top"></div>
		<v-header :menus="menus"/>
		<div class="wrapper" :style="{'padding-top': $route.meta.padding || '', 'background': $route.meta.bodyColor || ''}">
    	<nuxt-child/>
		</div>
		<v-contact @on-scroll-top="toScrollTop"/>
		<v-footer :cooperation="cooperation"/>
  </div>
</template>

<script>
	import vHeader from '@/components/layouts/header';
	import vContact from '@/components/contact/contact';
	import vFooter from '@/components/layouts/footer';
	import { getNavigation, getCooperation } from '@/api/common';
  export default {
    components: {
			vHeader,
			vFooter,
			vContact
    },
		data () {
			return {
				menus: [],
				cooperation: {}
			}
		},
		async asyncData ({ app, params, query, $axios }) {
      const [data1, data2] = await Promise.all([getNavigation(app._axios, {}), getCooperation(app._axios, {})]);
      return { menus: data1 || [], cooperation: data2 || {}};
    },
    mounted () {
 
    },
    methods: {
			toScrollTop () {
				this.$refs.top.scrollIntoView({block: 'start', behavior: 'smooth'});
			}
    }
  };
</script>

<style scoped lang="scss">
  .container {
    margin: 0 auto;
  }
	.wrapper {
		padding-top: $padding-header;
		min-height: calc(100vh - #{$padding-footer});
	}
 
</style>

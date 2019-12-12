function getIPAdress() {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}
const PX2REM = `/**
									* @description: set document's fontSize for autoSize
									*/
									(function () {
										const deviceWidth = document.documentElement.clientWidth;
										document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px';
										window.onresize = function () {
											const deviceWidth = document.documentElement.clientWidth;
											document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px';
										};
									})();
								`
const ENV_CONFIG = require('dotenv').config().parsed || {};
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '学锋官网',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'renderer',
        content: 'webkit'
      },
      {
        name: 'force-rendering',
        content: 'webkit'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=Edge,chrome=1'
      },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no'
      },
      // hid代表可覆盖的
      { hid: 'description', name: 'description', content: '学锋官网' },
      { hid: 'keywords', name: 'keywords', content: '学锋官网' }
    ],
    // 可引入外部css
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
    script: [
      // html head 中创建 script 标签
      {
        innerHTML: PX2REM,
        type: 'text/javascript',
        charset: 'utf-8'
      },
      // // 百度埋点引入外部js
      // { src: 'https://hm.baidu.com/hm.js?191db9c992af3758e6229e156da3ca19' }
    ],
    // 不对<script>标签中内容做转义处理
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
		'swiper/dist/css/swiper.css',
		{ src: '~/style/animate.css' },
		{ src: '~/style/flex.scss', lang: 'scss' },
    { src: '~/style/element.scss', lang: 'scss' },
    { src: '~/style/common.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
		'~/plugins/axios', // 导入axios配置文件
		// '~/plugins/px2rem',
		'~/plugins/filter',
		'~/plugins/swiper',
    { src: '~/plugins/route', ssr: false },
		{ src: '~/plugins/element-ui', ssr: true },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
		['@nuxtjs/dotenv'],
		'@nuxtjs/style-resources',
		// 根路径新建router.js,可以用正常vue-router的方式管理，不要把页面放到pages文件夹和默认路由规则冲突
		['@nuxtjs/router', { /* 配置项 */ }]
  ],
	// scss less stylus 公用文件
  // @nuxtjs/style-resources需安装
  styleResources: {
    scss: './style/mixin.scss'
  },
	server: {
    port: process.env.NODE_ENV === 'production' ? 3000 : 7777, // default: 3000
		// host: process.env.NODE_ENV === 'production' ? getIPAdress() : 'localhost' // default: localhost
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    https: false,
    retry: false, // 请求失败重试（仅限3次）
    debug: false,
    proxy: true,
    credentials: false,
    // prefix: '/api'
  },
  // 代理详细配置
  proxy: {
    '/api': {
			changeOrigin: true,
      target: process.env.NODE_ENV === 'production' ? ENV_CONFIG.BASE_URL: ENV_CONFIG.BASE_DEV_URL,
      // pathRewrite: {
      //   '^/api': ''
      // }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
		babel: {
			plugins: [
				[ "component", {"libraryName": "element-ui",  "styleLibraryName": "theme-chalk"}] 
			] 
    },
   // 静态资源cdn
    // publicPath: 'https://cdn.nuxtjs.org',

    // transpile: [/^element-ui/],
    // 提取css版本兼容？（但是可以用）
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      },
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            chunks: 'initial',
            priority: -10,
            reuseExistingChunk: false,
            test: /node_modules\/(.*)\.js/
          },
          styles: {
            name: 'chunk-styles',
            test: /\.(scss|css)$/,
            chunks: 'all',
            minChunks: 1,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
		}
  }
};

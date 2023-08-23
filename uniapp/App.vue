<script>
	import {
		mapMutations
	} from 'vuex';
	export default {
		onLaunch: function() {
			var lan = 'en'
			try {
				const res = uni.getSystemInfoSync();
				lan = res.language
			} catch (e) {
				console.log('error=' + e)
			}
			if (lan == 'en') {
				this._i18n.setLocale('en')
			}
			if (lan == 'hi') {
				this._i18n.setLocale('hi')
			};
			var _this = this;
			uni.getStorage({
				key: 'user',
				success: (res) => {
					if (res.data.token) {
						uni.switchTab({
							url: '/pages/index/index'
						})
					}
				}
			})
		},
		onShow: function() {
			setTimeout(() => {
				// #ifdef APP-PLUS 
				plus.navigator.closeSplashscreen()
				// #endif
			}, 2000)
			/* console.log('App Show'); */
		},
		onHide: function() {
			/* console.log('App Hide'); */
		},
		methods: {
			...mapMutations(['login'])
		}
	};
</script>

<style>
	@import './font/iconfont.css';
</style>

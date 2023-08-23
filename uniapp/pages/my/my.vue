<template>
	<view class="container">
		<view class="my">
			<view class="my-info">
				<view class="my-info-avatar">
					<image src="../../static/img/avatar.png" alt=""></image>
				</view>
				<view class="my-info-name">{{$store.state.user.nickname}}</view>
				<view class="my-info-icon" @click="jumpHandle('/pages/setup/setup')">
					<view class="iconfont icon-shezhi"></view>
				</view>
			</view>
			<view class="my-chunk">
				<view class="my-chunk-sub">
					<view class="my-chunk-sub-title">{{$store.state.user.money}}</view>
					<view class="my-chunk-sub-text">{{i18n.my.availableBalance}}</view>
				</view>
			</view>
		</view>
		<view class="my-list">
			<uni-list>
				<uni-list-item :title="i18n.my.myTask" to="/pages/myTask/myTask"></uni-list-item>
				<uni-list-item :title="i18n.my.MyPromotion" to="/pages/myPromotion/myPromotion"></uni-list-item>
				<uni-list-item :title="i18n.my.MyBank" to="/pages/myBank/myBank" @click="jumpHandle('')"></uni-list-item>
				<uni-list-item :title="i18n.my.Accountsecurity" to="/pages/setup/setup"></uni-list-item>
				<uni-list-item :title="i18n.my.suggestions" to="/pages/suggestions/suggestions"></uni-list-item>
				<uni-list-item :title="i18n.my.Notice" to="/pages/notice/notice"></uni-list-item>
				<uni-list-item :title="i18n.my.appdownload" to="/pages/my/download"></uni-list-item>
				<uni-list-item :title="i18n.my.customerService" to="/pages/my/service"></uni-list-item>
				<uni-list-item :title="i18n.my.Forcecacheclear" @click="clearCache" clickable></uni-list-item>
				<uni-list-item :title="i18n.my.Signout" @click="singOut" clickable></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{
					nickname:'',
					money:0,
					score:0
				},
			}
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		methods: {
			singOut() {
				this.$http({
					url: "/api/users/logout",
					method:'POST',
					data:{
						token:this.$store.state.user.token,
					},
					success:(res)=>{
						console.log(res);
						if(res.code == 1){
							this.$store.commit('logout');
							uni.redirectTo({
								url: '/pages/login/login'
							})
						}else{
							uni.showToast({
								icon:'none',
								duration:3000,
							    title: res.msg,
							});
						}
					}
				});
				
			},
			clearCache() {
				uni.showModal({
					content: 'Force cache clear?',
					cancelText: 'Cancel',
					confirmText: 'Confirm',
					confirmColor: '#11ccc0',
					success: function(res) {
						if (res.confirm) {
							console.log('confirm')
						}
					}
				})
			},
			jumpHandle(item){
				uni.navigateTo({
					url: item
				})
			}
		}
	}
</script>
<style>
	page {
		background-color: rgb(245, 245, 245);
	}
</style>

<style scoped>
	.my {
		background: url(../../static/img/grzx_bj.png) center no-repeat;
		width: 100%;
		overflow: hidden;
		background-size: cover;
		color: #fefefe;
	}

	.my-info {
		display: flex;
		align-items: center;
		margin-top: 30px;
	}

	.my-info-avatar {
		padding: 20px 15px 0 24px;
		width: 40px;
		height: 40px;
	}

	.my-info-avatar uni-image {
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: 50%;
	}

	.my-info-name {
		flex: 1;
		margin-top: 20px;
		font-size: 16px;
		color: #fff;
	}

	.my-info-icon {
		display: flex;
		margin-top: 20px;
		justify-content: center;
		min-width: 48px;
		color: #fafafa;
	}

	.my-info-icon .icon-shezhi {
		font-size: 30px;
	}

	.my-chunk {
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}

	.my-chunk-sub {
		color: #fff;
		text-align: center;
		flex: 1;
	}

	.my-chunk-sub-title {
		padding: 9px 0;
		font-size: 18px;
	}

	.my-chunk-sub-text {
		padding-bottom: 9px;
		font-size: 15px;
	}

	.my-list {
		padding: 15px 0;
	}
	.btn {
		background-color: #FFF;
		color: #11ccc0;
		border: none;
		border-radius: 20px;
		padding: 4px 12px;
		font-size: 14px;
		float: right;
		position: relative;
		top: 10px;
	}
</style>

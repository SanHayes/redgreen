<template>
	<view class="invite-context">
		<view class="qrcode">
			<view style="text-align: center;">
				<canvas canvas-id="qrcode" style="width: 17vh;height: 17vh;display: inline-block;" class="image" />
			</view>

			<view class="bottom">
				<view class="invite">{{valication}}</view>
				<view style="font-size: 14px;">{{i18n.InviteFriends.MyInviteCode}}</view>
			</view>
		</view>
		<view class="footer">
			<view>{{i18n.InviteFriends.MyInviteLink}}</view>
			<view class="copy" @click="copy">{{i18n.InviteFriends.copy}}</view>
		</view>
	</view>
</template>

<script>
	import uQRCode from '@/utils/uqrcode.js'
	import uniCopy from '@/js_sdk/xb-copy/uni-copy.js'
	export default {
		data() {
			return {
				url: '',
				valication: ''
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().InviteFriends.title
			})
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		mounted() {
			this.getData();

		},
		methods: {
			async make() {
				console.log(this.url)
				// 回调方式
				uQRCode.make({
					canvasId: 'qrcode',
					componentInstance: this,
					text: this.url,
					size: 120,
					margin: 10,
					backgroundColor: '#ffffff',
					foregroundColor: '#000000',
					fileType: 'jpg',
					correctLevel: uQRCode.errorCorrectLevel.H,
					success: res => {

					}
				})
			},
			getData() {
				this.$http({
					url: '/api/users/share',
					method: 'POST',
					data: {
						token: this.$store.state.token
					},
					success: (res) => {
						this.url = res.data.url;
						this.make();
						this.valication = res.data.url.split('=')[2]
					}
				})
			},
			copy() {
				uniCopy({
					content: this.url,
					success: (res) => {
						uni.showToast({
							title: 'success',
							icon: 'none'
						})
					}
				})
			}
		}
	}
</script>
<style>
	page {
		height: 100%;
	}
</style>
<style scoped lang="scss">
	.invite-context {
		height: 100%;
		background: url('../../static/img/share.png');
		background-size: 100% 100%;

		.qrcode {
			top: 46%;
			font-size: 15px;
			position: absolute;
			padding: 3.8%;
			left: 50%;
			width: 74%;
			transform: translateX(-50%);

			.bottom {
				margin-top: 10px;
				padding-top: 6px;
				border-top: 1px #62ce93 dashed;
				text-align: center;

				.invite {
					background: url('../../static/img/invite.png') no-repeat;
					background-size: 100% 100%;
					font-size: 180%;
					margin: 0 10%;
					color: #f5ab1d;
				}
			}
		}

		.footer {
			position: absolute;
			bottom: 5px;
			left: 10px;
			right: 10px;
			height: 50px;
			background-color: white;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 10px;
			font-size: 18px;
			color: #11CCC0;

			.copy {
				border: 1px solid #11CCC0;
				border-radius: 5px;
				padding: 2px 12px;
			}
		}
	}
</style>

<template>
	<view class="recharge">
		<view class="form-controler form-border" style="display: flex;align-items: center;">
			<view style="font-size: 14px;width: 100px;">{{i18n.withdraw.Availableamount}}</view>
			<view style="color: #11CCC0;">{{$store.state.user.money}}</view>
		</view>
		<view class="form-controler form-border">
			<view class="label">{{i18n.withdraw.WithdrawalAmount}}</view>
			<input type="text" v-model="rechargeData.money" :placeholder="i18n.withdraw.WithdrawalAmount" class="form-inp" />
		</view>
		<view class="form-controler form-border">
			<view class="label">{{i18n.withdraw.payment}}</view>
			<input type="text" password="true" v-model="rechargeData.payment" :placeholder="i18n.withdraw.payment" class="form-inp" />
		</view>

		<view class="form-controler form-border">
			<view class="label">{{i18n.withdraw.Remarks}}</view>
			<input type="text" v-model="rechargeData.memo" :placeholder="i18n.withdraw.Remarks" class="form-inp" />
		</view>

		<view style="font-size: 28upx;color: #ed1324;">{{i18n.withdraw.tip}} {{service_charge}}，{{i18n.withdraw.tip2}} {{tax}}%，{{i18n.withdraw.lowMoney}} {{lowMoney}}</view>
		
		<view style="margin-top: 80px;">
			<view class="form-controler form-btn">
				<button class="form-button btn" @click="recharge">{{i18n.withdraw.confirm}}</button>
			</view>
		</view>
		
		<view style="display: flex;justify-content: flex-end;">
			<view class="kefu" @click="kefuLink">
				<uni-icons type="headphones" style="font-size: 48upx;color: white;"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rechargeData: {
					money: '',
					memo: '',
					payment: ''
				},
				type: 2,
				service_charge: 0,
				tax: 0,
				kefu_url:'',
				lowMoney:''
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().withdraw.title
			});
		},
		mounted() {
			this.$http({
				url: '/api/moneyapi/get_config',
				method: 'GET',
				data: {
					token: this.$store.state.token,
					type: 'service_charge'
				},
				success: (res) => {
					this.service_charge = res.data;
				}
			});
			this.$http({
				url: '/api/moneyapi/get_config',
				method: 'GET',
				data: {
					token: this.$store.state.token,
					type: 'tax'
				},
				success: (res) => {
					this.tax = res.data;
				}
			});
			this.$http({
				url: '/api/moneyapi/kefu',
				method: 'GET',
				data: {
					token: this.$store.state.token
				},
				success: (res) => {
					this.kefu_url = res.data.kefu_url;
				}
			});
			this.getLowMoney();
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		methods: {
			getLowMoney(){
				this.$http({
					url: '/api/moneyapi/get_config',
					method: 'POST',
					data: {
						token: this.$store.state.token,
						type:'reducemoneymin'
					},
					success: (res) => {
						this.lowMoney = res.data?res.data:'';						
					}
				})
			},
			kefuLink(){
				uni.navigateTo({
					url:'/pages/my/service'
				})
			},
			recharge() {
				if (!this.rechargeData.money || parseInt(this.rechargeData.money) < 100) {
					uni.showToast({
						icon: 'none',
						duration: 3000,
						title: this.i18n.withdraw.limit
					})
					return
				}
				this.$http({
					url: '/api/moneyapi/money_apply',
					method: 'POST',
					data: {
						token: this.$store.state.token,
						type: this.type,
						money: this.rechargeData.money,
						remarks: this.rechargeData.memo,
						payment: this.rechargeData.payment
					},
					success: (res) => {
						if (res.code == 1) {
							uni.showToast({
								icon: 'none',
								duration: 3000,
								title: this.i18n.withdraw.application
							});
							this.rechargeData.money = '';
							this.rechargeData.memo = '';
							this.rechargeData.payment = '';
						} else {
							uni.showToast({
								icon: 'none',
								duration: 3000,
								title: this.i18n.withdraw.failed
							});
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.recharge {
		padding: 15px;
	}

	.form-controler {
		margin-bottom: 15px;
		position: relative;
	}

	.form-border {
		border-bottom: 1px solid #ccc;
		padding: 15px 0;
		display: flex;
		align-items: center;
	}

	.form-button {
		background-color: #11ccc0;
		color: #ffffff;
		margin-top: 20px;
	}

	.form-btn {
		margin-top: 20px;
	}

	.btn {
		border-radius: 0;
	}

	.btn::after {
		border-radius: 0;
	}

	.recharge .label {
		font-size: 14px;
		width: 90px;
	}

	.iconzise {
		font-size: 16px;
		position: absolute;
		top: 0;
		left: 5px;
		line-height: 53px;
	}

	.otp {
		position: absolute;
		top: 8px;
		right: 0;
		background-color: #11ccc0;
		color: #ffffff;
		border: none;
		padding: 0 14px;
	}

	.kefu {
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #11ccbf;
		box-shadow: 0px 1px 1px #11CCBF;
	}
</style>

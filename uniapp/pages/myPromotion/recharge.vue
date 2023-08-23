<template>
	<view class="recharge">		
		<view class="form-controler form-border">
			<view class="label">{{i18n.recharge.Rechargeamount}}</view>
			<input type="text" v-model="money" :placeholder="i18n.recharge.Rechargeamount" class="form-inp" />
		</view>
		<view style="font-size: 28upx;color: #ed1324;">{{i18n.recharge.lowMoney}} {{lowMoney}}</view>
	
		<view style="margin-top: 80px;">
			<view class="form-controler form-btn">
				<button class="form-button btn" @click="recharge">{{i18n.recharge.confirm}}</button>
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
	export default{
		data(){
			return {
				money:'',
				lowMoney:'',
				kefu_url:''
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().recharge.title
			});
			this.getLowMoney();
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		methods:{
			getLowMoney(){
				this.$http({
					url: '/api/moneyapi/get_config',
					method: 'POST',
					data: {
						token: this.$store.state.token,
						type:'addmoneymin'
					},
					success: (res) => {
						this.lowMoney = res.data?res.data:'';						
					}
				})
			},
			recharge(){
				if(Number(this.money) >= Number(this.lowMoney)){
					uni.navigateTo({
						url:'/pages/myPromotion/rechargeDel?money='+this.money
					})
				}else{
					uni.showToast({
						icon: 'none',
						duration: 3000,
						title: this.i18n.recharge.lowMoney+' '+this.lowMoney
					})
				}
			},
			kefuLink(){
				uni.navigateTo({
					url:'/pages/my/service'
				})
			},
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
		width: 100px;
	}
	
	/* .form-inp {
		padding-left: 80px;
	} */
	
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

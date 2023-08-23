<template>
	<view class="name">
		<view class="form-controler form-border">
			<view class="iconfont icon-mima1"></view>
			<input type="text" v-model="captcha" :placeholder="i18n.updatePaymentPassword.VerificationCode"
			 class="form-inp" />
			 <button size="mini" class="otp" :disabled="disabled" @click="getcode()">{{opt}}</button>
		</view>
		
		<view class="form-controler form-border">
			<view class="iconfont icon-mima"></view>
			<input type="text" password="true" v-model="password" :placeholder="i18n.updatePaymentPassword.oldPassword" class="form-inp" />
		</view>
		
		<view class="form-controler form-border">
			<view class="iconfont icon-mima"></view>
			<input type="text" password="true" v-model="newpassword" :placeholder="i18n.updatePaymentPassword.NewPassword" class="form-inp" />
		</view>
		
		<view class="form-controler form-border">
			<view class="iconfont icon-mima"></view>
			<input type="text" password="true" v-model="newpassword2" :placeholder="i18n.updatePaymentPassword.ConfirmPassword" class="form-inp" />
		</view>
		
		<view style="margin-top: 80px;">
			<view class="form-controler form-btn">
				<button class="form-button btn" @click="submit()">{{i18n.updatePaymentPassword.Submit}}</button>
			</view>
		</view>
		<view style="color: red;">
			<view style="font-size: 16px">{{i18n.updatePaymentPassword.tips}}</view>
			<view class="tips">{{i18n.updatePaymentPassword.content}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				captcha:'',
				password:'',
				newpassword:'',
				newpassword2:'',
				disabled:false,
				opt:'OTP'
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().updatePaymentPassword.title
			})
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		methods:{
			//获取手机验证码
			getcode() {
				var _this = this;
				this.$http({
					url:'/api/users/cell_code',
					method:'POST',
					data:{
						username:this.$store.state.user.username
					},
					success:(res)=>{
						if(res.code == 1){
							uni.showToast({
								icon:'none',
								duration:3000,
							    title: this._i18n.getLanguage().register.codesuccess,
							});
							this.disabled  = true;
							let count = 60;
							let inter = setInterval(function(){
								if(count>1){
									count--;
									_this.opt = count+'s';
								}else{
									clearInterval(inter);
									count = 60;
									_this.opt = 'OTP';
									_this.disabled = false;
								}
							},1000);
						}else{
							uni.showToast({
								icon:'none',
							    title: this._i18n.getLanguage().register.codefaile,
							});
						}
					}
				})
			},
			submit(){
				this.$http({
					url:'/api/users/set_payment_code',
					method:'POST',
					data:{
						token:this.$store.state.user.token,
						password:this.password,
						newpassword:this.newpassword,
						newpassword2:this.newpassword2
					},
					succss:(res)=>{
						if(res.code==1){
							uni.showToast({
								icon:'none',
								duration:3000,
							    title: this._i18n.getLanguage().register.codesuccess,
							});
							setTimeout(function(){
								uni.switchTab({
									url:'../my/my'
								})
							},3000)
						}else{
							uni.showToast({
								icon:'none',
								duration:3000,
							    title: res.msg,
							});
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.name{
		padding:15px;
	}
	.form-controler {
		margin-bottom: 15px;
		position: relative;
	}
	
	.form-border {
		border-bottom: 1px solid #ccc;
		padding: 15px 0
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
	.form-inp {
		padding-left: 45px;
	}
	
	.forgetPassword {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-size: 12px;
	}
	.form-controler .iconfont {
		color: #ccc;
		font-size: 24px;
		position: absolute;
		top: 0;
		left: 5px;
		line-height: 53px;
	}
	.otp{
		position: absolute;
		top: 8px;
		right: 0;
		background-color: #11ccc0;
		color: #ffffff;
		border:none;
		padding:0 14px;
	}
	.tips{
		text-indent: 24px;
		border:1px solid #ccc;
		padding:12px 6px;
		border-radius: 5px;
		margin-top: 6px;
		font-size: 13px;
	}
</style>

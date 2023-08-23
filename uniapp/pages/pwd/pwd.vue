<template>
	<view class="findPwd">
		<view class="form-controler form-border">
			<view class="iconfont icon-yonghu"></view>
			<input type="text" v-model="pwdData.username" :placeholder="_i18n.getLanguage().register.mobile" class="form-inp" />
		</view>

		<view class="form-controler form-border">
			<view class="iconfont icon-mima"></view>
			<input type="text" password="true" v-model="pwdData.newpassword" :placeholder="_i18n.getLanguage().register.password"
			 class="form-inp" />
		</view>

		<view class="form-controler form-border">
			<view class="iconfont icon-mima1"></view>
			<input type="text" v-model="pwdData.captcha" :placeholder="_i18n.getLanguage().register.verificationCode"
			 class="form-inp"/>
			<button size="mini" class="otp" :disabled="disabled" @click="getcode()">{{opt}}</button>
		</view>

		<view style="margin-top: 80px;">
			<view class="form-controler form-btn">
				<button class="form-button btn" @click="register">{{_i18n.getLanguage().register.registerImediately}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pwdData: {
					username:'',
					newpassword:'',
					captcha:''
				},
				opt:'OTP',
				disabled:false,
			}
		},
		onShow() {
			// 修改头部标题
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().findPwd.title
			});
		},
		methods:{
			//获取手机验证码
			getcode() {
				var _this = this;
				this.$http({
					url:'/api/users/cell_code',
					method:'POST',
					data:{
						username:this.pwdData.username
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
								duration:3000,
							    title: this._i18n.getLanguage().register.codefaile,
							});
						}
					}
				})
			},
			register(){
				this.$http({
					url:'/api/users/resetpwd',
					method:'POST',
					data:{
						username:this.pwdData.username,
						newpassword:this.pwdData.newpassword,
						captcha:this.pwdData.captcha
					},
					success:(res)=>{
						if(res.code==1){
							uni.showToast({
								icon:'none',
							    title: this._i18n.getLanguage().register.updateSuccess,
							});
						}else{
							uni.showToast({
								icon:'none',
							    title: this._i18n.getLanguage().register.updatefaile,
							});
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.findPwd {
		padding: 15px;
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

	.findPwd .iconfont {
		color: #ccc;
		font-size: 28px;
		position: absolute;
		top: 0;
		left: 5px;
		line-height: 53px;
	}

	.form-inp {
		padding-left: 45px;
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
</style>

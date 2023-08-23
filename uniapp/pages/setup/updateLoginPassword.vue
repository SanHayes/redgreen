<template>
	<view class="name">
		<view class="form-controler form-border">
			<view class="iconfont icon-mima"></view>
			<input type="text" password="true" v-model="password" class="form-inp" :placeholder="i18n.updateLoginPassword.LoginPassword"/>
		</view>
		<view class="form-controler form-border">
			<view class="iconfont icon-xiugai"></view>
			<input type="text" password="true" v-model="repassword" :placeholder="i18n.updateLoginPassword.NewPassword" class="form-inp" />
		</view>
		<view class="form-controler form-border">
			<view class="iconfont icon-xiugai"></view>
			<input type="text" password="true" v-model="confirmPassord" :placeholder="i18n.updateLoginPassword.ConfirmPassword" class="form-inp" />
		</view>
		<view style="margin-top: 80px;">
			<view class="form-controler form-btn">
				<button class="form-button btn" @click="submit()">{{i18n.updateLoginPassword.Submit}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				password:'',
				repassword:'',
				confirmPassord:''
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().updateLoginPassword.title
			})
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		methods:{
			submit(){
				this.$http({
					url:'/api/users/set_password',
					method:'POST',
					data:{
						token:this.$store.state.user.token,
						password:this.password,
						newpassword:this.repassword,
						newpassword2:this.confirmPassord
					},
					success:(res)=>{
						if(res.code == 1){
							uni.showToast({
								icon:'none',
								duration:3000,
							    title: res.msg,
							});
							setTimeout(function(){
								uni.redirectTo({
									url:'../login/login'
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
</style>

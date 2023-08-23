<template>
	<view>
		<view class="picker">
			<lb-picker :list="array" @confirm="handleConfirm">
				<view slot="cancel-text">{{_i18n.getLanguage().login.cancel}}</view>
				<view slot="confirm-text" style="color: #11ccc0;">{{_i18n.getLanguage().login.confirm}}</view>
				<view class="uni-input picker-view">
					<image :src="src[index].name"></image>{{array[index]}}
				</view>
			</lb-picker>
		</view>

		<view class="container">
			<view class="nav">
				<text class="item" :class="{active:active==index?'active':''}" v-for="(item,index) in tabs" @tap="changeHandle(index)" :key="index">{{item}}</text>
			</view>
			<!-- 登陆 -->
			<view class="login" v-show="active==0">
				<view class="form-controler form-border">
					<view class="iconfont icon-shoujihao"></view>
					<input type="text" v-model="loginData.username" :placeholder="_i18n.getLanguage().login.username" class="form-inp" />
				</view>
				<view class="form-controler form-border">
					<view class="iconfont icon-mima"></view>
					<input type="text" password="true" v-model="loginData.password" :placeholder="_i18n.getLanguage().login.password"
					 class="form-inp" />
				</view>
				<view>
					<navigator url="../pwd/pwd">
						<view class="forgetPassword">
							<text>{{_i18n.getLanguage().login.forgetPassword}}</text>
						</view>
					</navigator>
				</view>
				<view style="margin-top: 80px;">
					<view class="form-controler form-btn">
						<button class="form-button btn" @tap="login()">{{_i18n.getLanguage().login.loginImediately}}</button>
					</view>
				</view>
			</view>
			<!-- 注册 -->
			<view class="login" v-show="active==1">
				<view class="form-controler form-border">
					<view class="iconfont icon-yonghu"></view>
					<input type="text" v-model="registerData.mobile" :placeholder="_i18n.getLanguage().register.mobile"
					 class="form-inp" />
				</view>
				<view class="form-controler form-border">
					<view class="iconfont icon-mima"></view>
					<input type="text" password="true" v-model="registerData.password" :placeholder="_i18n.getLanguage().register.password"
					 class="form-inp" />
				</view>
				<view class="form-controler form-border">
					<view class="iconfont icon-mima"></view>
					<input type="text" password="true" v-model="registerData.repassword" :placeholder="_i18n.getLanguage().register.repassword"
					 class="form-inp" />
				</view>
				
				<view class="form-controler form-border">
					<view class="iconfont icon-mima"></view>
					<input type="text" password="true" v-model="registerData.payment_code" :placeholder="_i18n.getLanguage().register.WithdrawPsassword"
					 class="form-inp" />
				</view>
				<view class="form-controler form-border">
					<view class="iconfont icon-mima"></view>
					<input type="text" password="true"v-model="registerData.payment_code2" :placeholder="_i18n.getLanguage().register.Confirmwithdrawalpassword"
					 class="form-inp" />
				</view>
				
				<view class="form-controler form-border">
					<view class="iconfont icon-mima1"></view>
					<input type="text" v-model="registerData.verificationCode" :placeholder="_i18n.getLanguage().register.verificationCode"
					 class="form-inp" />
					<button size="mini" class="otp" @click="getcode()" :disabled="disabled">{{opt}}</button>
				</view>
				<view class="form-controler form-border">
					<view class="iconfont icon-tuijianma1"></view>
					<input type="text" v-model="registerData.recommendationCode" :placeholder="_i18n.getLanguage().register.recommendationCode"
					 class="form-inp" />
				</view>
				<view class="argeeBox">
					<checkbox :checked="checked" style="transform:scale(0.7)" color="#11ccc0" />
					<view>{{_i18n.getLanguage().register.agree}} <text class="agree" @click="privacyClick">{{_i18n.getLanguage().register.privacyPolicy}}</text></view>
				</view>
				<view style="margin-top: 80px;">
					<view class="form-controler form-btn">
						<button class="form-button btn" @tap="register()">{{_i18n.getLanguage().register.registerImediately}}</button>
					</view>
				</view>

				<view class="task" v-show="taskShow">
					<view class="cha" @click="cha">
						<image src="../../static/img/cha.png" alt=""><image>
					</view>
					<view class="taskBox">
						<view class="taskHeader">
							<text style="font-weight: bold;">{{_i18n.getLanguage().privacy.title}}</text>
							<text style="font-size: 12px;padding-top: 5px;font-weight: blod;">{{_i18n.getLanguage().privacy.desc}}</text>
						</view>
						<view class="taskSection">
							<view>{{_i18n.getLanguage().privacy.p1}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p2}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p3}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p4}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p5}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p6}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p7}}</view>
							<view style="text-indent:24px;color: black;font-weight: bold;">{{_i18n.getLanguage().privacy.p8}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p9}}</view>
							<view style="text-indent:24px;color: black;font-weight: bold;">{{_i18n.getLanguage().privacy.p10}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p11}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p12}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p13}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p14}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p15}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p16}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p17}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p18}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p19}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p20}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p21}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p22}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p23}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p24}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p25}}</view>
							<view style="text-indent:24px;">{{_i18n.getLanguage().privacy.p26}}</view>
							<view style="padding-bottom:30px">{{_i18n.getLanguage().privacy.p27}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import LbPicker from '@/components/lb-picker'
	export default {
		data() {
			return {
				tabs: [this._i18n.getLanguage().login.signIn, this._i18n.getLanguage().login.register],
				active: 0,
				loginData: {
					username: '',
					password: ''
				},
				registerData: {
					mobile: '',
					password: '',
					repassword: '',
					verificationCode: '',
					recommendationCode: '',
					payment_code:'',
					payment_code2:''
				},
				index: 0,
				array: ['English', 'हिंदी'],
				lanObj: {},
				src: [{
					name: '../../static/img/en.png'
				}, {
					name: '../../static/img/hi.png'
				}],
				opt:'OTP',
				disabled:false,
				checked: true,
				taskShow: false
			}
		},
		components: {
			LbPicker
		},
		onLoad(option) {
			if(option.active||option.verification){
				this.active = option.active;
				this.registerData.recommendationCode =option.verification
			}
		},
		onShow() {
			const lang = this._i18n.locale;
			if (lang == 'hi') {
				this.index = 1
			} else {
				this.index = 0
			}
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().login.title
			})
		},
		methods: {
			changeHandle(index) {
				this.active = index;
			},
			refreshLanguage() {
				this.lanObj = this._i18n.getLanguage();
				this.tabs[0] = this.lanObj.login.signIn;
				this.tabs[1] = this.lanObj.login.register;
				uni.setNavigationBarTitle({
					title: this._i18n.getLanguage().login.title
				})
			},
			handleConfirm(e) {
				this.index = e.index
				if (this.index == 0) {
					this._i18n.setLocale('en');
				} else if (this.index == 1) {
					this._i18n.setLocale('hi')
				}
				this.refreshLanguage();
			},
			privacyClick() {
				this.taskShow = true;
			},
			cha() {
				this.taskShow = false;
			},
			//登录
			login() {
				this.$http({
					url: "/api/users/login",
					method:'POST',
					data:{
						username:this.loginData.username,
						password:this.loginData.password
					},
					success:(res)=>{
						if(res.code == 1){
							this.$store.commit('login',{
								'token':res.data.token
							});
							uni.reLaunch({
								url: '/pages/index/index'
							});
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
			register() {
				this.$http({
					url:'/api/users/register',
					method:'POST',
					data:{
						username:this.registerData.mobile,
						password:this.registerData.password,
						password2:this.registerData.repassword,
						code:this.registerData.verificationCode,
						verification:this.registerData.recommendationCode,
						payment_code:this.registerData.payment_code,
						payment_code2:this.registerData.payment_code2,
					},
					success:(res)=>{
						if(res.code == 1){
							uni.showToast({
								icon:'none',
							    title: this._i18n.getLanguage().register.success,
							});
							this.active = 0;
						}else{
							uni.showToast({
								icon:'none',
								duration:3000,
							    title: res.msg,
							});
						}
					}
				})
			},
			//获取手机验证码
			getcode() {
				var _this = this;
				this.$http({
					url:'/api/users/cell_code',
					method:'POST',
					data:{
						username:this.registerData.mobile
					},
					success:(res)=>{
						if(res.code == 1){
							uni.showToast({
								icon:'none',
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
		}
	}
</script>

<style scoped>
	.container {
		padding: 15px;
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 30px;
	}

	.nav .item {
		color: #646566;
		font-size: 24px;
		border-width: 2px;
		transition: all 0.3s;
		position: relative;
		padding: 0 10px;
	}

	.nav .item:first-child::after {
		content: '';
		display: block;
		position: absolute;
		width: 0;
		height: 18px;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		border: 1px solid #11ccc0;
	}

	.login {
		margin-top: 30px;
	}

	.active {
		color: #11ccc0 !important;
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

	.login .iconfont {
		color: #ccc;
		font-size: 24px;
		position: absolute;
		top: 0;
		left: 5px;
		line-height: 53px;
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

	.picker-view {
		display: flex;
		align-items: center;
	}

	.picker-view uni-image {
		width: 25px;
		height: 25px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.picker {
		display: flex;
		justify-content: flex-end;
		padding-top: 5px;
		padding-right: 15px;
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

	.argeeBox {
		display: flex;
		align-items: center;
		color: grey;
		font-size: 16px;
	}

	.agree {
		color: #11ccc0;
		padding-left: 5px;
		text-decoration: underline;
	}

	.task {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 44px;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.taskBox {
		width: 90%;
		height: 80%;
		background-color: white;
	}

	.taskHeader {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		padding: 10px 15px;
		box-sizing: border-box;
	}

	.taskSection {
		font-size: 12px;
		padding: 0 15px;
		height: calc(100% - 80px);
		overflow-y: scroll;
		color: #333;
	}

	.textAlgin {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cha {
		position: absolute;
		top: 8px;
		right: 0;
	}

	.cha uni-image {
		width: 25px;
		height: 25px;
	}
</style>

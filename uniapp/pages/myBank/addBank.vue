<template>
	<view class="addBank">
		<view class="form-controler form-border">
			<view class="iconfont icon-yonghu"></view>
			<input type="text" v-model="fromData.Actual_name" :placeholder="i18n.addBank.actualname" class="form-inp" />
		</view>
		<view class="form-controler form-border">
			<view class="iconfont icon-gifscard-4-01"></view>
			<input type="text" v-model="fromData.IFSC" :placeholder="i18n.addBank.IFSCcode" class="form-inp" />
		</view>
		<view class="form-controler form-border">
			<view class="iconfont icon-yinhangzhanghao"></view>
			<input type="text" v-model="fromData.Account_number" :placeholder="i18n.addBank.Bankcardnumber" class="form-inp" />
		</view>
		<view class="form-controler form-border">
			<view class="iconfont icon-city"></view>
			<input type="text" v-model="fromData.State" :placeholder="i18n.addBank.provinceState" class="form-inp" />
		</view>
		<view class="form-controler form-border">
			<view class="iconfont icon-city"></view>
			<input type="text" v-model="fromData.City" :placeholder="i18n.addBank.city" class="form-inp" />
		</view>
		<view class="form-controler form-border">
			<view class="iconfont icon-adress"></view>
			<input type="text" v-model="fromData.Address" :placeholder="i18n.addBank.address" class="form-inp" />
		</view>
		<view class="form-controler form-border">
			<view class="iconfont icon-shoujihao"></view>
			<input type="text" v-model="fromData.Mobile_number" :placeholder="i18n.addBank.mobilephonenumber" class="form-inp" />
		</view>
		<view class="form-controler form-border">
			<view class="iconfont icon-Email"></view>
			<input type="text" v-model="fromData.Email" :placeholder="i18n.addBank.email" class="form-inp" />
		</view>
		<view style="font-size: 28upx;color: #ed1324;">{{i18n.addBank.withdrawCash}}</view>
		<view style="margin-top: 40px;">
			<view class="form-controler form-btn">
				<button class="form-button btn" @click="submit()">{{i18n.addBank.Submit}}</button>
			</view>
		</view> 
	</view>
</template>

<script>
	export default{
		data(){
			return{
				fromData:{
					Actual_name:'',
					IFSC:'',
					Account_number:'',
					State:'',
					City:'',
					Address:'',
					Mobile_number:'',
					Email:'',
				}
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().addBank.title
			});
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		mounted(){
			this.getBankinfo();
		},
		methods:{
			getBankinfo(){
				this.$http({
					url:'/api/users/bankinfo',
					method:'POST',
					data:{
						token:this.$store.state.user.token
					},
					success:(res)=>{
						if(res.data){
							this.fromData.Actual_name = res.data.Actual_name;
							this.fromData.IFSC = res.data.IFSC;
							this.fromData.Account_number = res.data.Account_number;
							this.fromData.State = res.data.State;
							this.fromData.City = res.data.City;
							this.fromData.Address = res.data.Address;
							this.fromData.Mobile_number = res.data.Mobile_number;
							this.fromData.Email = res.data.Email;
						}
					}
				})
			},
			submit(){
				this.$http({
					url:'/api/users/bank_bind',
					method:'POST',
					data:{
						token:this.$store.state.user.token,
						Actual_name:this.fromData.Actual_name,
						IFSC:this.fromData.IFSC,
						Account_number:this.fromData.Account_number,
						State:this.fromData.State,
						City:this.fromData.City,
						Address:this.fromData.Address,
						Mobile_number:this.fromData.Mobile_number,
						Email:this.fromData.Email
					},
					success:(res)=>{
						if(res.code == 1){
							uni.showToast({
								icon:'none',
								duration:3000,
							    title: this._i18n.getLanguage().addBank.Addedsuccessfully,
							});
							setTimeout(function(){
								uni.navigateTo({
									url:'/pages/myBank/myBank'
								})
							},3000)
						}else{
							uni.showToast({
								icon:'none',
								duration:3000,
							    title: this._i18n.getLanguage().addBank.addfailed,
							});
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.addBank{
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

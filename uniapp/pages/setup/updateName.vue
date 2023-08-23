<template>
	<view class="name">
		<view class="form-controler form-border">
			<view class="iconfont icon-yonghu"></view>
			<input type="text" v-model="$store.state.user.nickname" class="form-inp" disabled  style="color: #888;"/>
		</view>
		<view class="form-controler form-border">
			<view class="iconfont icon-xiugai"></view>
			<input type="text" v-model="nickname" :placeholder="i18n.updateName.enterName" class="form-inp" />
		</view>
		<view style="margin-top: 80px;">
			<view class="form-controler form-btn">
				<button class="form-button btn" @click="submit()">{{i18n.updateName.Submit}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickname: ''
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().updateName.title
			})
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		methods: {
			submit() {
				this.$http({
					url:'/api/users/set_nickname',
					method:'POST',
					data:{
						token:this.$store.state.user.token,
						nickname:this.nickname
					},
					success:(res)=>{
						if(res.code == 1){
							this.getUserInfo();
							uni.switchTab({
								url:'../my/my'
							})
						}
					}
				})
			},
			getUserInfo(){
				this.$http({
					url: "/api/users/index",
					method:'POST',
					data:{
						token:this.$store.state.token
					},
					success:(res)=>{
						if(res.code == 1){
							this.$store.commit('login',res.data);
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
		}
	}
</script>

<style scoped>
	.name {
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

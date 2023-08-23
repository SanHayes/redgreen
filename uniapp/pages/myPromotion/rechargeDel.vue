<template>
	<view>
		<view class="error" v-show ="show">
			<uni-icons type="closeempty" size="100" color="red"></uni-icons>
			<span>{{msg}}</span>
		</view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				url:'',
				money:'',
				show:false,
				msg:''
			}
		},
		onLoad(option) {
			this.money = option.money
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().recharge.title
			});
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		mounted(){
			this.getData();
		},
		methods:{
			getData(){
				this.$http({
					url: '/api/moneyapi/money_pay_add',
					method: 'POST',
					data: {
						token: this.$store.state.token,
						money:this.money
					},
					success: (res) => {
						if(res.code==1){
							this.url = res.data.url
						}else{
							this.show = true;
							this.msg = res.msg;
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.error{
		height: calc(100vh - 66px);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-size: 40upx;
		color: red;
	}
</style>
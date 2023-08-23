<template>
	<view class="setup">
		<uni-list>
			<uni-list-item :title="i18n.setup.name" @click="undateName('updateName')" clickable></uni-list-item>
			<uni-list-item :title="i18n.setup.password" @click="undateName('updateLoginPassword')" clickable></uni-list-item>
			<uni-list-item :title="i18n.setup.paymentpassword" @click="undateName('updatePaymentPassword')" clickable></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default{
		onShow(){
			uni.setNavigationBarTitle({
			        title:this._i18n.getLanguage().setup.title
			})
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		methods:{
			undateName(item){
				uni.navigateTo({
					url:'./'+item
				})
			}
		}
	}
</script>
<style>
	page {
		background-color: rgb(245, 245, 245);
	}
</style>

<style scoped>
	.setup{
		padding-top:5px;
	}
</style>

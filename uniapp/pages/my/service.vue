<template>
	<view>
		<uni-load-more :status="more" :contentText="contentText"></uni-load-more>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				url:'',
				more:'loading',
				contentText:{
					contentrefresh:this._i18n.getLanguage().my.loading
				}
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().my.CustomerService
			});
		},
		mounted(){
			this.getData();
		},
		methods:{
			getData(){
				this.$http({
					url: "/api/moneyapi/kefu",
					method:'POST',
					data:{
						token:this.$store.state.user.token,
					},
					success:(res)=>{
						this.url = res.data.kefu_url;
					}
				});
			}
		}
	}
</script>

<style>
</style>

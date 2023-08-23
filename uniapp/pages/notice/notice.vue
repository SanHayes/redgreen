<template>
	<view class="container">
		<uni-list>
			<uni-list-item v-for="(item,index) in Data" :key="index" :title="item.title" showArrow @click="tiaozhuan(item.id)" clickable></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import nums from '@/utils/nums.js'
	export default {
		data() {
			return {
				limit:20,
				page:1,
				Data:[],
				allListItem:false,
				totalElements:0
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().notice.title
			})
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
					url:'/api/sundry/notice_list',
					method:'POST',
					data:{
						token:this.$store.state.token,
						limit:this.limit,
						page:this.page
					},
					success:(res)=>{
						this.Data =[...this.Data,...res.data.list];
						this.totalElements = res.data.count
					}
				})
			},
			onReachBottom() {
				// 触底的时候请求数据，即为上拉加载更多
				let allTotal = nums.Mul(this.page, this.limit)
				if (allTotal < this.totalElements) {
					this.allListItem = false;
					this.page++;
					this.getData();
				} else {
					this.allListItem = true;
				}
			},
			onPullDownRefresh() {
				this.page = 1;
				this.limit = 20;
				this.Data=[];
				this.getData()
				setTimeout(function() {
					uni.stopPullDownRefresh();
				}, 1000);
			},
			tiaozhuan(id){
				uni.navigateTo({
					url:"/pages/notice/noticeDel?id="+id
				})
			}
		}
	}
</script>
<style>
	page{
		background-color: #f2f2f2;
	}
</style>

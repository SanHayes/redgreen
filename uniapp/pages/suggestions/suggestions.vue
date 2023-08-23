<template>
	<view class="suggertions">
		<v-tabs class="tabs" v-model="current" :scroll="false" :tabs="tabs" lineHeight="4rpx" lineColor="#11ccc0" activeColor="#11ccc0" @change="changeTab"></v-tabs>
		<uni-list class="unilist">
			<uni-list-item v-for="(item,index) in Data" :key="index" :title="item.OutId" :note="item.answer" showArrow @click="tiaozhuan(item.id)" clickable></uni-list-item>
		</uni-list>
		<view class="addqs">
			<button type="default" class="btn" @tap="add">{{i18n.suggestions.add}}</button>
		</view>
	</view>
</template>

<script>
	import nums from '@/utils/nums.js'
	import vtabs from '../../components/v-tabs/v-tabs.vue'
	export default {
		data() {
			return {
				tabs: [this._i18n.getLanguage().suggestions.All,this._i18n.getLanguage().suggestions.Replied,this._i18n.getLanguage().suggestions.Unanswered],
				current: 0,
				status:'2',
				page:1,
				limit:20,
				totalElements:0,
				Data:[],
				allListItem:false
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().suggestions.title
			});
			this.getData();
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		components: {
			vtabs
		},
		methods: {
			getData(){
				this.$http({
					url: '/api/sundry/suggest_list',
					method: 'POST',
					data: {
						token: this.$store.state.token,
						limit: this.limit,
						status:this.status,
						page: this.page
					},
					success: (res) => {
						this.Data = res.data.list
						this.totalElements = res.data.count;
					}
				})
			},
			changeTab(index) {
				this.Data = [];
				if(index==0){
					this.status =2
				}else if(index==1){
					this.status =1
				}else if(index==2){
					this.status = 0
				}
				this.getData();
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
				this.Data = [];
				this.getData()
				setTimeout(function() {
					uni.stopPullDownRefresh();
				}, 1000);
			},
			tiaozhuan(id){
				uni.navigateTo({
					url:'/pages/suggestions/sugDel?id='+id
				})
			},
			add(){
				uni.navigateTo({
					url:'/pages/suggestions/addsugger'
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
<style scoped>
	.suggertions{
		padding-top: 1px;
	}
	.unilist{
		margin-top: 5px;
	}
	.addqs{
		padding:25px 15px;
	}
	.btn{
		background-color: #11CCC0;
		color: white;
	}
</style>

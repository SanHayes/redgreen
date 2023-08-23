<template>
	<view class="promotion">
		<view class="record">
			<view class="table-header">
				<view class="table-header-td" style="width: 40%;text-align: left;">{{i18n.promotionRecord.time}}</view>
				<view class="table-header-td" style="width: 40%;text-align: center;">{{i18n.promotionRecord.Amount}}</view>
				<view class="table-header-td" style="width: 20%;text-align: right;">{{i18n.promotionRecord.Balance}}</view>
			</view>
			<view class="table-body" v-for="(item,index) in recodeData" :key="index">
				<view class="table-header-td" style="width: 40%;text-align: left;">{{item.createtime}}</view>
				<view class="table-header-td" style="width: 40%;text-align: center;">{{item.money}}</view>
				<view class="table-header-td" style="width: 20%;text-align: right;">{{item.after}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import nums from '@/utils/nums.js'
	export default{
		data(){
			return {
				limit: 20,
				page: 1,
				totalElements: 0,
				allListItem: false,
				recodeData: []
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().promotionRecord.title
			})
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		mounted() {
			this.getData();
		},
		methods:{
			getData() {
				this.$http({
					url: '/api/moneyapi/money_s_log',
					method: 'POST',
					data: {
						token: this.$store.state.token,
						limit: this.limit,
						page: this.page
					},
					success: (res) => {
						this.recodeData= [...this.recodeData,...res.data.list];
						this.totalElements = res.data.count;
					}
				})
			},
			onReachBottom() {
				// 触底的时候请求数据，即为上拉加载更多
				let allTotal = nums.Mul(this.page, this.limit);
				if (allTotal < this.totalElements) {
					this.allListItem = false;
					this.page++;
					this.getData()
				} else {
					this.allListItem = true;
				}
			},
			onPullDownRefresh() {
				this.page = 1;
				this.limit = 20;
				this.recodeData = [];
				this.getData()
				setTimeout(function() {
					uni.stopPullDownRefresh();
				}, 1000);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.record {
		padding: 0 15px;
	}
	
	.table-header,
	.table-body {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #dadada;
	}
	
	.table-header .table-header-td {
		color: #279890;
		font-size: 13px;
		padding: 10px 0;
		
	}
	
	.table-body .table-header-td {
		font-size: 13px;
		padding:12px 0;
	}
	
	.point-box__anodd {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: #1eb83f;
	}
	
	.point-box__add {
		width: 15px;
		height: 15px;
		margin-left: 5px;
		border-radius: 50%;
		background-color: red;
	}
	
	.point-box__no {
		width: 15px;
		height: 15px;
		margin-left: 5px;
	}
	
	.point-box__aliquot {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: blueviolet;
		margin-left: 5px;
	}
</style>

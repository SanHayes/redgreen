<template>
	<view class="orders">
		<view>
			<view class="record">
				<view class="table-header">
					<view class="table-header-td" style="width: 30%;">{{i18n.index.period}}</view>
					<view class="table-header-td" style="width: 50%;text-align: center;">{{i18n.index.number}}</view>
					<view class="table-header-td" style="width: 20%;text-align: right;">{{i18n.index.result}}</view>
				</view>
				<view class="table-body" v-for="(item,index) in recodeData" :key="index">
					<view class="table-header-td" style="width: 30%;">{{item.qishu}}</view>
					<view class="table-header-td" :style="{color: item.result%2?'#1eb83f':'red'}" style="width: 50%;text-align: center;">{{item.result}}</view>
					<view class="table-header-td" style="width: 20%;text-align: right;display: flex;justify-content: flex-end;">
						<view class="point-box__anodd" v-show="item.result==1||item.result==3||item.result==5||item.result==7||item.result==9?true:false"></view>
						<view class="point-box__add" v-show="item.result==0||item.result==2||item.result==4||item.result==6||item.result==8?true:false"></view>
						<view class="point-box__aliquot" v-show="item.result==0||item.result==5?true:false"></view>
						<view class="point-box__no" v-show="item.result!=0&&item.result!=5?true:false"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import nums from '@/utils/nums.js'
	export default {
		data() {
			return {
				recodeData: [],
				active: 1,
				totalElements: 0,
				allListItem: false,
				limit: 20,
				page: 1
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.i18n.record.Lotteryrecord
			});
			this.caiLog();
		},
		onHide() {
			this.recodeData=[];
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		methods: {
			//开奖记录
			caiLog() {
				this.$http({
					url: '/api/cai/cai_log',
					method: 'POST',
					data: {
						token: this.$store.state.user.token,
						limit: this.limit,
						page: this.page
					},
					success: (res) => {
						this.recodeData = [...this.recodeData, ...res.data.list];
						this.totalElements = res.data.count;
					}
				})
			},
			onReachBottom() {
				// 触底的时候请求数据，即为上拉加载更多
				let allTotal = nums.Mul(this.page, this.limit)
				if (allTotal < this.totalElements) {
					this.allListItem = false;
					this.page++;
					uni.setNavigationBarTitle({
						title: this.i18n.record.Lotteryrecord
					});
					this.caiLog();
				} else {
					this.allListItem = true;
				}
			},
			onPullDownRefresh() {
				this.page = 1;
				this.limit = 20;
				this.recodeData = [];
				uni.setNavigationBarTitle({
					title: this.i18n.record.Lotteryrecord
				});
				this.caiLog();
				setTimeout(function() {
					uni.stopPullDownRefresh();
				}, 1000);
			},
		}
	}
</script>

<style scoped>
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
		padding: 12px 0;
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


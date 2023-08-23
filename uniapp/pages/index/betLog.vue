<template>
	<view class="orders">
		<view>
			<view class="record">
				<view class="table-header">
					<view class="table-header-td" style="width: 20%;">{{i18n.index.period}}</view>
					<view class="table-header-td" style="width: 20%;text-align: center;">{{i18n.index.result}}</view>
					<view class="table-header-td" style="width: 20%;text-align: center;">{{i18n.index.Drawcode}}</view>
					<view class="table-header-td" style="width: 20%;text-align: center;">{{i18n.index.Betamount}}</view>
					<view class="table-header-td" style="width: 20%;text-align: right;">{{i18n.index.Profitandloss}}</view>
				</view>
				<view class="table-body" v-for="(item,index) in beteData" :key="index">
					<view class="table-header-td" style="width: 20%;">{{item.qishu}}</view>
					<view class="table-header-td" style="width: 20%;text-align: center;">{{item.caidata}}</view>
					<view class="table-header-td" style="width: 20%;text-align: center;" :style="{color: item.bet_code%2?'#1eb93d':item.bet_code=='green'?'#1eb93d':item.bet_code=='red'?'#ed1324':item.bet_code=='violet'?'#ea3af0':'#1eb93d'}">{{item.bet_code=='red'?i18n.index.reds:item.bet_code=='green'?i18n.index.greens:item.bet_code=='violet'?i18n.index.violets:item.bet_code}}</view>
					<view class="table-header-td" style="width: 20%;text-align: center;">{{item.money}}</view>
					<view class="table-header-td" style="width: 20%;text-align: right;" :style="{color: parseInt(item.result)<0?'#1eb83f':'red'}">{{item.result}}</view>
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
				beteData: [],
				totalElements: 0,
				allListItem: false,
				limit: 20,
				page: 1
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.i18n.record.bettingrecord
			});
			this.betLog();
		},
		onHide() {
			this.beteData=[];
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		methods: {
			//投注记录
			betLog() {
				this.$http({
					url: '/api/cai/bet_log',
					method: 'POST',
					data: {
						token: this.$store.state.user.token,
						limit: this.limit,
						page: this.page
					},
					success: (res) => {
						this.beteData = [...this.beteData, ...res.data.list];
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
						title: this.i18n.record.bettingrecord
					});
					this.betLog();
				} else {
					this.allListItem = true;
				}
			},
			onPullDownRefresh() {
				this.page = 1;
				this.limit = 20;
				this.beteData = [];
				uni.setNavigationBarTitle({
					title: this.i18n.record.bettingrecord
				});
				this.betLog();
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

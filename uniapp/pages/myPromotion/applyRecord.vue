<template>
	<view class="promotion">
		<view class="top-selete">
			<view class="top-selete-sub" :class="{active:active==index?'active':''}" v-for="(item,index) in tabs" :key="index"
			 @click="changeHandle(index)">{{item}}</view>
		</view>
		<view class="record" v-show="active==0">
			<view class="table-header">
				<view class="table-header-td" style="width: 50%;text-align: left;">{{i18n.WithdrawRecord.Amount}}</view>
				<view class="table-header-td" style="width:20%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;text-align: center;">{{i18n.WithdrawRecord.Remarks}}</view>
				<view class="table-header-td" style="width: 50%;text-align: right;">{{i18n.WithdrawRecord.time}}</view>
			</view>
			<view class="table-body" v-for="(item,index) in recodeData" :key="index">
				<view class="table-header-td" style="width: 50%;text-align: left;">{{item.money}}</view>
				<view class="table-header-td" style="width:20%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;text-align: center;">{{item.status==0?i18n.WithdrawRecord.Applying:item.status==1?i18n.WithdrawRecord.complete:i18n.WithdrawRecord.refuse}}</view>
				<view class="table-header-td" style="width: 50%;text-align: right;">{{item.createtime}}</view>
			</view>
		</view>
		
		<view class="record"  v-show="active==1">
			<view class="table-header">
				<view class="table-header-td" style="width: 50%;text-align: left;">{{i18n.WithdrawRecord.Amount}}</view>
				<view class="table-header-td" style="width: 50%;text-align: right;">{{i18n.WithdrawRecord.time}}</view>
			</view>
			<view class="table-body" v-for="(item,index) in recodeData" :key="index">
				<view class="table-header-td" style="width: 50%;text-align: left;">{{item.pay_amount}}</view>
				<view class="table-header-td" style="width: 50%;text-align: right;">{{item.datetime_text}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import nums from '@/utils/nums.js'
	export default {
		data() {
			return {
				tabs: [this._i18n.getLanguage().WithdrawRecord.Rechargerecord,this._i18n.getLanguage().WithdrawRecord.Withdrawalsrecord],
				active: 0,
				type: 1,
				limit: 20,
				page: 1,
				totalElements: 0,
				allListItem: false,
				recodeData: []
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().WithdrawRecord.title
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
		methods: {
			changeHandle(index) {
				this.recodeData=[];
				this.active = index;
				if(index==0){
					this.type = 1;
					this.getData();
				}else{
					this.getData2();
				}
				
			},
			//充值记录
			getData() {
				this.$http({
					url: '/api/moneyapi/money_log',
					method: 'POST',
					data: {
						token: this.$store.state.token,
						type: this.type,
						limit: this.limit,
						page: this.page
					},
					success: (res) => {
						if(res.data !=null){
							this.recodeData =[...this.recodeData,...res.data.list];
							this.totalElements = res.data.count;
						}
					}
				})
			},
			//提现记录
			getData2(){
				this.$http({
					url: '/api/moneyapi/money_add_log',
					method: 'POST',
					data: {
						token: this.$store.state.token,
						limit: this.limit,
						page: this.page
					},
					success: (res) => {
						this.recodeData =[...this.recodeData,...res.data.list];
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
					this.getData();
				} else {
					this.allListItem = true;
				}
			},
			onPullDownRefresh() {
				this.page = 1;
				this.limit = 20;
				this.recodeData=[];
				this.getData()
				setTimeout(function() {
					uni.stopPullDownRefresh();
				}, 1000);
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: rgb(245, 245, 245);
	}

	.promotion {
		margin-top: 5px;
		border-top: 1px solid #ededed;
		background-color: #ffffff;

		.top-selete {
			display: flex;
			border: 1px solid #11CCC0;
			line-height: 27px;

			.top-selete-sub {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 14px;
			}

			.active {
				background-color: #11CCC0;
				color: white;
			}
		}

		.reservation-chunk {
			display: flex;
			padding: 15px 10px;

			.reservation-chunk-sub {
				flex: 1;

				.reservation-chunk-sub-title {
					padding: 10px 0;
					font-size: 13px;
					color: #7d7d7d;
				}

				.reservation-chunk-sub-num {
					font-size: 16px;
				}
			}
		}
	}

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

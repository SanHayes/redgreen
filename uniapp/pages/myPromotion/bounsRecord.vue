<template>
	<view class="promotion">
		<view class="top-selete">
			<view class="top-selete-sub" :class="{active:active==index?'active':''}" v-for="(item,index) in tabs" :key="index"
			 @click="changeHandle(index)">{{item}}</view>
		</view>
		<view class="record">
			<view class="table-header">
				<view class="table-header-td" style="width: 40%;">{{i18n.bounsRecorde.time}}</view>
				<view class="table-header-td" style="width: 40%;text-align: center;">{{i18n.bounsRecorde.Amount}}</view>
				<view class="table-header-td" style="width:20%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;text-align: right;">{{i18n.bounsRecorde.Remarks}}</view>
			</view>
			<view class="table-body" v-for="(item,index) in recodeData" :key="index">
				<view class="table-header-td" style="width: 40%;">{{item.createtime}}</view>
				<view class="table-header-td" style="width: 40%;text-align: center;">{{item.money}}</view>
				<view class="table-header-td" style="width:20%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;text-align: right;">{{item.memo}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import nums from '@/utils/nums.js'
	export default {
		data() {
			return {
				tabs: [this._i18n.getLanguage().myPromotion.Level+' 1',this._i18n.getLanguage().myPromotion.Level+' 2'],
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
				title: this._i18n.getLanguage().bounsRecorde.title
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
				this.recodeData = [];
				this.active = index;
				if(index==0){
					this.type = 1;
				}else{
					this.type = 2;
				}
				this.getData();
			},
			getData() {
				this.$http({
					url: '/api/promotion/bonus',
					method: 'POST',
					data: {
						token: this.$store.state.token,
						type: this.type,
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

<template>
	<view class="promotion-content">
		<view class="my">
			<view class="top">
				<view class="left">
					<view class="nums">
						<view>₹</view>
						<view style="font-size: 30px;margin-left: 10px;">{{Contribution}}</view>
					</view>
					<view class="title">{{i18n.myPromotion.myBouns}}</view>
				</view>
				<view class="right">
					<view class="btn" @click="apply">{{i18n.myPromotion.Withdraw}}</view>
					<view class="btn" @click="recharge" style="margin-right: 15px;">{{i18n.myPromotion.Recharge}}</view>
				</view>
			</view>
		</view>

		<view class="record">
			<view class="record-item" style="border-right: 1px solid #ccc;" @click="bounsRecord">{{i18n.myPromotion.BonusRecord}}</view>
			<view class="record-item" @click="applyRecord">{{i18n.myPromotion.WithdrawRecord}}</view>
		</view>

		<view class="info">
			<view class="title">
				<view class="left">{{i18n.myPromotion.Promotion}}</view>
				<view class="right" @click="promotionRecord">{{i18n.myPromotion.PromotionRecord}} ></view>
			</view>
			<view class="middle">
				<view>{{i18n.myPromotion.Totalmembers}} :</view>
				<view class="nums">{{count}}</view>
			</view>
			<view class="middle">
				<view>{{i18n.myPromotion.Activememberstoday}} :</view>
				<view class="nums">{{activeNums}}</view>
			</view>
			<view class="promotion">
				<view class="top-selete">
					<view class="top-selete-sub" :class="{active:active==index?'active':''}" v-for="(item,index) in tabs" :key="index"
					 @click="changeHandle(index)">{{item}}</view>
				</view>
				<view class="reservation-chunk" v-show="active==0">
					<view class="reservation-chunk-sub">
						<view class="reservation-chunk-sub-title">{{i18n.myPromotion.TotalPeople}}</view>
						<view class="reservation-chunk-sub-num">{{inviter1_count}}</view>
					</view>
					<view class="reservation-chunk-sub">
						<view class="reservation-chunk-sub-title">{{i18n.myPromotion.Contribution}}</view>
						<view class="reservation-chunk-sub-num">₹ {{Contribution1}}</view>
					</view>
				</view>
				
				<view class="reservation-chunk" v-show="active==1">
					<view class="reservation-chunk-sub">
						<view class="reservation-chunk-sub-title">{{i18n.myPromotion.TotalPeople}}</view>
						<view class="reservation-chunk-sub-num">{{inviter2_count}}</view>
					</view>
					<view class="reservation-chunk-sub">
						<view class="reservation-chunk-sub-title">{{i18n.myPromotion.Contribution}}</view>
						<view class="reservation-chunk-sub-num">₹ {{Contribution2}}</view>
					</view>
				</view>
			</view>
		</view>

		<view class="invite">
			<view class="invite-item" style="color: #11CCC0;">{{i18n.myPromotion.InviteFriends}}</view>
			<view class="invite-item">
				<view class="btn"  @click='inviteFriends'>{{i18n.myPromotion.GoNow}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [this._i18n.getLanguage().myPromotion.Level+' 1',this._i18n.getLanguage().myPromotion.Level+' 2'],
				active: 0,
				count:0,//总人数
				activeNums:0,//活跃用户数
				Contribution:0,//总奖励
				inviter1_count:0,
				inviter2_count:0,
				Contribution1:0,
				Contribution2:0,
				todayCount:0,
				type:1
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().myPromotion.title
			})
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		mounted(){
			this.getData();
			this.getActiveData();
		},
		methods: {
			getData(){
				this.$http({
					url: '/api/promotion/promotion',
					method: 'POST',
					data: {
						token: this.$store.state.token,
						day:2,
					},
					success: (res) => {
						this.Contribution = res.data.Contribution;
						this.count = res.data.count;
						this.inviter1_count = res.data.inviter1_count;
						this.inviter2_count = res.data.inviter2_count;
						this.Contribution1 =res.data.Contribution1;
						this.Contribution2 = res.data.Contribution2

					}
				})
			},
			getActiveData(){
				this.$http({
					url: '/api/promotion/promotion',
					method: 'POST',
					data: {
						token: this.$store.state.token,
						day:'今日',
					},
					success: (res) => {
						this.activeNums = res.data.count;
					}
				})
			},
			changeHandle(index) {
				this.active = index;
				if(index==0){
					this.type = 1
				}else{
					this.type = 2
				}
			},
			apply(){
				uni.navigateTo({
					url:'./apply'
				})
			},
			recharge(){
				uni.navigateTo({
					url:'/pages/myPromotion/recharge'
				});
			},
			bounsRecord(){
				uni.navigateTo({
					url:'./bounsRecord'
				})
			},
			applyRecord(){
				uni.navigateTo({
					url:'./applyRecord'
				})
			},
			promotionRecord(){
				uni.navigateTo({
					url:'./promotionRecord'
				})
			},
			inviteFriends(){
				uni.navigateTo({
					url:'./inviteFriend'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: rgb(245, 245, 245);

		.my {
			background: #11ccc0;
			width: 100%;
			overflow: hidden;
			background-size: cover;
			color: #fefefe;
			font-size: 30px;
			padding-bottom: 20px;
			font-size: 16px;

			.top {
				display: flex;
				justify-content: space-between;
				padding: 20px 10px 0 16px;

				.left {
					display: flex;
					flex-direction: column;

					.nums {
						display: flex;
						align-items: center;
					}

					.title {
						margin-top: 5px;
						font-weight: 300;
					}
				}

				.right {
					.btn {
						background-color: #FFF;
						color: #11ccc0;
						border: none;
						border-radius: 20px;
						padding: 4px 12px;
						font-size: 14px;
						float: right;
						position: relative;
						top: 10px;
					}
				}
			}
		}

		.record {
			display: flex;
			text-align: center;
			padding: 5px 0;
			font-size: 16px;
			font-weight: 200;
			color: #272727;
			align-items: center;
			background-color: #fff;

			.record-item {
				flex: 1;
				position: relative;
				padding: 15px 20px;
			}
		}

		.info {
			background-color: #fff;
			margin-top: 10px;

			.title {
				font-size: 16px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 40px;
				padding-right: 15px;
				border-bottom: 1px solid #f2f2f2;

				.left {
					color: #11ccc0;
					border-left: 4px solid #11ccc0;
					padding-left: 10px;
					line-height: 40px;
				}

				.right {
					color: #929292;
					font-size: 14px;
				}
			}

			.middle {
				display: flex;
				font-size: 16px;
				padding: 5px 15px;
				color: #11CCC0;
				align-items: center;

				.nums {
					margin-left: 10px;
				}
			}

			.promotion {
				margin: 5px;
				border-top: 1px solid #ededed;

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
		}

		.invite {
			display: flex;
			font-size: 16px;
			align-items: center;
			background-color: #fff;
			justify-content: space-between;
			padding:15px;
			.btn{
				border:1px solid #11CCC0;
				padding:2px 12px; 
				color: #11CCC0;
				border-radius: 20px;
			}
		}
	}
</style>

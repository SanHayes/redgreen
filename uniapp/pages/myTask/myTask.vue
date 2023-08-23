<template>
	<view class="myTask">
		<view class="All-main">
			<view class="container">
				<view class="header">
					<view class="header-btnone">{{i18n.myTask.MyTask}}</view>
					<view class="header-text">{{i18n.myTask.getbenefits}}</view>
					<view class="header-view">
						<view class="header-dot-left"></view>
						<view class="header-dot-right"></view>
					</view>
					<view class="header-icon">
						<view class="header-rectangle"></view>
						<view class="header-rectangle header-icon-chang"></view>
					</view>
				</view>
				<view class="content">
					<view class="header-view">
						<view class="header-dot-left"></view>
						<view class="header-dot-right"></view>
					</view>
					<view class="Task-list"><view class="span">{{i18n.myTask.list}}</view></view>
					<view class="contentScroll" style="height: 378px;">
						<uni-list>
							<uni-list-item v-for="(item,index) in taskData" :key="item.id" :title="item.title" :note="item.data" clickable @click="tiaozhuan(item.id)">
								<template slot="footer" >
									<view style="display: flex;align-items: center;">
										<uni-tag :text="item.status==1?i18n.taskDel.Notapplied:i18n.taskDel.Alreadyapplied"  inverted circle :type="item.status==1?'default':'error'" size="small" class="tag"></uni-tag>
									</view>
								</template>
							</uni-list-item>
						</uni-list>
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
				taskData: [],
				page: 1,
				limit: 20,
				totalElements: 0,
				allListItem: false
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().myTask.title
			})
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		mounted() {
			this.getTask();
		},
		methods: {
			getTask() {
				this.$http({
					url: '/api/sundry/task_list',
					method: 'POST',
					data: {
						token: this.$store.state.token,
						limit: this.limit,
						page: this.page
					},
					success: (res) => {
						this.taskData = [...this.taskData, ...res.data.list];
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
					this.getTask();
				} else {
					this.allListItem = true;
				}
			},
			onPullDownRefresh() {
				this.page = 1;
				this.limit = 20;
				this.taskData = [];
				this.getTask()
				setTimeout(function() {
					uni.stopPullDownRefresh();
				}, 1000);
			},
			tiaozhuan(id) {
				uni.navigateTo({
					url: '/pages/myTask/taskDel?id=' + id,
				})
			}
		}
	}
</script>
<style>
	page {
		background-color: #f2f2f2;
	}
</style>

<style scoped lang="scss">
	.myTask {
		display: flex;
		flex-direction: column;
		padding: 5px 0;

		.header {
			height: 130px;
			background-color: white;
			border-radius: 5px;
			display: flex;
			flex-direction: column;

			.header-btnone {
				margin-top: 10px;
				width: 278px;
				height: 74px;
				font-size: 12px;
				border-radius: 20px;
				background: #f2f2f2;
				text-align: center;
				line-height: 50px;
				background: url('../../static/img/greenmoney.png') no-repeat;
				background-size: 100% auto;
				color: #FFFFFF;
				font-size: 16px;
				position: relative;
				left: 50%;
				transform: translateX(-50%);
			}

			.header-text {
				text-align: center;
				color: #FA9510;
			}

			.header-view {
				display: flex;
				justify-content: space-between;

				.header-dot-left {
					background: #00b8a9;
					width: 15px;
					height: 15px;
					margin: 0 0 5px 48px;
					border-radius: 50%;
				}

				.header-dot-right {
					background: #00b8a9;
					width: 15px;
					height: 15px;
					margin: 0 48px 5px 0;
					border-radius: 50%;
				}
			}

			.header-icon {
				justify-content: space-between;
				position: relative;

				.header-rectangle {
					height: 48px;
					width: 5px;
					background: #F7C80A;
					margin: -14px 54px;
					position: absolute;
					border-radius: 5px;
				}

				.header-icon-chang {
					right: 0;
				}
			}
		}

		.content {
			margin: 20px 0 0 0;
			background: #FFFFFF;
			border-radius: 5px;

			.header-view {
				display: flex;
				justify-content: space-between;

				.header-dot-left {
					background: #00b8a9;
					width: 15px;
					height: 15px;
					margin: 5px 0 0 50px;
					border-radius: 50%;
				}

				.header-dot-right {
					background: #00b8a9;
					width: 15px;
					height: 15px;
					margin: 5px 49px 0 0;
					border-radius: 50%;
				}
			}

			.Task-list {
				height: 10px;
				padding: 0 0 10px 0;
				margin: 10px 0 20px 0;

				.span {
					background: #00b8a9;
					color: #FFFFFF;
					display: inline-block;
					padding: 2px 8px 2px 0;
					font-size: 12px;
					border-radius: 0 10px 10px 0;
				}
			}

			.contentScroll {
				overflow-x: hidden;
				overflow-y: scroll;
				max-height: 68vh;
				margin-bottom: 15px;
			}
		}
	}
</style>

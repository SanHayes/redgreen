<template>
	<view class="taskDel">
		<uni-list>
			<uni-list-item direction="column" :title="delData.title" :note="delData.data">
				<template slot="footer">
					<view class="taskItem">
						<text>{{i18n.taskDel.Creationtime}}：</text>
						<text class="item">{{delData.createtime}}</text>
					</view>
					<view class="taskItem">
						<text>{{i18n.taskDel.Updatetime}}：</text>
						<text class="item">{{delData.updatetime}}</text>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				delData:''
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().taskDel.title
			})
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getData()
		},
		methods:{
			getData(){
				this.$http({
					url:'/api/sundry/notice_info',
					method:"POST",
					data:{
						token:this.$store.state.user.token,
						id:this.id
					},
					success:(res)=>{
						this.delData = res.data
					}
				})
			},
		}
	}
</script>

<style scoped>
	.taskItem{
		font-size: 14px;
		padding:10px 0;
		border-bottom:1px solid #f2f2f2;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.taskItem .item{
		color: #555;
	}
	.taskDel>>>.uni-list-item__content-title{
		text-align: center;
		font-size: 20px;
	}
	.taskDel>>>.uni-list-item__content-note{
		font-size: 14px;
		text-indent: 28px;
		padding: 15px 0;
		color: #555;
	}
</style>

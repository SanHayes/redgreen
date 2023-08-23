<template>
	<view class="taskDel">
		<uni-list>
			<uni-list-item direction="column" :title="delData.OutId" :note="delData.data">
				<template slot="footer">
					<view class="taskItem">
						<text>{{i18n.sugdel.status}}：</text>
						<text class="item" style="color: #dd534e;">{{delData.status==1?i18n.sugdel.Replied:i18n.sugdel.Unanswered}}</text>
					</view>
					<view class="taskItem">
						<text>{{i18n.sugdel.Typesof}}：</text>
						<text class="item" style="color: #dd534e;">{{delData.type==1?i18n.sugdel.Suggest:delData.type==2?i18n.sugdel.consult:delData.type==3?i18n.sugdel.Rechargeproblem:delData.type==4?i18n.sugdel.Withdrawalissues:delData.type==15?i18n.sugdel.Parityproblem:delData.type==6?i18n.sugdel.Redenvelope:i18n.sugdel.other}}</text>
					</view>
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
				title: this._i18n.getLanguage().sugdel.title
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
					url:'/api/sundry/suggest_info',
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
	.apply{
		padding:30px 15px;
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

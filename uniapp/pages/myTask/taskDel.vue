<template>
	<view class="taskDel">
		<uni-list>
			<uni-list-item direction="column" :title="delData.title" :note="delData.data">
				<template slot="footer">
					<view class="taskItem">
						<text>{{i18n.taskDel.Taskstatus}}：</text>
						<uni-tag :text="delData.status==1?i18n.taskDel.Notapplied:i18n.taskDel.Alreadyapplied"  inverted circle :type="delData.status==1?'default':'error'" size="small" class="tag"></uni-tag>
					</view>
					<view class="taskItem">
						<text>{{i18n.taskDel.missionrewards}}：</text>
						<text class="item" style="color: #dd534e;">{{delData.score}}</text>
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
		
		<view class="apply" v-show="status">
			<button class="btn" @click="apply">{{i18n.taskDel.complete}}</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				id:'',
				delData:'',
				status:false
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
			this.getDel()
		},
		methods:{
			getDel(){
				this.$http({
					url:'/api/sundry/task_info',
					method:"POST",
					data:{
						token:this.$store.state.user.token,
						id:this.id
					},
					success:(res)=>{
						if(res.data.status != 1){
							this.status = false
						}else{
							this.status = true
						}
						this.delData = res.data
					}
				})
			},
			apply(){
				this.$http({
					url:'/api/sundry/task_ok',
					method:"POST",
					data:{
						token:this.$store.state.user.token,
						id:this.id
					},
					success:(res)=>{
						if(res.code == 1){
							uni.showToast({
								title:this._i18n.getLanguage().taskDel.Successfulapplication,
								icon:'none'
							});
							this.getDel()
						}else{
							uni.showToast({
								title:this._i18n.getLanguage().taskDel.Applicationfailed,
								icon:'none'
							})
						}
					}
				})
			}
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
	.btn{
		background-color: #11CCC0;
		color: white;
	}
</style>

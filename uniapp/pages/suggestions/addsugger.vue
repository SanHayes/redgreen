<template>
	<view class="add">
		<view class="item">
			<view class="label">{{i18n.addsugger.Type}}</view>
			<view class="inp">
				<picker mode="selector" :range="range" value="0" @change="changeHandle">
					<view class="picker">
						<text>{{range[index]}}</text>
						<uni-icons type="arrowright"></uni-icons>
					</view>
				</picker>
			</view>
		</view>
		
		<view class="item">
			<view class="label">{{i18n.addsugger.OutId}}</view>
			<view class="inp">
				<input type="text" v-model="OutId"  :placeholder="i18n.addsugger.problem"/>
			</view>
		</view>
		
		<view class="item">
			<view class="label" style="align-self: flex-start;">{{i18n.addsugger.Description}}</view>
			<view class="inp">
				<textarea v-model="desc" :placeholder="i18n.addsugger.desc" maxlength="500" class="textarea" @input="inputChange"></textarea>
				<view class="count">{{count}}/500</view>
			</view>
		</view>
		<button type="default" class="btn" @tap="submit()">{{i18n.addsugger.submit}}</button>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				index:'',
				range:[this._i18n.getLanguage().addsugger.Suggest,this._i18n.getLanguage().addsugger.consult,this._i18n.getLanguage().addsugger.Rechargeproblem,this._i18n.getLanguage().addsugger.Withdrawalissues,this._i18n.getLanguage().addsugger.Parityproblem,this._i18n.getLanguage().addsugger.Redenvelopequestion,this._i18n.getLanguage().addsugger.other],
				OutId:'',
				desc:'',
				count:0
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().addsugger.title
			});
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		methods:{
			inputChange(event){
				this.count = event.detail.value.length;
			},
			changeHandle(event){
				this.index = event.detail.value
			},
			submit(){
				this.$http({
					url:'/api/sundry/suggest_add',
					method:'POST',
					data:{
						token:this.$store.state.user.token,
						type:this.index+1,
						OutId:this.OutId,
						data:this.desc
					},
					success:(res=>{
						if(res.code==1){
							uni.showToast({
								'icon':'none',
								'title':this._i18n.getLanguage().addsugger.addedsuccessfully,
								duration:3000
							});
							setTimeout(function(){
								uni.navigateBack({
									url:'/pages/suggestions/suggestions'
								})
							},3000)
						}else{
							uni.showToast({
								icon:'none',
								title:this._i18n.getLanguage().addsugger.addfailed,
								duration:3000
							})
						}
					})
				})
			}
		}
	}
</script>

<style scoped>
	.add{
		padding:15px;
	}
	.btn{
		margin-top: 30px;
		background-color: #11CCC0;
		color: white;
	}
	.item{
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom:1px solid #ccc;
		padding:12px 0;
	}
	.item .label{
		width: 100px;
	}
	.item .inp{
		flex:1;
	}
	.picker{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.textarea{
		width: 100%;
		box-sizing: border-box;
	}
	.count{
		font-size: 12px;
		font-weight: 500;
		text-align: right;
	}
</style>

<template>
	<view class="records">
		<view class="tabs">
			<view class="tabs-item" :class="{active:active==index?'active':''}" v-for="(item,index) in tabs" :key="index" @click="changeHadle(index)">{{item}}</view>
		</view>
		<view class="record">
			<view class="table-header">
				<view class="table-header-td" style="flex:2;justify-content: flex-start;">{{i18n.index.period}}</view>
				<view class="table-header-td">{{i18n.index.price}}</view>
				<view class="table-header-td">{{i18n.index.number}}</view>
				<view class="table-header-td" style="justify-content: flex-end;">{{i18n.index.result}}</view>
			</view>
			<view class="table-body" v-for="(item,index) in recodeData" :key="index">
				<view class="table-header-td" style="flex:2;justify-content: flex-start;">{{item.Period}}</view>
				<view class="table-header-td">{{item.Price}}</view>
				<view class="table-header-td">{{item.Number}}</view>
				<view class="table-header-td" style="justify-content: flex-end;">
					{{item.result}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				tabs:['Given Record','Recevied Record'],
				active:0,
				recodeData:[{
					Period: '20200916300',
					Price: '203990',
					Number: '1',
					result:'24'
				},{
					Period: '20200916300',
					Price: '203990',
					Number: '1',
					result:'24'
				},{
					Period: '20200916300',
					Price: '203990',
					Number: '1',
					result:'24'
				},{
					Period: '20200916300',
					Price: '203990',
					Number: '1',
					result:'24'
				}]
			}
		},
		onShow(){
			uni.setNavigationBarTitle({
			        title:this._i18n.getLanguage().redEnvelop.title
			})
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		methods:{
			changeHadle(index){
				this.active = index;
			}
		}
	}
</script>
<style>
	page{
		background-color: rgb(245, 245, 245);
	}
</style>

<style scoped>
	.records{
		padding:15px;
	}
	.tabs{
		display: flex;
		align-items: center;
		border:1px solid #11CCC0;
		border-radius: 5px;
		height: 30px;
	}
	.tabs .tabs-item{
		flex:1;
		text-align: center;
		color: #11CCC0;
		font-size: 14px;
		line-height: 30px;
	}
	.active{
		background-color: #11CCC0!important;
		color: white!important;
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
		display: flex;
		align-items: flex-end;
		padding: 10px 0;
		flex: 1;
		display: flex;
		justify-content: center;
	}
	
	.table-body .table-header-td {
		font-size: 13px;
		height: 40px;
		line-height: 40px;
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #555;
	}
</style>

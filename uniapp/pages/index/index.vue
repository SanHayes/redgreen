<template>
	<view class="container">
		<view class="my">
			<view class="top-header">
				<view>
					<view>{{i18n.index.availableBalance}}</view>
					<view>₹<text style="font-size: 19px;padding-left: 5px;">{{$store.state.user.money}}</text></view>
				</view>
				<view @click="ruleHandle()">
					<image src="../../static/img/rule.png" alt=""></image>
				</view>
			</view>
			<view class="customerNumber">No.{{$store.state.user.id}}</view>
		</view>
		<view>
			<view class="reservation-chunk">
				<view class="reservation-chunk-sub">
					<view class="reservation-chunk-sub-title">
						<view>{{i18n.index.period}}</view>
						<image src="../../static/img/well.png" alt=""></image>
					</view>
					<view class="reservation-chunk-sub-num">{{period}}</view>
				</view>
				<view class="reservation-chunk-sub" style="text-align: right;">
					<view class="reservation-chunk-sub-title" style="justify-content: flex-end;">
						<view>{{i18n.index.countDown}}</view>
					</view>
					<view class="reservation-chunk-sub-num" style="display: flex;justify-content: flex-end;">
						<view class="countDown">
							<view class="nums nums-color">0</view>
							<view class="nums nums-color">{{v1}}</view>
							<view class="nums">:</view>
							<view class="nums nums-color">{{v2}}</view>
							<view class="nums nums-color">{{v3}}</view>
						</view>
					</view>
				</view>
			</view>

			<view class="kline">
				<view class="buttonBox">
					<view class="order">
						<button class="btn" style="background-color: #1eb93d;" @click="open('#1eb93d',i18n.index.green,'green')">{{i18n.index.green}}</button>
					</view>
					<view class="violet">
						<button class="btn" style="background-color: #ea3af0;" @click="open('#ea3af0',i18n.index.violet,'violet')">{{i18n.index.violet}}</button>
					</view>
					<view class="sell">
						<button class="btn" style="background-color: #f52828;" @click="open('#f52828',i18n.index.red,'red')">{{i18n.index.red}}</button>
					</view>
				</view>
				<view class="buttonBox">
					<view class="number" @click="open('#007acc',i18n.index.select + ' 0',0)" style="background:linear-gradient(#f52828,#ea3af0)">0</view>
					<view class="number" style="margin:0 10px;backgroundColor:#1eb93d" @click="open('#007acc',i18n.index.select + ' 1',1)">1</view>
					<view class="number" @click="open('#007acc',i18n.index.select + ' 2',2)" style="background:#f52828">2</view>
					<view class="number" style="margin:0 10px;backgroundColor:#1eb93d" @click="open('#007acc',i18n.index.select + ' 3',3)">3</view>
					<view class="number" @click="open('#007acc',i18n.index.select + ' 4',4)" style="background:#f52828">4</view>
				</view>
				<view class="buttonBox">
					<view class="number" @click="open('#007acc',i18n.index.select + ' 5',5)" style="background:linear-gradient(#1eb93d,#ea3af0)">5</view>
					<view class="number" style="margin:0 10px;background:#f52828" @click="open('#007acc',i18n.index.select + ' 6',6)">6</view>
					<view class="number" @click="open('#007acc',i18n.index.select + ' 7',7)" style="background:#1eb93d">7</view>
					<view class="number" style="margin:0 10px;background:#f52828" @click="open('#007acc',i18n.index.select + ' 8',8)" >8</view>
					<view class="number" @click="open('#007acc',i18n.index.select + ' 9',9)" style="background:#1eb93d">9</view>
				</view>
			</view>
			<view class="orders">
				<view class="title">
					<text>{{i18n.index.record}}</text>
					<text class="more" @click="caiLogPage()">{{i18n.index.more}}&nbsp;></text>
				</view>
				<view>
					<view class="record">
						<view class="table-header">
							<view class="table-header-td" style="width: 30%;">{{i18n.index.period}}</view>
							<view class="table-header-td" style="width: 50%;text-align: center;">{{i18n.index.number}}</view>
							<view class="table-header-td" style="width: 20%;text-align: right;">{{i18n.index.result}}</view>
						</view>
						<view class="table-body" v-for="(item,index) in recodeData" :key="index">
							<view class="table-header-td" style="width: 30%;">{{item.qishu}}</view>
							<view class="table-header-td" :style="{color: item.result%2?'#1eb83f':'red'}" style="width: 50%;text-align: center;">{{item.result}}</view>
							<view class="table-header-td" style="width: 20%;text-align: right;display: flex;justify-content: flex-end;">
								<view class="point-box__anodd" v-show="item.result==1||item.result==3||item.result==5||item.result==7||item.result==9?true:false"></view>
								<view class="point-box__add" v-show="item.result==0||item.result==2||item.result==4||item.result==6||item.result==8?true:false"></view>
								<view class="point-box__aliquot" v-show="item.result==0||item.result==5?true:false"></view>
								<view class="point-box__no" v-show="item.result!=0&&item.result!=5?true:false"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="thick-box"></view>
			<view class="orders">
				<view class="title">
					<text>{{i18n.index.my}} {{i18n.index.order}}</text>
					<text class="more" @click="betLogPage()">{{i18n.index.more}}&nbsp;></text>
				</view>
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
							<view class="table-header-td" style="width: 20%;text-align: right;" :style="{color: parseInt(item.result)<0?'#1eb93d':'red'}">{{item.result}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<uni-popup ref="popup" type="bottom" style="z-index:10000">
			<view class="tranBox">
				<view class="top">
					<view class="box-pre-order" :style="{backgroundColor:color}">{{topTitle}}</view>
				</view>

				<view class="middle">
					<view class="middleMoney">
						<view class="lable">{{i18n.index.money}}</view>
						<view class="middleContent">
							<view class="middleContentNum" :class="{moneyActive:moneyActive==index?'moneyActive':''}" v-for="(item,index) in Money"
							 :key="index" @click="moneyHandle(item,index)">{{item}}</view>
						</view>
					</view>

					<view class="middleMoney" style="margin-top: 15px;">
						<view class="lable">{{i18n.index.number}}</view>
						<view class="middleContent">
							<view class="middleContentNum" :class="{NumberActive:NumberActive==index?'NumberActive':''}" v-for="(item,index) in number"
							 :key="index" @click="NumberHandle(item,index)">{{item}}</view>
						</view>
					</view>

					<view class="middleMoney" style="margin-top: 15px;">
						<view class="middleContent" style="justify-content: flex-end;margin-right: 5px;">
							<uni-number-box @change="bindChange" :min="1" :max="999" v-model="value"></uni-number-box>
						</view>
					</view>
					<view class="middleMoney" style="margin-top: 15px;">
						<view class="middleContent" style="justify-content: flex-end;margin-right: 5px;">
							<view style="color: #988383;font-size: 14px;">{{i18n.index.hands}}</view>
						</view>
					</view>
				</view>
				<view class="bottom">
					<button class="btn cancel" @click="cancelHandle()">{{i18n.login.cancel}}</button>
					<button class="btn confirm" :style="{backgroundColor:color}" @click="confirmHandle()">{{i18n.login.confirm}}</button>
				</view>
			</view>
		</uni-popup>

		<view class="task" v-show="taskShow">
			<view class="cha" @click="cha">
				<image src="../../static/img/cha.png" alt="">
					<image>
			</view>
			<view class="taskBox">
				<view class="taskHeader">
					<text style="font-weight: bold;">{{i18n.index.title}}</text>
				</view>
				<view class="taskSection">
					<view class="taskItem">{{i18n.index.a1}}</view>
					<view class="taskItem">{{i18n.index.a2}}</view>
					<view class="taskItem">{{i18n.index.a3}}</view>
					<view class="taskItem">{{i18n.index.a4}}</view>
					<view class="taskItem">{{i18n.index.a5}}</view>
					<view class="taskItem">{{i18n.index.a6}}</view>
					<view class="taskItem">{{i18n.index.a7}}</view>
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
				userInfo: {
					money: this.$store.state.user,
					id: ''
				},
				period: '',
				color: '',
				topTitle: '',
				moneyActive: 1,
				NumberActive: '-1',
				Money: ['10', '100', '1000', '10000'],
				number: ['3', '5', '10'],
				value: 1,
				taskShow: false,
				recodeData: [],
				Interval: '',
				ContractMoney: 10,
				bet_code: '',
				beteData:[],
				count_down:0,
				v1:0,
				v2:0,
				v3:0,
				disabled:false,
			}
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		onShow() {
			uni.setTabBarItem({
				index: 0,
				text: this._i18n.getLanguage().currency.home
			})
			uni.setTabBarItem({
				index: 1,
				text: this._i18n.getLanguage().currency.record
			})
			uni.setTabBarItem({
				index: 2,
				text: this._i18n.getLanguage().currency.my
			});
			clearInterval(this.Interval);
			this.getUserInfo();
			this.caiLog();
			this.betLog();
			this.caiInfo();
		},
		onHide() {
			this.recodeData=[];
			this.beteData=[];
		},
		methods: {
			counDown() {
				if(this.count_down<=0){
					this.count_down = 180;
					this.period+=1;
				}
				if(this.count_down == 170){
					this.getUserInfo();
					this.caiLog();
					this.betLog();
				}
				this.v1 = parseInt(this.count_down/60);
				this.v2 = parseInt((this.count_down%60)/10);
				this.v3 = parseInt((this.count_down%60)%10);
				this.count_down--;
			},
			getUserInfo() {
				this.$http({
					url: "/api/users/index",
					method: 'POST',
					data: {
						token: this.$store.state.token
					},
					success: (res) => {
						if(res.code==1){
							this.$store.commit('login', res.data);
						}else{
							uni.navigateTo({
								url:'/pages/login/login'
							})
						}
					}
				});
			},
			caiInfo() {
				clearInterval(this.Interval);
				this.$http({
					url: "/api/cai/cai_current",
					method: 'POST',
					data: {
						token: this.$store.state.token
					},
					success: (res) => {
						let _this = this;
						if(res.data != null){
							this.period = res.data.qishu;
							this.count_down = res.data.count_down
							this.Interval = setInterval(function(){
								_this.counDown()
							},1000)
						}
					}
				});
			},
			ruleHandle() {
				this.taskShow = true;
			},
			cha() {
				this.taskShow = false;
			},
			open(color, text, betCode) {
				this.topTitle = text;
				this.color = color;
				this.bet_code = betCode
				this.value = 1;
				this.ContractMoney = 10;
				this.NumberActive = '-1';
				this.moneyActive = 0;
				this.$refs.popup.open()
			},
			cancelHandle() {
				this.$refs.popup.close();
			},
			confirmHandle() {
				let money = nums.Mul(parseInt(this.ContractMoney), parseInt(this.value));
				this.$http({
					url: '/api/cai/bet',
					method: 'POST',
					data: {
						token: this.$store.state.user.token,
						bet_code: this.bet_code,
						money: money
					},
					success: (res) => {
						if (res.code == 0) {
							this.$refs.popup.close();
							uni.showToast({
								icon: 'none',
								title: res.msg,
								duration:3000,
								position: 'top'
							});
							
						}else{
							uni.showToast({
								icon: 'none',
								title: this.i18n.index.Betsuccessful,
								duration:3000,
								position: 'top'
							});
							this.getUserInfo();
							this.caiLog();
							this.betLog();
						}
						this.$refs.popup.close();
					}
				})
			},
			bindChange(val) {
				if (val == 3) {
					this.NumberActive = 0;
				} else if (val == 5) {
					this.NumberActive = 1;
				} else if (val == 10) {
					this.NumberActive = 2;
				} else {
					this.NumberActive = -1;
				}
				this.value = val;
			},
			moneyHandle(item, index) {
				this.moneyActive = index;
				this.ContractMoney = item;
			},
			NumberHandle(item, index) {
				this.NumberActive = index;
				this.value = item;
			},
			caiLogPage(){
				uni.navigateTo({
					url: '/pages/index/caiLog'
				})
			},
			betLogPage(){
				uni.navigateTo({
					url: '/pages/index/betLog'
				})
			},
			//开奖记录
			caiLog() {
				this.$http({
					url: '/api/cai/cai_log',
					method: 'POST',
					data: {
						token: this.$store.state.user.token,
						limit: 5,
						page: 1
					},
					success: (res) => {
						if(res.data != null){
							this.recodeData = res.data.list;
						}
					}
				})
			},
			//投注记录
			betLog(){
				this.$http({
					url: '/api/cai/bet_log',
					method: 'POST',
					data: {
						token: this.$store.state.user.token,
						limit: 20,
						page: 1
					},
					success: (res) => {
						if(res.data != null){
							this.beteData = res.data.list;
						}
					}
				})
			},
			onPullDownRefresh() {
				clearInterval(this.Interval);
				this.getUserInfo();
				this.caiLog();
				this.betLog();
				this.caiInfo();
				setTimeout(function() {
					uni.stopPullDownRefresh();
				}, 1000);
			},
		}
	}
</script>

<style>
	.my {
		background: url(../../static/img/transction-bgimg.png) center no-repeat;
		width: 100%;
		overflow: hidden;
		background-size: cover;
		color: #fefefe;
	}

	.top-header {
		display: flex;
		padding: 63px 12px 0;
		justify-content: space-between;
		align-items: flex-start;
	}


	.customerNumber {
		padding: 15px;
		font-size: 13px;
	}

	.wyb-tabs {
		border-bottom: 1px solid #ccc;
	}

	.reservation-chunk {
		display: flex;
		margin-bottom: 10px;
		padding: 0 15px;
	}

	.reservation-chunk-sub {
		flex: 1;
	}

	.reservation-chunk-sub-title {
		padding: 10px 0;
		font-size: 16px;
		color: #7d7d7d;
		display: flex;
		align-items: center;
	}

	.reservation-chunk-sub-title uni-image {
		width: 18px;
		height: 14px;
		padding-left: 5px;
	}

	.reservation-chunk-sub-num {
		font-size: 24px;
		color: #333;
	}

	.countDown {
		display: flex;
	}

	.countDown .nums {
		margin-left: 5px
	}

	.countDown .nums-color {
		background-color: #f2f2f2;
		padding: 0 4px;
		font-size: 24px;
		border-radius: 5px;
	}

	.kline {
		padding: 15px 12px 0;
	}

	.buttonBox {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}

	.buttonBox .order,
	.buttonBox .violet,
	.buttonBox .sell {
		flex: 1;
		align-items: center;
	}

	.buttonBox .violet {
		margin: 0 10px;
	}

	.buttonBox .btn {
		color: white;
		font-size: 16px;
		border-radius: 0;
		padding: 0;
	}

	.buttonBox .btn::after {
		border-radius: 0;
	}

	.number {
		flex: 1;
		//background-color: #007acc;
		/* background:linear-gradient(top,#ccc,#000); */
		color: white;
		text-align: center;
		padding: 5px 12px;
		box-sizing: border-box;
	}

	.orders .title {
		color: #11ccc0;
		position: relative;
		margin: 15px 14px 0;
		padding: 5px 0;
		display: flex;
		justify-content: space-between;
		font-size: 16px;
	}

	.orders .title::before {
		display: block;
		background-color: #11ccc0;
		content: ' ';
		left: -15px;
		top: 0;
		height: 100%;
		width: 4px;
		position: absolute;
		border-top-left-radius: 0rem;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 0;
	}

	.more {
		color: #707070;
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

	.thick-box {
		margin-top: 15px;
		width: 100%;
		height: 10px;
		background-color: #f6f6f6;
	}

	uni-image {
		width: 65px;
		height: 20px;
	}

	.tranBox {
		height: 350px;
		width: 100%;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.top {
		height: 40px;
		border-bottom: 1px solid #ccc;
	}

	.top .box-pre-order {
		display: inline-block;
		position: relative;
		padding: 5px 40px;
		height: 38px;
		color: #FFF;
		font-size: 18px;
		line-height: 38px;
	}

	.top .box-pre-order::after {
		content: '';
		display: block;
		position: absolute;
		width: 0;
		height: 0;
		right: -8px;
		bottom: 0;
		border: 4px solid;
		border-color: #ccc transparent transparent #ccc;
	}


	.middle {
		flex: 1;
		padding: 15px;
		display: flex;
		flex-direction: column;
	}

	.middle .lable {
		font-size: 16px;
		margin-bottom: 5px;
		color: #333;
	}

	.middleMoney .middleContent {
		display: flex;
		justify-content: space-between;
	}

	.middle .middleContentNum {
		background-color: #ccc;
		flex: 1;
		text-align: center;
		font-size: 16px;
		margin: 0 5px;
		padding: 5px 8px;
		color: #555;
	}

	.moneyActive {
		background-color: #11ccc0 !important;
		color: #ffffff !important;
	}

	.NumberActive {
		background-color: #11ccc0 !important;
		color: #ffffff !important;
	}

	.bottom {
		display: flex;
	}


	.bottom .btn {
		flex: 1;
		border: none;
		border-radius: 0;
		border: 0;
		color: white;
	}

	.bottom .cancel {
		background-color: #efefef;
		color: #333;
	}

	.bottom .btn::after {
		border-radius: 0;
	}

	.task {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10000;
	}

	.taskBox {
		width: 90%;
		height: 80%;
		background-color: white;
	}

	.taskHeader {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		padding: 10px 15px;
		box-sizing: border-box;
	}

	.taskSection {
		font-size: 12px;
		padding: 0 15px;
		height: calc(100% - 80px);
		overflow-y: scroll;
		color: #333;
	}

	.textAlgin {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cha {
		position: absolute;
		top: 30px;
		right: 0;
	}

	.cha uni-image {
		width: 25px;
		height: 25px;
	}

	.taskItem {
		padding-bottom: 15px;
		font-size: 14px;
	}
</style>

<template>
	<view>
		<uni-list>
			<uni-list-item :title="active?'Lucky red envelope':'Fixed red envelope'" note="" :showArrow='false'>
				<template slot="right">
					<button type="default" size="mini" class="btn" @click="changeHandle">Click to change</button>
				</template>
			</uni-list-item>
			<uni-list-item title="TotalBonus in Red-Envelope" note="" :showArrow='false'>
				<template slot="right">
					<input type="text" v-model="totalBonus"  class="inp"/>
				</template>
			</uni-list-item>
			<uni-list-item title="Numbers of Red-Envelope" note="" :showArrow='false'>
				<template slot="right">
					<input type="text" v-model="Numbers" class="inp"/>
				</template>
			</uni-list-item>
			<uni-list-item :showArrow='false'>
				<template>
					<input type="text" v-model="code" class="codeInp" placeholder="Verification Code"/>
				</template>
				<template slot="right">
					<button type="default" size="mini" class="btn bor" @click="getCode">OTP</button>
				</template>
			</uni-list-item>
		</uni-list>
		<view style="margin:30px 0 ">
			<button type="default" class="btn putIn">Put In</button>
		</view>
		<view>
			<button type="default" class="btn putIn" style="background-color: #009688;" @click="records">Records</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				active:true,
				totalBonus:'0.00',
				Numbers:0,
				code:''
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
			changeHandle(){
				this.active = !this.active;
			},
			getCode(){
				
			},
			records(){
				uni.navigateTo({
					url:'./records'
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: rgb(245, 245, 245);
	}
</style>

<style scoped>
	.btn{
		background-color: #11CCC0;
		color: white;
		border:none;
		border-radius: 0;
		padding:5px 25px;
	}
	.btn::after{
		border:none;
		border-radius: 0;
	}
	.uni-list-item--hover {
		background-color: #ffffff;
	}
	.inp{
		width: 80px;
		text-align: right;
		border:1px solid #ccc;
		padding:5px 12px;
		border-radius: 5px;
	}
	.codeInp{
		width: 90%;
		border:1px solid #ccc;
		padding:8px 12px;
	}
	.bor{
		border-bottom: 1px solid #11CCC0;
	}
	.putIn{
		width: 80%;
		text-align: center;
		padding:0;
	}
</style>

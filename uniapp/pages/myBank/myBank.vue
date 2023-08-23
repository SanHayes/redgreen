<template>
	<view class="mybank">
		<view class="addBank">
			<uni-list v-show="show">
				<uni-list-item :title="i18n.addBank.Bankcardnumber">
					<template slot="footer">
						<text class="col">{{fromData.Account_number}}</text>
					</template>
				</uni-list-item>
				<uni-list-item :title="i18n.addBank.actualname">
					<template slot="footer">
						<text class="col">{{fromData.Actual_name}}</text>
					</template>
				</uni-list-item>
				<uni-list-item :title="i18n.addBank.address">
					<template slot="footer">
						<text class="col">{{fromData.Address}}</text>
					</template>
				</uni-list-item>
				<uni-list-item :title="i18n.addBank.city">
					<template slot="footer">
						<text class="col">{{fromData.City}}</text>
					</template>
				</uni-list-item>
				<uni-list-item :title="i18n.addBank.email">
					<template slot="footer">
						<text class="col">{{fromData.Email}}</text>
					</template>
				</uni-list-item>
				<uni-list-item :title="i18n.addBank.IFSCcode">
					<template slot="footer">
						<text class="col">{{fromData.IFSC}}</text>
					</template>
				</uni-list-item>
				<uni-list-item :title="i18n.addBank.mobilephonenumber">
					<template slot="footer">
						<text class="col">{{fromData.Mobile_number}}</text>
					</template>
				</uni-list-item>
			</uni-list>
			<button type="default" class="btn putIn" @click="addBank">+{{!active?i18n.myBank.bindBankCard:i18n.myBank.editBankCard}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fromData: '',
				active: '',
				show:false,
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this._i18n.getLanguage().myBank.title
			});
			this.getBankinfo();
		},
		computed: {
			i18n() {
				return this._i18n.getLanguage()
			}
		},
		methods: {
			getBankinfo() {
				this.$http({
					url: '/api/users/bankinfo',
					method: 'POST',
					data: {
						token: this.$store.state.user.token
					},
					success: (res) => {
						if(res.data == null){
							this.show = false;
						}else{
							this.fromData = res.data;
							this.active = res.data.id;
							this.show = true;
						}
					}
				})
			},
			addBank() {
				uni.navigateTo({
					url: './addBank'
				})
			}
		}
	}
</script>

<style scopd lang="scss">
	.addBank {}

	.btn {
		width: 80%;
		background-color: #11CCC0;
		color: white;
		border: none;
		border-radius: 0;
		margin-top: 30px;
	}

	.col {
		color: #555;
	}
</style>

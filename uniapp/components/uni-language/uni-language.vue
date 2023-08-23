<template>
    <view class="center">
        <view class="center-list">
            <navigator url="../../pages/login/login" open-type="redirect" hover-class="navigator-hover">
               <view class="center-list-item">
                    <picker style="width: 300upx;" @change="bindPickerChange" :value="index" :range="array" range-key="name">
                        <view class="uni-input picker-view">{{array[index].name}}</view>
                    </picker>
                </view>
            </navigator>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            array: [{name:'English'},{name: 'हिंदी'}],
        }
    },
    methods: {
        bindPickerChange: function(e) {
            this.index = e.detail.value
            if(this.index == 0){
                this._i18n.setLocale('en')
            }else if(this.index == 1){
                this._i18n.setLocale('hi')
            }
			uni.reLaunch({
			                url: 'index'
			            });
        }
    }
}
</script>

<style>

</style>
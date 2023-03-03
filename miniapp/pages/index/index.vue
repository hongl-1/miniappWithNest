<template>
	<view class="home">
		<view class="exam-wrap">
      <view class="exam-parent-item tc" v-for="exam of examList" :key="exam.id">
        <view class="title ma h-128 lh-128">{{ exam.title }}</view>
        <view class="exam-child flex flex-x-between" v-for="child of exam.children" :key="child.id">
          <view class="title">
            <u-button type="primary" @click="examDetail(child.id)">{{ child.title }}</u-button>
          </view>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
	import request from '../../utils/request'
  export default {
		data() {
			return {
        examList: []
			}
		},
		onLoad() {
      this.getExamList()
		},
		methods: {
			getExamList() {
				request.get('/exam-category/tree').then(res => {
					this.examList = res.data
				})
			},
      examDetail(id) {
        uni.navigateTo({
          url: '/pages/topicCategory/topicCategory?id=' + id
        })
      }
		}
	}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 0 20rpx;
  .exam-parent-item {
    width: 100%;
    .exam-child {
      width: 100%;
      .title {
        width: 45%;
      }
    }
  }
}
</style>

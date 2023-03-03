<template>
	<view class="topic-category">
<!--    <view class="topic-category-title h-120 lh-120 tc">知识点分类</view>-->
		<view class="category-list mt-80 flex flex-x-between">
      <view class="category-item" v-for="item of topicCategoryList" :key="item.id">
        <u-button type="primary" @click="goTopic(item.id, item.title)">{{ item.title }}</u-button>
      </view>
    </view>
	</view>
</template>

<script>
	import request from "../../utils/request";
  
  export default {
		data() {
			return {
        topicCategoryList: []
			};
		},
    onLoad(options) {
      this.getTopicCategoryList(options.id)
    },
    methods: {
      getTopicCategoryList(examId) {
        request.get('/topic-category/findByExamId', { examId }).then(res => {
          this.topicCategoryList = res.data
        })
      },
      goTopic(id, title) {
        uni.navigateTo({
          url: `/pages/topic/topic?id=${id}&title=${title}`
        })
      }
    }
	}
</script>

<style lang="scss" scoped>
.topic-category {
  padding: 0 20rpx;
  overflow: hidden;
  .topic-category-title {
    font-size: 28rpx;
  }
  .category-list {
    width: 100%;
    .category-item {
      width: 48%;
    }
  }
}
</style>

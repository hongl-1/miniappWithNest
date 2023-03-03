<template>
  <view class="topic">
    <view class="topic-item mt-50">
      {{ topicList[currentIndex].content }}
    </view>
    <view class="buttons flex flex-x-between flex-y-center px-24">
      <u-button type="primary" text="上一条" @click="prev" :disabled="currentIndex <= 0"></u-button>
      <u-button>{{ (currentIndex + 1) + '/' + topicList.length }}</u-button>
      <u-button type="primary" text="下一条" @click="next" :disabled="currentIndex >= topicList.length - 1"></u-button>
    </view>
  </view>
</template>

<script>
import request from "../../utils/request";

export default {
  data() {
    return {
      topicList: [],
      currentIndex: 0,
    };
  },
  onLoad(options) {
    uni.setNavigationBarTitle({
      title: options.title
    })
    this.getTopicCategoryList(options.id)
  },
  methods: {
    getTopicCategoryList(categoryId) {
      request.get('/topic/findByCategoryId', { categoryId, audit: 1 }).then(res => {
        this.topicList = res.data
      })
    },
    prev() {
      if(this.currentIndex > 0)
        this.currentIndex--
    },
    next() {
      if(this.currentIndex < this.topicList.length - 1)
        this.currentIndex++
    }
  }
}
</script>

<style lang="scss" scoped>
.topic {
  overflow: hidden;
  .topic-item {
    width: 100%;
    height: 60vh;
    overflow-y: scroll;
  }
  .buttons {
    width: 100%;
    /deep/ .u-button {
      width: 30%;
    }
  }
}
</style>

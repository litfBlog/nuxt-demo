<script lang="ts" setup name="friend">
import type { HomeLink } from 'types/api'
import { ElTooltip } from 'element-plus'

const { data } = await useAsyncData('count', () =>
  $fetch('https://api.litf.com.cn/api/friendLink/getHomeLink')
)
</script>

<template>
  <div class="friend-link">
    <template v-for="i in (data as HomeLink).data" :key="i.id">
      <a class="item" :href="i.url" target="_blank">
        <img :src="i.icon" :alt="i.name" />
        <span>{{ i.name }}</span>
        <client-only>
          <el-tooltip :content="i.desc" placement="bottom" effect="light">
            <div class="desc"></div>
          </el-tooltip>
        </client-only>
      </a>
    </template>
  </div>
</template>

<style lang="less" scoped>
.friend-link {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}
.item {
  width: 120px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1000px;
  padding: 5px 15px 5px 10px;
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;
  position: relative;
  img {
    height: 100%;
    border-radius: 50%;
  }
  &:nth-child(1) {
    background-color: #d999ff;
  }
  &:nth-child(2) {
    background-color: #8dc4ff;
  }
  &:nth-child(3) {
    background-color: #f887e0;
  }
  &:nth-child(4) {
    background-color: #6fd4ca;
  }
  .desc {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
</style>

<script lang="ts" setup>
import dayjs from 'dayjs'

const endTime = dayjs('2023-1-1 00:00:00')

const view = ref('')

setInterval(() => {
  const day = endTime.diff(new Date(), 'hour')
  const ms = endTime.diff(new Date())
  view.value = `${day}:${dayjs(ms).format('mm:ss')}`
}, 1000)
</script>

<template>
  <div>
    <div class="date">
      {{ view }}
    </div>
    <friend-link></friend-link>
    <div class="info">
      <div class="copyright">©2021-2022 litfa all rights reserved.</div>
      <div class="hr"></div>
      <div class="icp">
        <a href="https://beian.miit.gov.cn/">豫ICP备2021024510号-2</a>
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=4101820200807"
        >
          <img src="https://www.litf.com.cn/img/icp.d0289dc0.png" /> 豫公网安备
          4101820200807号
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.date {
  font-size: 60px;
  text-align: center;
  margin-bottom: 200px;
  margin-top: 88px;
}
.info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  text-align: center;
  width: 100%;
  font-size: 10px;
  position: absolute;
  bottom: 0;
  .hr {
    height: 0;
    width: 40%;
    margin: 3px auto;
    border-top: 1px solid #aaaa;
  }
  .icp {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }
  img {
    width: 12px;
    margin-left: 18px;
  }
  a {
    color: #666;
    text-decoration: none;
  }
}
</style>

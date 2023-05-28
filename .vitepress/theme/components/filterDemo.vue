<script setup>
import { useData } from 'vitepress'
const {
  site,
  theme,
  lang
} = useData()
</script>
<template>
  <div :class="['demo', lang === 'en' && 'demo_en']">
    <ul class="container">
      <li class="item">
        <el-card shadow="never">
          <a :href="`/demo/filter/linear.html?lang=${lang}`" target="_blank">
            <el-image fit="scale-down" style="width: 100%; height: 120px;" src="/img/linear.png"/>
          </a>
          <h3>linear</h3>
          <p>
            {{ lang === 'en' ? 'Application Scenario' : '应用场景'}}<br>
            {{lang === 'en' ? 'Suitable for data filtering' : '适用于数据筛选'}}
          </p>
          <a class="itemButton" :href="`/demo/filter/linear.html?lang=${lang}`" target="_blank">Demo</a>
        </el-card>
      </li>
      <li class="item">
        <el-card shadow="never">
          <a :href="`/demo/filter/matrix.html?lang=${lang}`" target="_blank">
            <el-image fit="scale-down" style="width: 100%; height: 120px;" src="/img/matrix.png"/>
          </a>
          <h3>matrix</h3>
          <p>
            {{ lang === 'en' ? 'Application Scenario' : '应用场景'}}<br>
            {{lang === 'en' ? 'Suitable for data filtering' : '适用于数据筛选'}}
          </p>
          <a class="itemButton" :href="`/demo/filter/matrix.html?lang=${lang}`" target="_blank">Demo</a>
        </el-card>
      </li>
      <li class="item">
        <el-card shadow="never">
          <a :href="`/demo/filter/quick-search.html?lang=${lang}`" target="_blank">
            <el-image fit="scale-down" style="width: 100%; height: 120px;" src="/img/quick-search.png"/>
          </a>
          <h3>quick-search</h3>
          <p>
            {{ lang === 'en' ? 'Application Scenario' : '应用场景'}}<br>
            {{lang === 'en' ? 'Suitable for search' : '适用于搜索'}}
          </p>
          <a class="itemButton" :href="`/demo/filter/quick-search.html?lang=${lang}`" target="_blank">Demo</a>
        </el-card>
      </li>
      <li class="item">
        <el-card shadow="never">
          <a :href="`/demo/filter/quick-filter.html?lang=${lang}`" target="_blank">
            <el-image fit="scale-down" style="width: 100%; height: 120px;" src="/img/quick-filter.png"/>
          </a>
          <h3>quick-filter</h3>
          <p>
            {{ lang === 'en' ? 'Application Scenario' : '应用场景'}}<br>
            {{lang === 'en' ? 'Suitable for filtering in a column of the list' : '适用于在列表某一列筛选'}}
          </p>
          <a class="itemButton" :href="`/demo/filter/quick-filter.html?lang=${lang}`" target="_blank">Demo</a>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  &.demo_en {
    :deep(.el-card) {
      height: 320px !important;
    }
  }
  position: relative;
  padding: 0 24px;
  .container {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
    margin: 0 auto 40px;
    max-width: 1152px;
  }
  .item {
    padding: 8px;
    width: 100%;
    :deep(.el-card) {
      height: 300px;
      border: 1px solid #dcdfe6;
      border-radius: 5px;
      box-sizing: border-box;
      text-align: center;
      position: relative;
      transition: all .3s ease-in-out;
      bottom: 0;
      &:hover {
        bottom: 6px;
        box-shadow: 0 12px 32px 4px #edeff53d, 0 8px 20px #edeff57a;
      }
      h3 {
        text-align: center;
        font-size: 18px;
        font-weight: 400;
      }
      p {
        margin: 16px 0;
        font-size: 14px;
        color: #99a9bf;
        padding: 0 25px;
        line-height: 20px;
      }
      a.itemButton {
        height: 53px;
        line-height: 52px;
        font-size: 14px;
        color: var(--vp-c-text-1);
        text-align: center;
        border: 0;
        border-top: 1px solid #dcdfe6;
        padding: 0;
        cursor: pointer;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--bg-color);
        border-radius: 0 0 5px 5px;
        transition: all .3s;
        text-decoration: none;
        display: block;
        &:hover {
          color: #fff;
          background: var(--vp-button-brand-bg);
        }
      }
    }
  }
  @media (min-width: 640px) {
    .demo {
      padding: 0 48px;
    }
  }

  @media (min-width: 960px) {
    .demo {
      padding: 0 64px;
    }
  }
  @media (min-width: 640px) {
    .item {
      width: calc(100% / 2);
    }
  }

  @media (min-width: 768px) {
    .item {
      width: calc(100% / 2);
    }

    //.item.grid-3,
    //.item.grid-6 {
    //  width: calc(100% / 3);
    //}
  }

  @media (min-width: 960px) {
    .item {
      width: calc(100% / 4);
    }
  }
}
</style>

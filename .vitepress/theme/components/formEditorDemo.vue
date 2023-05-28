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
          <a :href="`/demo/editor.html?layoutType=1&isEdit=1&lang=${lang}`" target="_blank">
            <el-image style="width: 100%; height: 260px;" src="/img/demo0.png"/>
          </a>
          <h3>Editor</h3>
          <p>
            layoutType1<br>
            {{lang === 'en' ? 'Fields and layout not separated' : '字段与布局不分离'}}
          </p>
          <a class="itemButton" :href="`/demo/editor.html?layoutType=1&isEdit=1&lang=${lang}`" target="_blank">Demo</a>
        </el-card>
      </li>
      <li class="item">
        <el-card shadow="never">
          <a :href="`/demo/editor.html?layoutType=2&isEdit=1&lang=${lang}`" target="_blank">
            <el-image style="width: 100%; height: 260px;" src="/img/demo0.png"/>
          </a>
          <h3>Editor</h3>
          <p>
            layoutType2<br>
            {{lang === 'en' ? 'Fields and layout separated' : '字段与布局分离'}}
          </p>
          <a class="itemButton" :href="`/demo/editor.html?layoutType=2&isEdit=1&lang=${lang}`" target="_blank">Demo</a>
        </el-card>
      </li>
      <li class="item">
        <el-card shadow="never">
          <a :href="`/demo/preview.html?layoutType=1&lang=${lang}`" target="_blank">
            <el-image style="width: 100%; height: 260px;" src="/img/demo1.png"/>
          </a>
          <h3>Preview</h3>
          <p>
            layoutType1<br>
            {{lang === 'en' ? 'Fields and layout not separated' : '字段与布局不分离'}}
          </p>
          <a class="itemButton" :href="`/demo/preview.html?layoutType=1&lang=${lang}`" target="_blank">Demo</a>
        </el-card>
      </li>
      <li class="item">
        <el-card shadow="never">
          <a :href="`/demo/formEditorConfig.html?lang=${lang}`" target="_blank">
            <el-image fit="contain" style="width: 100%; height: 260px;" src="/img/configPanel.png"/>
          </a>
          <h3>Config panel</h3>
          <p>
            {{lang === 'en' ? 'Various properties for displaying and editing form fields are provided, including basic information, types, layouts, and so on.' : '用于展示和编辑表单字段的各种属性，包括基础信息、类型、布局等等。'}}
          </p>
          <a class="itemButton" :href="`/demo/formEditorConfig.html?lang=${lang}`" target="_blank">Demo</a>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  &.demo_en {
    :deep(.el-card) {
      height: 500px !important;
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
      height: 460px;
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

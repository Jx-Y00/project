<template>
  <div>
    <el-container>
      <el-header class="el-header" style="height: 300px">
        <img class="img1" src="../assets/logo.png" height="100px" />
        <!-- 水平的导航栏菜单，有六个分类 -->
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- 菜单颜色自行修改 -->
          <el-menu-item class="el-menu-item" index="1">1</el-menu-item>
          <el-menu-item class="el-menu-item" index="2">2</el-menu-item>
          <el-menu-item class="el-menu-item" index="3">3</el-menu-item>
          <el-menu-item class="el-menu-item" index="4">4</el-menu-item>
          <el-menu-item class="el-menu-item" index="5">5</el-menu-item>
          <el-menu-item class="el-menu-item" index="6">6</el-menu-item>
          <el-menu-item class="el-menu-item" index="7">7</el-menu-item>
          <el-menu-item class="el-menu-item" index="8">contact us</el-menu-item>
        </el-menu>
        <!-- 去官网看看怎么选择，，index的使用方法，还有其他种类的，自行更改吧 -->
      </el-header>

      <el-main class="el-main" style="height: 700px">
        <!-- 这里是搜索框和按钮，有一些用法，链接留给你了，可以自行删改，指路
        https://blog.csdn.net/qq_42268364/article/details/97375138?utm_term=elementui%E6%90%9C%E7%B4%A2%E6%A1%86&utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduweb~default-5-97375138&spm=3001.4430
         -->
        <div class="search">
          <el-autocomplete
            class="inline-input"
            :fetch-suggestions="querySearch"
            placeholder="请输入您要搜索的关键词"
            :trigger-on-focus="false"
            @select="handleSelect"
            @keyup.enter.native="search"
            style="height: 70px"
          ></el-autocomplete>
          <el-button type="primary" icon="el-icon-search" @click="search"
            >搜索</el-button
          >
        </div>
        <!-- introduction -->
        <!-- 使用的是卡片组件，卡片的格式，类型自己更改 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>introduction</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </el-main>

      <el-footer class="el-footer" style="height: 200px">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    //  搜索框
    return {
      diseaseList: [], //这个值是需要匹配的值
      disease: "", //这个值是用户正在输入的值
    };
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  /* line-height: 300px; */
  background: url(../assets/logo.png);
  background-image: url(../assets/logo.png);
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
  /* footer的高度不能在这设置，header同理 */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 600px; */
}
.el-menu-item {
  width: 12.5%;
  font-size: 20px;
}
.el-menu-demo {
  margin-top: 85px;
  margin-left: -20px;
  margin-right: -20px;
}
.inline-input {
  width: 50%;
}
.search {
  /* 搜索框和按钮的div */
  margin-top: 5%;
  height: 60px;
}
.box-card {
  margin-top: 100px;
}
.img1 {
  margin-top: 50px;
}
.clearfix {
  font-size: 20px;
}
</style>
<template>
  <div>
    <el-container>
      <el-header class="el-header" style="height: 200px">
        <img class="img1" src="../assets/logo.png" height="100px" />
        <!-- 水平的导航栏菜单，有六个分类 -->

        <!-- 去官网看看怎么选择，，index的使用方法，还有其他种类的，自行更改吧 -->
      </el-header>
      <el-main class="el-main" style="height: 700px">
        <div class="list">
          <div class="item" v-for="item in [1, 2, 3, 4]" :key="item.id">
            <div class="title">biaoti</div>
            <div class="writter">zuozhe</div>
            <div class="datacontent">neirong</div>
            <div class="from">laiyuan</div>
          </div>
        </div>
      </el-main>
      <el-footer class="el-footer" style="height: 200px"> footer </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "details",
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  /* line-height: 300px; */
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
.title {
  font-size: 20px;
  margin-bottom: 5px;
}
.writter {
  font-size: 15px;
  margin-bottom: 5px;
}
.datacontent {
  font-size: 15px;
  margin-bottom: 5px;
}
.from {
  font-size: 15px;
  margin-bottom: 5px;
}
.list {
  padding: 40px;
}
.item {
  margin-bottom: 20px;
}
</style>
<template>
  <div>
    <el-container>
      <el-header class="el-header" style="height: 200px">Header</el-header>
      <el-container>
        <el-aside width="600px" style="height: 1100px">Aside</el-aside>
        <el-main class="el-main" style="height: 1100px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>introduction</span>
            </div>
            <span>这里是网站的简介</span>
          </el-card>
          <div class="white"></div>
          <el-card>
            <div slot="header" class="clearfix">
              <span>主要文献</span>
            </div>
            <div v-for="o in 10" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </el-card>
        </el-main>
      </el-container>

      <el-footer class="el-footer" style="height: 200px">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {};
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

.clearfix {
  font-size: 20px;
}
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.white {
  padding: 40px;
}
</style>
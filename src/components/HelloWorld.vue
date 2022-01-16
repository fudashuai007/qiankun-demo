<template>
  <div class="hello">
    <el-container>
      <el-header height="100px">Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @select="handleSelect"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title"
                ><router-link to="/base1">导航一</router-link></span
              >
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title"
                ><router-link to="/childApp/home">导航二</router-link></span
              >
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title"
                ><router-link to="/childApp/about">导航三</router-link></span
              >
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title"
                ><router-link to="/childApp3/home">导航四</router-link></span
              >
            </el-menu-item>

            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title"
                ><router-link to="/childApp3/about">导航五</router-link></span
              >
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
          <div id="micro-div"></div>
          <div id="micro-div2"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


</style>

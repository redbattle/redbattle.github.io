<template>
  <el-container class="app-container">
    <el-aside class="relative" width="auto">
      <div
        class="text-gray-780 font-medium text-xl text-center app-container-logo"
      >
        管理平台
      </div>
      <el-menu
        class="app-container-menu"
        :class="{ 'app-container-menu-collapse': isCollapse }"
        :default-active="$route.meta.menuCode"
        :collapse="isCollapse"
      >
        <el-menu-item-group
          v-if="menuCode.includes($route.meta.menuCode)"
          @click.native="clickMenu('user.list')"
        >
          <el-menu-item index="user">用户权限</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group
          v-if="menuCode.includes($route.meta.menuCode)"
          @click.native="clickMenu('home.index')"
        >
          <el-menu-item index="home">数据面板</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>

    <div class="relative flex-1">
      <el-header class="flex items-center app-container-header">
        <i
          v-show="isCollapse"
          class="el-icon-s-unfold text-2xl mr-4 cursor-pointer"
          @click="handlerCollapse(false)"
        ></i>
        <i
          v-show="!isCollapse"
          class="el-icon-s-fold text-2xl mr-4 cursor-pointen"
          @click="handlerCollapse(true)"
        ></i>
        <el-breadcrumb class="mr-auto" separator="/">
          <transition-group name="breadcrumb">
            <el-breadcrumb-item
              v-for="(item, key) in $route.meta.breadcrumb"
              :key="key"
              :to="{ path: item.path, query: getQuery(item) }"
            >
              <span> {{ item.title }}</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item :key="$route.meta.breadcrumb.length">
              <span>{{ $route.meta.title }}</span>
            </el-breadcrumb-item>
          </transition-group>
        </el-breadcrumb>
        <div>
          <el-dropdown
            trigger="hover"
            :hide-on-click="false"
            @command="handleuser"
          >
            <el-button type="text">{{ userInfo.account }}</el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">
                <span class="inline-block text-center w-20">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main
        class="bg-gray-50 app-container-main"
        :class="{ 'app-container-main-collapse': isCollapse }"
      >
        <transition name="fade-transform" mode="out-in">
          <slot />
        </transition>
      </el-main>
    </div>
  </el-container>
</template>

<script>
/**
 * 面包屑需要配合路由实现，见route.js
 */

import { getCache, removeCache } from "cache.js";
import { logout } from "api.js";

export default {
  name: "Container",
  data() {
    return {
      menuCode: "",
      userInfo: {},
      isCollapse: false,
    };
  },
  created() {
    this.userInfo = getCache("m_userInfo");
    this.menuCode = this.userInfo.permissionStr || "";
  },
  methods: {
    clickMenu(name) {
      if (this.$route.name === name) return;
      this.$router.push({
        name,
      });
    },
    handleuser(e) {
      switch (e) {
        case "logout":
          this.getLogout();
          break;
      }
    },
    getLogout() {
      logout(); // 调退出接口
      removeCache("m_userInfo"); // 移除用户信息
      // 跳转登录页面
      this.$router.replace({
        path: "/login",
      });
    },
    handlerCollapse(collapse) {
      this.isCollapse = collapse;
    },
    getQuery(item) {
      const query = {};
      if (item?.query?.length) {
        item.query.forEach((item) => {
          query[item] = this.$route.query[item];
        });
      }
      return query;
    },
  },
};
</script>

<style lang="less" scoped>
@menu-h: 60px;
@menu-w: 240px;
.app-container {
  ::v-deep {
    .el-aside {
      overflow: hidden;
    }
  }
  &-logo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    height: @menu-h;
    background-color: #fff;
    line-height: @menu-h;
  }

  &-menu {
    width: @menu-w;
    height: calc(100vh - @menu-h);
    overflow-y: auto;
    margin-top: @menu-h;
  }
  &-menu-collapse {
    width: 0;
  }
  &-header {
    box-shadow: 0 3px 2px 0 #eefef3;
  }
  &-main {
    width: calc(100vw - @menu-w);
    height: calc(100vh - @menu-h - 1px);
    overflow: auto;
    margin-top: 1px;
  }

  &-main-collapse {
    width: calc(100vw - 2px);
  }
}
</style>

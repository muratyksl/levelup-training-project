<template>
  <a-layout style="min-height: 100vh">
    <a-layout-slider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model="selectedKeys">
        <router-link to="/profile">
          <a-menu-item key="1">
            <user-outlined />
            <span>Profile</span>
          </a-menu-item>
        </router-link>
        <router-link to="/program">
          <a-menu-item key="2">
            <video-camera-outlined />
            <span>Programım</span>
          </a-menu-item>
        </router-link>
        <router-link to="/profile">
          <a-menu-item key="3">
            <upload-outlined />
            <span>nav 3</span>
          </a-menu-item>
        </router-link>
      </a-menu>
    </a-layout-slider>
    <a-layout>
      <a-layout-header class="layout-header">
        <h1
          style="margin-left: 15px; font-weight: 500"
          class="layout-header-title"
        >
          Level-Up Online Fitness Platformu
        </h1>
        <a-button type="danger" shape="round" @click="logOutCustomer">
          <template #icon>
            <LogoutOutlined />
            Çıkış Yap
          </template>
        </a-button>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { getAllCustomers } from "../api/customer";
import { Layout, Menu, Button } from "ant-design-vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons-vue";
import { mapActions } from "vuex";
export default {
  name: "Layout",
  data() {
    return {
      collapsed: false,
      selectedKeys: ["1"],
    };
  },
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LogoutOutlined,
    aLayout: Layout,
    aLayoutSlider: Layout.Sider,
    aLayoutHeader: Layout.Header,
    aLayoutContent: Layout.Content,
    aMenu: Menu,
    aMenuItem: Menu.Item,
    aButton: Button,
  },
  methods: {
    ...mapActions({
      logOutCustomer: "logOutCustomer",
    }),
  },
};
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
.layout-header {
  background-color: #fff !important;
  padding: 0;
  margin: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.layout-header-title {
  margin-left: 15px;
  font-weight: 500;
}
</style>

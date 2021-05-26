<template>
  <a-layout style="min-height: 100vh">
    <a-layout-slider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-slider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div>HEllo header</div>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { getAllCustomers } from "../api/customer";
import { Layout, Menu } from "ant-design-vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
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
    aLayout: Layout,
    aLayoutSlider: Layout.Sider,
    aLayoutHeader: Layout.Header,
    aLayoutContent: Layout.Content,
    aMenu: Menu,
    aMenuItem: Menu.Item,
  },
  methods: {
    getAll() {
      getAllCustomers()
        .then((res) => {
          const customers = res.data;
          console.log("All Customers: ", { customers: customers });
        })
        .catch((err) => {
          console.log("get all customers unsuccesfull");
        });
    },
  },
  mounted() {
    this.getAll();
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
</style>

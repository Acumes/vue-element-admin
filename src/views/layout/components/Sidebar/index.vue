<template>
  <div>
    <div>
      <el-scrollbar wrapClass="scrollbar-wrapper scroll-height">
        <el-menu
          mode="vertical"
          :show-timeout="200"
          :default-active="$route.path"
          :collapse="isCollapse"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
        >
          <sidebar-item v-for="route in permission_routers" :key="route.name" :item="route"
                        :base-path="route.path"></sidebar-item>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SidebarItem from './SidebarItem'

  export default {
    components: {
      SidebarItem
    },
    computed: {
      ...mapGetters([
        'permission_routers',
        'sidebar'
      ]),
      isCollapse() {
        return !this.sidebar.opened
      }
    }
  }
</script>
<style >
  .scroll-height{
    height: 1000px;
    overflow: scroll;
  }
  @media only screen and (max-width: 910px) {
    .scroll-height{
      max-height: 1000px;
      position: relative;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
</style>

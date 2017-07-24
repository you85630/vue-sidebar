<template>
  <div class="sidebar">
    <Menu theme="dark" :active-name="active" :open-names="open">
      <Submenu v-for="submenu in Menu" :key="submenu.index" :name="submenu.name">
        <template slot="title">
          <Icon :type="submenu.type"></Icon>
          {{submenu.title}}
        </template>
        <Menu-item v-for="item in submenu.item" :key="item.index" :name="item.sub">
          <router-link :to="item.to">
            {{item.titles}}
          </router-link>
        </Menu-item>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      Menu: [
        {
          name: '1',
          type: 'ios-paper',
          title: '内容管理',
          item: [
            {
              sub: '1-1',
              titles: '文章管理',
              to: '/page1'
            }, {
              sub: '1-2',
              titles: '评论管理',
              to: '/page2'
            }, {
              sub: '1-3',
              titles: '举报管理',
              to: '/page3'
            }
          ]
        }, {
          name: '2',
          type: 'ios-people',
          title: '用户管理',
          item: [
            {
              sub: '2-1',
              titles: '新增用户',
              to: '/page1'
            }, {
              sub: '2-2',
              titles: '活跃用户',
              to: '/page2'
            }
          ]
        }, {
          name: '3',
          type: 'stats-bars',
          title: '统计分析',
          item: [
            {
              sub: '3-1',
              titles: '新增和启动',
              to: '/page1'
            }, {
              sub: '3-2',
              titles: '活跃分析',
              to: '/page2'
            }, {
              sub: '3-3',
              titles: '时段分析',
              to: '/page3'
            }
          ]
        }
      ],
      active: '',
      open: ''
    }
  },
  created () {
    this.active = this.$route.name
    this.open = ['1']
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  float: left;
  width: 240px;
  .ivu-menu {
    a {
      color: #fff;
      display: block;
      padding: 14px 24px 14px 44px;
      margin: -14px -24px -14px -44px;
    }
  .router-link-exact-active,
  .router-link-active{
    background-color: #2d8cf0;
  }
  }
}
</style>

<template>
  <div class="home">
    <Menu theme="dark" active-name="1-2" :open-names="['1']">
      <Submenu v-for="submenu in Menu" :key="submenu.index"  :name="submenu.name" >
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
              to: ''
            }, {
              sub: '1-2',
              titles: '评论管理',
              to: ''
            }, {
              sub: '1-3',
              titles: '举报管理',
              to: ''
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
              to: ''
            }, {
              sub: '2-2',
              titles: '活跃用户',
              to: ''
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
              to: ''
            }, {
              sub: '3-2',
              titles: '活跃分析',
              to: ''
            }, {
              sub: '3-3',
              titles: '时段分析',
              to: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.ivu-menu{
  a{
    color: #fff;
  }
}
</style>

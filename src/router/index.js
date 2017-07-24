import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = resolve => require(['views/index'], resolve)

const page1 = resolve => require(['components/pages/page1'], resolve)
const page2 = resolve => require(['components/pages/page2'], resolve)
const page3 = resolve => require(['components/pages/page3'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/page1',
          name: 'page1',
          component: page1
        }, {
          path: '/page2',
          name: 'page2',
          component: page2
        }, {
          path: '/page3',
          name: 'page3',
          component: page3
        }
      ]
    }
  ]
})

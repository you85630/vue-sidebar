import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = resolve => require(['views/index'], resolve)

const page1 = resolve => require(['components/pages/page1'], resolve)
const page2 = resolve => require(['components/pages/page2'], resolve)
const page3 = resolve => require(['components/pages/page3'], resolve)
const page4 = resolve => require(['components/pages/page4'], resolve)
const page5 = resolve => require(['components/pages/page5'], resolve)
const page6 = resolve => require(['components/pages/page6'], resolve)
const page7 = resolve => require(['components/pages/page7'], resolve)
const page8 = resolve => require(['components/pages/page8'], resolve)

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
        }, {
          path: '/page4',
          name: 'page4',
          component: page4
        }, {
          path: '/page5',
          name: 'page5',
          component: page5
        }, {
          path: '/page6',
          name: 'page6',
          component: page6
        }, {
          path: '/page7',
          name: 'page7',
          component: page7
        }, {
          path: '/page8',
          name: 'page8',
          component: page8
        }
      ]
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'

//前台
// import CommonLayout from '@/components/commonLayout'
// import Home from '@/pages/home'
// import Archives from '@/pages/archives'
// import Categories from '@/pages/categories'
// import Collections from '@/pages/collections'
// import Demo from '@/pages/demo'
// import About from '@/pages/about'
// import Detail from '@/pages/detail'
const CommonLayout = r => require.ensure([], () => r(require('@/components/commonLayout')), 'chunkname1')
const Home = r => require.ensure([], () => r(require('@/pages/home')), 'chunkname1')
const Archives = r => require.ensure([], () => r(require('@/pages/archives')), 'chunkname1')
const Categories = r => require.ensure([], () => r(require('@/pages/categories')), 'chunkname1')
const Collections = r => require.ensure([], () => r(require('@/pages/collections')), 'chunkname1')
const Demo = r => require.ensure([], () => r(require('@/pages/demo')), 'chunkname1')
const About = r => require.ensure([], () => r(require('@/pages/about')), 'chunkname1')
const Detail = r => require.ensure([], () => r(require('@/pages/detail')), 'chunkname2')
const Signin = r => require.ensure([], () => r(require('@/pages/signin')), 'chunkname1')


//admin后台
// import Signin from '@/pages/admin/signin'
// import ArticleList from '@/pages/admin/articleList'
// import ArticleEdit from '@/pages/admin/articleEdit'
// import DemoEdit from '@/pages/admin/demoEdit'
const ArticleList = r => require.ensure([], () => r(require('@/pages/admin/articleList')), 'chunkname3')
const ArticleEdit = r => require.ensure([], () => r(require('@/pages/admin/articleEdit')), 'chunkname3')
const DemoEdit = r => require.ensure([], () => r(require('@/pages/admin/demoEdit')), 'chunkname3')
//visiter后台
const VisiterIndex = r => require.ensure([], () => r(require('@/pages/visiter/index')), 'chunkname3')

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: CommonLayout,
    // name:'layout',
    children: [
      {
        path: '',
        component: Home,
        name: 'home',
        meta: {
          isShowMusic: true
        }
      },
      {
        path: '/archives',
        component: Archives,
        name: 'archives',
        meta: {
          isShowMusic: true
        }
      },
      {
        path: '/detail/:id',
        component: Detail,
        meta: {
          isShowMusic: true
        }
      },
      {
        path: '/categories',
        component: Categories,
        name: 'categories',
        meta: {
          isShowMusic: true
        }
      },
      {
        path: '/collections',
        component: Collections,
        name: 'collections',
        meta: {
          isShowMusic: true
        }
      },
      {
        path: '/demo',
        component: Demo,
        name: 'demo',
        meta: {
          isShowMusic: true
        }
      },
      {
        path: '/about',
        component: About,
        name: 'about',
        meta: {
          isShowMusic: true
        }
      },
      {
        path: '/visiter',
        component: VisiterIndex,
        name: 'visiter',
        meta: {
          isShowMusic: true
        }
      },
    ]
  },
  {
    path: '/sign',
    component: Signin,
    name: 'Signin',
    alias: '/admin',
    meta: {
      isShowMusic: false
    }
  },
  {
    path: '/admin/list',
    name: 'ArticleList',
    component: ArticleList,
    meta: {
      isShowMusic: true
    }
  },
  {
    path: '/admin/edit',
    name: 'ArticleEdit',
    component: ArticleEdit,
    meta: {
      isShowMusic: true
    }
  },
  {
    path: '/admin/edit/:id',
    name: 'ArticleUpdate',
    component: ArticleEdit,
    meta: {
      isShowMusic: true
    }
  },
  {
    path: '/admin/editt',
    name: 'DemoEdit',
    component: DemoEdit,
    meta: {
      isShowMusic: true
    }
  },
  {
    path: '/admin/editt/:id',
    name: 'DemoUpdate',
    component: DemoEdit,
    meta: {
      isShowMusic: true
    }
  }
]
export default new VueRouter({
  // mode: 'history',
  routes
})

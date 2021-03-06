// import Home from './pages/Home'
// import Login from './pages/Login'
// import User from './pages/User'
    import Index from './pages/User/Home'
        import GoodsList from './pages/User/Goods/GoodsList'
        import GoodsClassify from './pages/User/Goods/GoodsClassify'
        import UserManage from './pages/User/Permission/UserManage'
        import RoleManage from './pages/User/Permission/RoleManage'
        import MenuManage from './pages/User/Permission/MenuManage'
        import OrderList from './pages/User/OrderManage/OrderList'
        import ReturnGoods from './pages/User/OrderManage/ReturnGoods'
            import ProductionList from './pages/User/OrderManage/ProductManage/ProductionList'
            import ReviewManage from './pages/User/OrderManage/ProductManage/ReviewManage'
// import NotFound from './pages/NotFound'

// import SecondLevelComponent from './common/SecondLevelComponent'
// import ThirdLevelComponent from './common/ThirdLevelComponent'

import AsyncComponent from './utils/asyncComponent'
const Home = AsyncComponent(()=>import('./pages/Home'))
const Login = AsyncComponent(()=>import('./pages/Login'))
const User = AsyncComponent(()=>import('./pages/User'))
    // const Index = AsyncComponent(()=>import('./pages/User/Home'))
    //     const GoodsList = AsyncComponent(()=>import('./pages/User/Goods/GoodsList'))
    //     const GoodsClassify = AsyncComponent(()=>import('./pages/User/Goods/GoodsClassify'))
    //     const UserManage = AsyncComponent(()=>import('./pages/User/Permission/UserManage'))
    //     const RoleManage = AsyncComponent(()=>import('./pages/User/Permission/RoleManage'))
    //     const MenuManage = AsyncComponent(()=>import('./pages/User/Permission/MenuManage'))
    //     const OrderList = AsyncComponent(()=>import('./pages/User/OrderManage/OrderList'))
    //     const ReturnGoods = AsyncComponent(()=>import('./pages/User/OrderManage/ReturnGoods'))
    //         const ProductionList = AsyncComponent(()=>import('./pages/User/OrderManage/ProductManage/ProductionList'))
    //         const ReviewManage = AsyncComponent(()=>import('./pages/User/OrderManage/ProductManage/ReviewManage'))
const NotFound = AsyncComponent(()=>import('./pages/NotFound'))

const SecondLevelComponent = AsyncComponent(()=>import('./common/SecondLevelComponent'))
const ThirdLevelComponent = AsyncComponent(()=>import('./common/ThirdLevelComponent'))

const routes = [
    { path: '/',
        exact: true,
        component: Home,
        requiresAuth: false
    },
    {
        path: '/login',
        component: Login,
        requiresAuth: false,

    },
    {
        path: '/user',
        component: User,
        requiresAuth: true, //????????????????????????????????????

        children:[
            {
                path: '/user/index',
                pathName:'index',
                component:Index,
                name: '??????',
                icon:'pie-chart'
            },
            {
                path: '/user/order',
                component: SecondLevelComponent,
                pathName: 'order-manage',
                name: '????????????',
                icon: 'eye',
                children: [
                    {
                        path: '/user/order/list',
                        pathName: 'order-list',
                        component: OrderList,
                        name: '????????????',
                        icon: 'table'
                    },
                    {
                        path: '/user/order/product',
                        pathName: 'product-manage',
                        component: ThirdLevelComponent,
                        name: '????????????',
                        icon: 'user',
                        children: [
                            {
                                path: '/user/order/product/list',
                                pathName: 'product-list',
                                component: ProductionList,
                                name: '????????????',
                                icon: 'table'
                            },
                            {
                                path: '/user/order/product/review',
                                pathName: 'review-manage',
                                component: ReviewManage,
                                name: '????????????',
                                icon: 'eye'
                            }
                        ]
                    },
                    {
                        path: '/user/order/returnGoods',
                        pathName: 'return-goods',
                        component: ReturnGoods,
                        name: '????????????',
                        icon: 'eye'
                    }
                ]
            },
            {
                path: '/user/goods',
                component: SecondLevelComponent,
                pathName: 'goods',
                name: '????????????',
                icon: 'user',
                children: [
                    {
                        path: '/user/goods/list',
                        pathName: 'goods-list',
                        component: GoodsList,
                        name: '????????????',
                        icon: 'table'
                    },
                    {
                        path: '/user/goods/classify',
                        pathName: 'goods-classify',
                        component: GoodsClassify,
                        name: '????????????',
                        icon: 'eye'
                    }
                ]
            },
            {
                path: '/user/permission',
                component: SecondLevelComponent,
                pathName: 'permission',
                name: '????????????',
                icon: 'table',
                children: [
                    {
                        path: '/user/permission/user',
                        pathName: 'user-manage',
                        component: UserManage,
                        name: '????????????',
                        icon: 'table'
                    },
                    {
                        path: '/user/permission/role',
                        pathName: 'role-manage',
                        component: RoleManage,
                        name: '????????????',
                        icon: 'eye'
                    },
                    {
                        path: '/user/permission/menu',
                        pathName: 'menu-manage',
                        component: MenuManage,
                        name: '????????????',
                        icon: 'eye'
                    }
                ]
            }
        ]

    },
    {
        path: '*',
        component: NotFound,
        requiresAuth: false,
    }
]

export default routes
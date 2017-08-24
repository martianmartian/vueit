
const router = new VueRouter({
  routes:[
        {path: '/',redirect: '/all'},
        {path: '/all', component: All, props:{'a':'b'} },
        {path: '/single/:id', component: Single },
        {path:'*',redirect:'/all'}
        ]
})


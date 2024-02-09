
const routes = [
  //Index page route when first coming on the site
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },

    ]
  },
  // Chat route when logged in
  {
    path: '/chat',
    component: () => import('layouts/ChatLayout.vue'),
    children: [
      { path: '', component: () => import('pages/chat.vue') },
      // { path: '/portfolio', component: () =>
      //  import('pages/portfolio.vue') }
    ]
  },

  // Always
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

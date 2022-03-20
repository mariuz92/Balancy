import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0df46e8a = () => interopDefault(import('..\\pages\\alternative.vue' /* webpackChunkName: "pages/alternative" */))
const _a73f34c0 = () => interopDefault(import('..\\pages\\calendar.vue' /* webpackChunkName: "pages/calendar" */))
const _3d8755b7 = () => interopDefault(import('..\\pages\\charts.vue' /* webpackChunkName: "pages/charts" */))
const _439c85a2 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _1d6b33e6 = () => interopDefault(import('..\\pages\\lock.vue' /* webpackChunkName: "pages/lock" */))
const _0b96c2f7 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _63331158 = () => interopDefault(import('..\\pages\\pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _5b9b5e85 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _7de4b49c = () => interopDefault(import('..\\pages\\tasks.vue' /* webpackChunkName: "pages/tasks" */))
const _3b8e29bd = () => interopDefault(import('..\\pages\\widgets.vue' /* webpackChunkName: "pages/widgets" */))
const _44f775b9 = () => interopDefault(import('..\\pages\\components\\buttons.vue' /* webpackChunkName: "pages/components/buttons" */))
const _771136ca = () => interopDefault(import('..\\pages\\components\\cards.vue' /* webpackChunkName: "pages/components/cards" */))
const _248a4a4e = () => interopDefault(import('..\\pages\\components\\grid-system.vue' /* webpackChunkName: "pages/components/grid-system" */))
const _ff9bc65c = () => interopDefault(import('..\\pages\\components\\icons.vue' /* webpackChunkName: "pages/components/icons" */))
const _4c7aa7a0 = () => interopDefault(import('..\\pages\\components\\notifications.vue' /* webpackChunkName: "pages/components/notifications" */))
const _3a1c5827 = () => interopDefault(import('..\\pages\\components\\typography.vue' /* webpackChunkName: "pages/components/typography" */))
const _5cca70d3 = () => interopDefault(import('..\\pages\\forms\\components.vue' /* webpackChunkName: "pages/forms/components" */))
const _33f7c918 = () => interopDefault(import('..\\pages\\forms\\elements.vue' /* webpackChunkName: "pages/forms/elements" */))
const _0d346694 = () => interopDefault(import('..\\pages\\forms\\validation.vue' /* webpackChunkName: "pages/forms/validation" */))
const _797ae5b2 = () => interopDefault(import('..\\pages\\maps\\google.vue' /* webpackChunkName: "pages/maps/google" */))
const _53d65888 = () => interopDefault(import('..\\pages\\maps\\vector.vue' /* webpackChunkName: "pages/maps/vector" */))
const _235f7493 = () => interopDefault(import('..\\pages\\pages\\timeline.vue' /* webpackChunkName: "pages/pages/timeline" */))
const _4aaae41d = () => interopDefault(import('..\\pages\\pages\\user.vue' /* webpackChunkName: "pages/pages/user" */))
const _de913a54 = () => interopDefault(import('..\\pages\\tables\\paginated.vue' /* webpackChunkName: "pages/tables/paginated" */))
const _e730cf36 = () => interopDefault(import('..\\pages\\tables\\regular.vue' /* webpackChunkName: "pages/tables/regular" */))
const _7af2147f = () => interopDefault(import('..\\pages\\tables\\sortable.vue' /* webpackChunkName: "pages/tables/sortable" */))
const _41ef1fe0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/alternative",
    component: _0df46e8a,
    name: "alternative"
  }, {
    path: "/calendar",
    component: _a73f34c0,
    name: "calendar"
  }, {
    path: "/charts",
    component: _3d8755b7,
    name: "charts"
  }, {
    path: "/dashboard",
    component: _439c85a2,
    name: "dashboard"
  }, {
    path: "/lock",
    component: _1d6b33e6,
    name: "lock"
  }, {
    path: "/login",
    component: _0b96c2f7,
    name: "login"
  }, {
    path: "/pricing",
    component: _63331158,
    name: "pricing"
  }, {
    path: "/register",
    component: _5b9b5e85,
    name: "register"
  }, {
    path: "/tasks",
    component: _7de4b49c,
    name: "tasks"
  }, {
    path: "/widgets",
    component: _3b8e29bd,
    name: "widgets"
  }, {
    path: "/components/buttons",
    component: _44f775b9,
    name: "components-buttons"
  }, {
    path: "/components/cards",
    component: _771136ca,
    name: "components-cards"
  }, {
    path: "/components/grid-system",
    component: _248a4a4e,
    name: "components-grid-system"
  }, {
    path: "/components/icons",
    component: _ff9bc65c,
    name: "components-icons"
  }, {
    path: "/components/notifications",
    component: _4c7aa7a0,
    name: "components-notifications"
  }, {
    path: "/components/typography",
    component: _3a1c5827,
    name: "components-typography"
  }, {
    path: "/forms/components",
    component: _5cca70d3,
    name: "forms-components"
  }, {
    path: "/forms/elements",
    component: _33f7c918,
    name: "forms-elements"
  }, {
    path: "/forms/validation",
    component: _0d346694,
    name: "forms-validation"
  }, {
    path: "/maps/google",
    component: _797ae5b2,
    name: "maps-google"
  }, {
    path: "/maps/vector",
    component: _53d65888,
    name: "maps-vector"
  }, {
    path: "/pages/timeline",
    component: _235f7493,
    name: "pages-timeline"
  }, {
    path: "/pages/user",
    component: _4aaae41d,
    name: "pages-user"
  }, {
    path: "/tables/paginated",
    component: _de913a54,
    name: "tables-paginated"
  }, {
    path: "/tables/regular",
    component: _e730cf36,
    name: "tables-regular"
  }, {
    path: "/tables/sortable",
    component: _7af2147f,
    name: "tables-sortable"
  }, {
    path: "/",
    component: _41ef1fe0,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

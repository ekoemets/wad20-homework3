import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/IndexPage'
import BrowsePage from '../pages/BrowsePage'
import LoginPage from '../pages/LoginPage'

Vue.use(Router)

export function createRouter() {
    return new Router({

        routes: [
            {path: '/', component: IndexPage},
            {path: '/login', component: LoginPage},
            {path: '/browse', component: BrowsePage}
        ]
    })
}
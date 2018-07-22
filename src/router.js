import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import MessageBody from './components/MessageBody.vue'
import MessageSummary from './components/MessageSummary.vue'

Vue.use(Router);

export default new Router({
    routes: [{
        path: '*',
        redirect: {
            path: '/'
        }
    }, {
        path: '/',
        name: 'MessageSummary',
        component: MessageSummary,
        props: true
    }, {
        path: '/message:uid',
        name: 'MessageBody',
        component: MessageBody,
        props: true
    }]
})
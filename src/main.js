import Vue from 'vue'
import App from './App.vue'
import MessageBody from './components/MessageBody.vue'
import axios from 'axios'
import router from './router'
import store from './store'

new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	mounted() {
		this.$store.dispatch('getData');
	},
	components: {
		App,
		MessageBody
	}
});
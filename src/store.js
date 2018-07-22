import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messages: [],
        currentSender: {}
    },
    mutations: {
        setData(state, messages) {
            state.messages = messages.map(function(messageObj, inx) {
                messageObj.showed = false;
                return messageObj;
            });;
        },

        deleteMessage(state, indexElement) {
            state.messages.splice(indexElement, 1);
        },

        setSender(state, sender) {
            state.currentSender = sender;
        }
    },
    actions: {
        getData(context) {
            var _self = this;
            axios
                .get(__dirname + 'src/data/messages_sample.json')
                .then((response) => {
                    _self.commit('setData', response.data.messages);
                }, (error) => {
                    console.log(error);
                })
        }
    }
});
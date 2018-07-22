<template>
    <div id="app">
        <header>
            <router-link to="/" tag="span">mailboxApp</router-link>
        </header>
        <main>
            <div class="wrapper">
                <div class="left-block">
                    <messages-list v-for="(message, index) in data" :message="message" :index="index" :key="message.uid" :senderUid="currentMessageUid"></messages-list>
                </div>
                <div class="right-block">
                    <router-view v-if="data.length"></router-view>
                    <message-summary v-else></message-summary>
                </div>
            </div>
        </main>
    </div>
</template>
<script>

import MessagesList from './components/MessagesList.vue'
import MessageBody from './components/MessageBody.vue'
import MessageSummary from './components/MessageSummary.vue'

export default {
    name: 'app',
    computed: {
        data() {
            return this.$store.state.messages;
        },

        currentMessageUid() {
            return this.$store.state.currentSender.uid;
        }
    },
    components: {
        'messages-list': MessagesList,
        'message-body': MessageBody,
        'message-summary': MessageSummary
    }
}

</script>
<style>

body {
  margin: 0;
  background-color:  #F9F9F9;
}

.left-block,
.right-block {
    
}

.left-block {
    flex: 30%;
}

.right-block {
    margin-right: 10px;
    flex: 70%;
}

.wrapper {
    display: flex;
    background-color: #fff;
    margin: 0 auto;
    width: 90%;
}

#app {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

main {
    margin-top: 5%;
}

header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
}

header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
}
 
</style>

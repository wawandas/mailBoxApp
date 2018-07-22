<template>
    <div class="message-text">{{currentSender.sender}} - wrote:<hr>{{currentMessage}}</div>
</template>
<script>

export default {
    name: 'message-body',
    props: ['uid'],
    computed: {

        messageId() {
            return this.uid.replace(':', '');
        },

        currentMessage() {
            var messages = this.$store.state.messages;
            var mailObject = messages.find(message => message.uid === this.messageId);

            this.$store.commit('setSender', mailObject);

            if (mailObject && mailObject.message) {
                mailObject.showed = true;
                return mailObject.message;
            }

            return '';
        },

        currentSender() {
            return this.$store.state.currentSender;
        }
    },
    methods: {

    }
}

</script>
<style>
    .message-text {
        padding: 30px;
    }
</style>
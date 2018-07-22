<template>
    <div class="message" :class="{'new-message': isNewMessage}">
        <div @click="showMessage">
                <p class="sender-message">from: {{ message.sender }}</p>
                <p class="sub-message">[subject: {{ message.subject }} ]</p>
                <p class="date-message">{{ convertTime(message.time_sent) }}</p>
        </div>
        <button class="remove-message" @click.stop="removeMessage">X</button>
    </div>
</template>
<script>

export default {
    name: 'messages-list',

    props: {
        message: Object,
        index: [Number, String]
    },
    methods: {
        convertTime(timestamp) {
            var a = new Date(timestamp * 1000);
            var months = ['January', 'February', 'Marh', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var weekday = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
            var year = a.getFullYear();
            var day = weekday[a.getDay()];
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = day + ' ' + date + ' ' + month + ', ' + hour + ':' + min;

            return time;
        },

        removeMessage() {
            this.$store.commit('deleteMessage', this.index);
            this.$router.push('/');
        },

        showMessage: function() {
            this.message.showed = true;
            this.$store.commit('setSender', this.message);
            this.$router.push('/message:' + this.message.uid); 
        }
    },

    computed: {
        messages: function() {
            return this.$store.state.messages;
        },

        isNewMessage: function() {
            return !this.message.showed;
        }
    }
}

</script>
<style>

.message {
    display: inline-block;
    position: relative;
    width: 100%;
    color: #44484B; 
    text-indent: 10px;
    padding: 10px 0;
}

.message p {
    padding: 0;
}

.message:hover {
    cursor: pointer;
}

.message:first-child {
    
}

.message .remove-message {
    border-color: #44484B;
    color: #44484B; 
} 

.new-message {
    color: #fff;
}

.new-message .remove-message {
    color: #fff;
    border-color: #fff;
}

.date-message {
    position: absolute;
    bottom: 5px;
    margin-bottom: 5px;
    font-size: 12px;
    right: 5px;
}

.new-message {
    background-color: #009DDC;
}

.sender-message {
    font-weight: bold;
}

.remove-message {
    position: absolute;
    top: 6px;
    right: 10px;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 2em;
    color: #f00;
    font-family: arial;
    display: inline-block;
    font-size: 11px;
    height: 20px;
    line-height: 2px;
    margin: 0 0 8px;
    padding: 0;
    text-align: center;
    width: 20px;
}

.remove-message:hover {
    background-color: red;
    color: #fff;
    border-color: #fff;
    cursor: pointer;
}

</style>
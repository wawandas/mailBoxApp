<template>
    <div class="message" :class="{'new-message': isNewMessage, 'active': message.uid === senderUid}">
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
        'senderUid': String,
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
    box-sizing: border-box;
    color: #44484B;
    border-bottom: 1px solid #E5E5E5;
    text-indent: 30px;
    padding: 10px 0;
}

.message p {
    padding: 0;
    font-size: 14px;
}

.message:hover {
    cursor: pointer;
}

.message:last-child {
    border-width: 0;
}

.message .remove-message {
    border-color: #44484B;
    color: #44484B; 
} 

.new-message {
    color: #44484B;
}

.new-message .remove-message {
    color: #44484B;
    border-color: #44484B;
}

.message p.date-message {
    position: absolute;
    bottom: 5px;
    margin-bottom: 5px;
    font-size: 12px;
    right: 5px;
}

.new-message {
    /*background-color: #009DDC;*/
}

.new-message:before {
    display: inline-block;
    background-color: #009DDC;
    position: absolute;
    content: '';
    top: 13px;
    border-radius: 2em;
    left: 8px;
    width: 12px;
    height: 12px;
} 

.active {
    background-color: #CEE5F2;
    border-width: 0;
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
    border-color: red;
    color: #fff;
    cursor: pointer;
}

</style>
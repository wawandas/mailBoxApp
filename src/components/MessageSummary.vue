<template>
    <div class="summary">
    	{{ammountMessages ? 'you have ' + ammountMessages +  ' messages in your mailbox' : 'your mailbox is empty'}}
    </div>
</template>
<script>

export default {
    name: 'message-summary',
    computed: {
        ammountMessages: function() {
           return this.$store.state.messages.length;
        }
    }
}

</script>
<style>
    .summary {
        padding: 30px;
        text-align: center;
        font-weight: bold;
    }
</style>
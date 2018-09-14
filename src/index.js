const TelegramBot = require('telegraf');
const config = require('./config.js');
const helper = require('./helpers.js');
const mongoose = require('mongoose');


helper.startBot();
mongoose.Promise = global.Promise;
 mongoose.connect(config.databaseURL,{useNewUrlParser: true})
 .then(helper.startMD())
 .catch(e => console.log(e));

 require('./person.model');
const Member = mongoose.model('members');
const bot = new TelegramBot(config.TOKEN);
bot.on('new_chat_members', (ctx) => {
    const member = new Member({
        name: `${ctx.message.new_chat_member.first_name} ${ctx.message.new_chat_member.last_name}`
    });
    member.save()
        .then(memb => console.log(memb))
        .catch(e => console.log(e));

});
bot.startPolling();
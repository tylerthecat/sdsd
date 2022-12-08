
const { Telegraf, Telegram } = require('telegraf')
const fs = require('fs');
const bot = new Telegraf('5944849269:AAH0Vvhh3_PvX4bZlmnohswmgwjhMKSP3j4')
bot.start((ctx) => ctx.reply(`Welcome, ${ctx.message.from.id}`))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))



exports.lol = function(ll){
   bot.telegram.sendMessage(ll,'dsdsdsds')
}


//bot.telegram.setWebhook('https://www.techopy.ru:8443/bot')
//bot.startWebhook(`/bot`,null,+8443);
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

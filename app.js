
const { Telegraf, Telegram } = require('telegraf')
const fs = require('fs');
const bot = new Telegraf('5869311257:AAHOcUtrOcLT5vDn80BU8_TmkDOunnUUYQ4')
bot.start((ctx) => ctx.reply(`Welcome, ${ctx.message.from.id}`))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))



exports.lol = function(ll){
   bot.telegram.sendMessage(ll,'dsdsdsds')
}



//dsds
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

const { Client, Intents } = require('discord.js')

const launchSong = require('./function/launchSong.js')

require('dotenv').config()
const token = process.env.TOKEN
const command = process.env.COMMAND

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

bot.login(token).then(() => console.log('bot in use\n'))

bot.on("messageCreate", (message) => {
    if(message.content.toLowerCase().startsWith(command)){
        const userChannel = message.member.voice.channel
        if (userChannel) launchSong(userChannel)
        else message.channel.send("Please, join a channel !")
    }
})



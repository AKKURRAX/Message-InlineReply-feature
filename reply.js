const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
    client.api.channels[message.channel.id].messages.post({
        data: {
        content: "Salut !",
        message_reference: {
        message_id: message.id,
        channel_id: message.channel.id,
        guild_id: message.guild.id
        }
        }
        })
}

module.exports.help = {
    name: "test",
    aliases: ["reply"]
}
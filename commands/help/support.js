const { Client, MessageEmbed } = require('discord.js');

exports.run = async (Client, Message, Args) => {
Message.reply("Hey dude, I heard you needed Help? \n Head over to the support server and the support team can help you. If there is a bug, report it to our github page")
}

exports.config = {
name: "support",
aliases: [""],
}
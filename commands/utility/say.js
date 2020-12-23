const Discord = require('discord.js');
exports.run = (bot, message, args) => {
  console.log(message.author + " used command `say`")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return(message.reply('You can not use this command (Required permission **MANAGE_MESSAGES**)'))
    else
    message.delete();
    message.channel.send(args.join(' ').replace("@everyone", "()").replace("@here", "()")).catch(console.error);
}


exports.config = {
  name: "say",
  aliases: [""]
}
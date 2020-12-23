const { Client, MessageEmbed } = require("discord.js");

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " used command `info`")
  const embed = new MessageEmbed()
    .setTitle("Hello, I'm Bulica!")
    .setDescription(
      "Hello, I'm Bulica! My prefix is `+`. \n You can invite me to your server with the `+invite` command!"
    )
    .setColor(0x4f3d91);

  Message.channel.send(embed);
};

exports.config = {
  name: "info",
  aliases: [""]
};

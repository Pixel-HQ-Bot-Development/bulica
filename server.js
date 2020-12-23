const Discord = require("discord.js");
const Client = new Discord.Client();
var token = ('not getting that either')




Client.on("ready", () => {
  console.log("I'm online!\n");
  console.log("Logged in as Bulica#3944");
  console.log("Node version: " + process.version + "\nDiscord.js version: " + Discord.version)
  console.log("Loading each")



  Client.aliases = new Discord.Collection();
  Client.commands = new Discord.Collection();
  require(`C:/Users/Dan/Desktop/bulica app/commandhandler.js`)(Client);
  console.log("Boot completed successfully")
  });



Client.on("message", Message => {
  if (Message.channel.type === "dm") return;
  let Prefix = "+";
  let Args = Message.content
    .slice(Prefix.length)
    .trim()
    .split(/ +/g);
  let Command = Args.shift().toLowerCase();

  if (Message.content.startsWith(Prefix)) {
    let CommandFile =
      Client.commands.get(Command) ||
      Client.commands.get(Client.aliases.get(Command));

    if (CommandFile) {
      CommandFile.run(Client, Message, Args);
    }
  } else {
  }
});


Client.login(token);
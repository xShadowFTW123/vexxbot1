const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const Enmap = require("enmap");
const ytdl = require('ytdl-core');
const ms = require("ms");
const YouTube = require('simple-youtube-api');
const GOOGLE_API_KEY = "AIzaSyDUmo-BtB5oQr5Y3RSgYYBMj9rFKMr-W2s";
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();
var servers = {};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
  client.user.setActivity("COMPLETE 0%", {type: "WATCHING"});
});


//PING
client.on("message",  msg => {
  if (msg.content === '$ping') {
	  message.delete();
    msg.channel.send('Your ping is' + client.ping + 'ms');
  }
});

//KICK
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('$kick')) {
	  message.delete();
   if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage(":heavy_multiplication_x: **You do not have permission!**");
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.channel.send(`:heavy_multiplication_x: *${user.tag}* **has been kicked!** \n\ Reason: **No reason**`);
        }).catch(err => {
          message.channel.send(':heavy_multiplication_x: **I was unable to kick the member**');
          console.error(err);
        });
      } else {
        message.channel.send(':heavy_multiplication_x: **That user isn\'t in this guild!**');
      }
    } else {
      message.channel.send(':heavy_multiplication_x: **You didn\'t mention the user to kick!**');
    }
  }
});

//BAN
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('$ban')) {
	  message.delete();
   if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage(":heavy_multiplication_x: **You do not have permission!**");
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.channel.send(`:heavy_multiplication_x: *${user.tag}* **has been banned!** \n\ Reason: **No reason**`);
        }).catch(err => {
          message.channel.send(':heavy_multiplication_x: **I was unable to ban the member**');
          console.error(err);
        });
      } else {
        message.channel.send(':heavy_multiplication_x: **That user isn\'t in this guild!**');
      }
    } else {
          message.channel.send(':heavy_multiplication_x: **You didn\'t mention the user to ban!**');
    }
  }
});

//AVATAR
client.on('message', message => {
    if (message.content === '$avatar') {
		message.delete();
      let embed = new Discord.RichEmbed()
    .setImage(message.author.avatarURL)
      message.channel.send(embed)
    }
});

//SAY
client.on('message', message => {
  let args = message.content.split(" ").slice(1);
 
  if(message.content.startsWith("$say"))  {
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
    message.channel.sendEmbed(embed);
 
     }
 
});

//8BALL
client.on('message', message => {
var  r4 = [
    "Yes",
    "No",
    "Nu stiu",
    "Idk?"
  ]
  
if(message.content.startsWith("$8ball")) {
    message.channel.sendMessage(r4[Math.floor(Math.random() * r4.length)]);
 
     }
 
});


client.login('NTA1MDU5MjQ1NDkwOTYyNDQz.DrTS4g.UNWXiMezDPMoKzb17OPP68SxBYU');

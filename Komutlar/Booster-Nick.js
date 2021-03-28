const Discord = require("discord.js");

exports.run = async (client, message, args, ayar, emoji) => {


    if(!message.member.roles.cache.has("Booster Rol ID")) return message.channel.send(`Komutu kullanabilmek için Sunucuya **Takviye** yapmalısın :x:`) 
    if(message.channel.id !== "Komutun Kullanılacağı ID") return message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag,  message.author.avatarURL({dynamic: true}))
.setColor("BLACK")
.setDescription(`Bu komutu sadece <#${KomutunKullanılacağıID}> kanalın da kullanabilirsin.`))

  let boosternick = args.slice(0).join(' ')
  if(!boosternick) return message.reply("Yeni adını girmelisin.").then( a=> a.react("Iptal Emoji ID"))
  message.member.setNickname(`TAGINIZ ${boosternick}`)
    const cubbeli = new Discord.MessageEmbed()
    .setAuthor(message.author.tag,  message.author.avatarURL({dynamic: true}))
    .setColor("BLACK")
    .setDescription(`${member} kişisinin ismi \`${boosternick}\` olarak değiştirildi!`) 
    message.channel.send(cubbeli)
    message.react("Onay Emoji ID");
}

exports.conf = {
    name: "Booster",
    aliases: ["booster"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'me', 
    description: '',
    usage: ''
};
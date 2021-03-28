const Discord = require("discord.js");
const ayarlar = require('./ayarlar.json')
const client = global.client;
const logs = require('discord-logs');
logs(client);

client.on('guildMemberBoost', (member) => {

  let sunucuID = ("Sunucu ID")
  let kanalID = ("Mesajın Atılacağı Kanal ID")
  let boostrol = ("Booster Rol ID")

  let boost = client.guilds.cache.get(sunucuID).premiumSubscriptionCount
  let tier = client.guilds.cache.get(sunucuID).premiumTier

  const cubbeli = new Discord.MessageEmbed()
.setColor("#ff66f0").setDescription(`<@${member.user.id}> Sunucumuza Boost Bastı

Sunucunun Güncel Boost Seviyesi : \`${tier}\` 
Sunucunun Güncel Boost Sayısı   : \`${boost}\``)
client.channels.cache.get(kanalID).send(cubbeli);});


client.on('guildMemberUnBoost', (member) => {
  let sunucuID = ("Sunucu ID")
  let kanalID = ("Mesajın Atılacağı Kanal ID")
  let boostrol = ("Booster Rol ID")

  let boost = client.guilds.cache.get(sunucuID).premiumSubscriptionCount
  let tier = client.guilds.cache.get(sunucuID).premiumTier

  const cubbeli = new Discord.MessageEmbed()
.setColor("#ff66f0").setDescription(`<@${member.user.id}> Sunucumuzdaki Boostu Çekti

Sunucunun Güncel Boost Seviyesi : \`${tier}\` 
Sunucunun Güncel Boost Sayısı   : \`${boost}\``)
client.channels.cache.get(kanalID).send(cubbeli);});


client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {
  let sunucuID = ("Sunucu ID")
  let kanalID = ("Mesajın Atılacağı Kanal ID")
  let boostrol = ("Booster Rol ID")

  let boost = client.guilds.cache.get(sunucuID).premiumSubscriptionCount
  let tier = client.guilds.cache.get(sunucuID).premiumTier
  const cubbeli = new Discord.MessageEmbed()
.setColor("#ff66f0").setDescription(`Sunucumuz ${tier} Seviyesine Yükseldi

Sunucunun Güncel Boost Seviyesi : \`${tier}\` 
Sunucunun Güncel Boost Sayısı   : \`${boost}\``)
client.channels.cache.get(kanalID).send(cubbeli);});


client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {
  let sunucuID = ("Sunucu ID")
  let kanalID = ("Mesajın Atılacağı Kanal ID")
  let boostrol = ("Booster Rol ID")

  let boost = client.guilds.cache.get(sunucuID).premiumSubscriptionCount
  let tier = client.guilds.cache.get(sunucuID).premiumTier
  const cubbeli = new Discord.MessageEmbed()
.setColor("ff66f0").setDescription(`Sunucumuzun ${tier} Seviyesine Düştü

Sunucunun Güncel Boost Seviyesi : \`${tier}\` 
Sunucunun Güncel Boost Sayısı   : \`${boost}\``)
client.channels.cache.get(kanalID).send(cubbeli);});
client.login(ayarlar.token)
fix = '#';(`Logged in as ${client.user.tag}!`);
});




client.on('message', (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'quran 1')) {
        let codes = message.content.split(' ').slice(1);
        let num;
        if(!codes[0] || isNaN(codes[0])) num = 1
        else num 
        // Embed Of Quran
        let embed = new Discord.RichEmbed()
        .setAuthor("Quran | القرآن", client.user.displayAvatarURL)
        .setTitle("صفحات القرآن الكريم")
        .setImage(getURLCodes(num))
        .setFooter(getFooterCodes(num))
        // Reactions
        let l = '⬅';
        let p = '⏹';new paste 


Untitled
 A GUEST   APR 30TH, 2019   70  NEVER

Not a member of Pastebin yet? Sign Up, it unlocks many cool features!
rawdownloadreport 1.98 KB
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-";
client.on("message", message => {
    var prefix ="-";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**")
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(`${args}\n ${m}`);
            });new paste 


Untitle
 A GUEST   APR 30TH, 2019   70  NEVER

Not a member of Pastebin yet? Sign Up, it unlocks many cool features!
rawdownloadreport 1.98 KB
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-";
client.on("message", message => {
    var prefix ="-"
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
   
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(`${args}\n ${m}`);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)  
            .setTitle('✅| جاري ارسال رسالتك ')
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.gu
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });
 
client.on("message", message => {
 
            if (message.content.startsWith(prefix + "bco")) {ث
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`);
 message.delete();
};    
});
 
 
   client.on("ready", () => {
client.user.setGame(`Abed4Gaming#0022 2 buy a bot`,"http://twitch.tv/darkyex")
 
    });
   
    client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
RAW Paste Dat
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)  
            .setTitle('✅| جاري ارسال > m.json())
        .then(async res => {
            let { verses } = res;
            let output = "";
 
            verses.forEach(async verse => {
               await (output += `\n` + verse.text);
            });
           
           
            let messages = [];
            let index = 0;
            let end = 1950;
           
            for(let i = 0; i < output.length; i++) {
                await messages.push(output.slice(index, end));
               
                await (index+=1950);
                await (end+=1950);
               
                if(output.length < end.length) break;
            }
           
            let counter = 0;
            let msg = await message.channel.send(messages[counter]);
       
            let left = await msg.react('⬅');
            let right = await msg.react('➡');
       
            let collector = await msg.createReactionCollector((reaction, user) => user.id === message.author.id, { time: 15000 });
       
            collector.on('collect',async collected => {
                let emoji = collected.emoji.name;
                let reaction = collected.emoji.name === "⬅" ? left : right;
                await reaction.remove(message.author).catch(e => {});
                if(emoji === "➡") {
                    if(counter >= 1) {
                        counter = 0;
                        msg.edit(messages[counter]);
                    } else if(counter <= 0) {
                        counter = 1;
                        msg.edit(messages[counter]);
                    }
                } else if(emoji === "⬅") {
                    if(counter >= 1) {
                        counter = 0;
                        msg.edit(messages[counter]);
                    } else if(counter <= 0) {
    

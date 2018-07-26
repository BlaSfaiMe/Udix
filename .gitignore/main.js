const Discord = require('Discord.js');

var bot = new Discord.Client();
var prefix = ("u")

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'prefix u - Udix', type: 0}});
    console.log("Udix est prêt !")
});

bot.login(process.env.TOKEN);

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "règlement📚").send(`:smiley: ${member.user.username} viens de rejoindre le serveur !`)
})

//switch (args[0].toLowerCase()){

    //case "kick":

    //if(!message.channel.permissionFor(message.member).hasPermission("KICK_MEMBERS")){
        //message.reply("Tu n'a pas la permission de kick un membre du serveur !")
    //}else{
        //var member = message.mention.member.firsts();
        //console.log(memberkick)
        //console.log(message.guild.member(memberkick).bannable)
        //if(!member){
            //message.reply("Soit tu t'es trompé, soit l'utilisateur n'existe pas !");
        //}else{
            //if(!member.kickable){
                //message.reply("Tu ne peut pas kick cet utilisateur !")
            //}else{
                //member.kick().then((member) => {
                //message.channel.send(`${member.displayName} a bien été kick ! :joy:`);
            //}).catch(() => {
                //message.channel.send("Kick refusé !")
        //})
    //}

    //break;

    //case "ban":

    //if(!message.channel.permissionFor(message.member).hasPermission("BAN_MEMBERS")){
        //message.reply("Tu n'a pas la permission de bannir un membre du serveur !")
    //}else{
        //var membeban = message.mention.member.firsts();
        //console.log(memberban)
        //console.log(message.guild.member(memberban).bannable)
        //if(!memberban){
            //message.reply("Soit tu t'es trompé, soit l'utilisateur n'existe pas !");
        //}else{
            //if(!member.bannable){
                //message.reply("Tu ne peut pas ban cet utilisateur !")
            //}else{
                //member.ban().then((member) => {
                //message.channel.send(`${member.displayName} a bien été ban ! :joy:`);
            //}).catch(() => {
                //message.channel.send("Ban refusé !")
        //})
    //}

    //break;
//}

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong")
        console.log('ping pong')
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#00e676')
            .addField("Commande du Bot Udix", "-**u**__help__ : affiche les commandes du Bot Udix\n-**u**__ping__ : reponds pong")
            .setFooter("Udix, un bot par BlaSfaiMe")
        message.channel.sendEmbed(help_embed);
        //message.channel.send("voici la page d'aide\n **u**_help_ pour afficher les **commandes**");
        console.log("Help demandé")
    }
});

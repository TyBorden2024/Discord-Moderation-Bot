const { slashcommandbuilder, EmbedBuilder, permissionsbitfield } = require("discord.js")

module.exports = {
    date: new slashcommandbuilder()
    .setName("createinvite")
    .setDescription('Create an invite for your guild')
    .addChanneloption(option => option.setname('channel').setdescription('The channel to create the invite in').setRequired(false))
    .addIntegeroption(option => option.setname('max_age').setdescription('The max age of the invite in seconds').setRequired(false))
    .addIntegeroption(option => option.setname('max_uses').setdescription('The max uses of the invite').setRequired(false))
    .addStringoption(option => option.setname('reason').setdescription('The reason for the invite creation').setRequired(false)),
    async execute(interaction) {

        if (!interaction.member.permissions.has(permissionsbitfield.Flags.CreateInstantInvite)) return interaction.reply({ content: 'You do not have permission to create an invite', ephemeral: true })
            
        const { option  } = interaction 
        const channel = option.getChannel('channel') || interaction.channel
        let max_age = option.getInteger('max_age') || 0;
        let max_uses = option.getInteger('max_uses') || 0;
        let reason = option.getString('reason') || 'No reason provided';
        const invite = await channel.createInvite({ maxAge: max_age, maxUses: max_uses, reason: reason })
         
        if (macAge ==0) maxAge === 'infinity'
        if (maxUses ==0) maxUses === 'infinity'
        const embed = new EmbedBuilder()
        .setColor('Blurple')
        .setTitle('⚖️ I have created your invite link!')
        .addFields({ name: '🔗 Invite Link', value: `https://discord.gg/${invite.code}` OR \ `${invite.code}`\``})
        .addFields({ name: `📜 Invite Channel`, value `*${channels}*`})
        .addFields({ name: `👩‍👧‍👦 Max Uses`, value: `\`${maxUses}\`` })
        .addFields({ name: `⏳ Max Age`, value: `\`${maxAge}\`` })
        .setDescription(`You created this invite for: *${reason}*!`)
        .setTimestamp()
        .setFooter({ test: `Invite Generated` })



        await.interaction.reply({ embeds: [embed], ephemeral: true });
    }
}
const path = require('path')

const { joinVoiceChannel, createAudioPlayer, createAudioResource, entersState, VoiceConnectionStatus } = require('@discordjs/voice')

const joinChannel = function(channel){
    const player = createAudioPlayer();
    const stringSong = path.join(process.cwd(), 'resources', 'scoobyDooOpening.mp3')
    const resource = createAudioResource(stringSong)
    player.play(resource)
    const connection = joinVoiceChannel({
        channelId: channel.id,
	    guildId: channel.guild.id,
	    adapterCreator: channel.guild.voiceAdapterCreator
    })
    entersState(connection, VoiceConnectionStatus.Ready, 30e3)
    connection.subscribe(player)
}

module.exports = joinChannel
const axios = require('axios')

module.exports = {
command: "servermc",
alias: [ "mc" ],
category: ["search"],
    settings: {
    limit: true,
  },
description: "Cek IP Server Minecraft",
loading: true,
async run(m, { sock, text }) {

const args = m.args

if(!text) throw `Masukan Nama Ip Server Nya
Contoh\n.servermc <ip> java\n.servermc <ip> bedrock`

try {
if (args[1] === 'java' || args[1] === 'Java' || args[1] === 'JAVA') {
const a = await axios.get('https://api.mcsrvstat.us/bedrock/3/' + args[0]).then(x => x.data)

if (jav === 0) {
m.reply("Maaf Server Yang Anda Search Ga Ketemu....")
}

let capt = `⏤͟͟͞͞╳── *[ sᴇʀᴠᴇʀᴍᴄ - ᴊᴀᴠᴀ ]* ── .々─ᯤ\n`
capt += `│    =〆 ɪᴘ: ${jav.hostname}\n`
capt += `│    =〆 ᴘᴏʀᴛ: ${jav.port}\n`
capt += `│    =〆 ᴠᴇʀsɪ: ${jav.version}\n`
capt += `│    =〆 ᴏɴʟɪɴᴇ: ${jav.online}\n`
capt += `│    =〆 ᴘʟᴀʏᴇʀ: ${jav.players.online} \\ ${jav.players.max}\n`
capt += `⏤͟͟͞͞╳────────── .✦`

m.reply(capt)

} else if (args[1] === 'bedrock' || args[1] === 'Bedrock' || args[1] === 'BEDROCK') {

const bed = await axios.get('https://api.mcsrvstat.us/bedrock/3/' + args[0]).then(x => x.data)


if (bed === 0) {
m.reply("Maaf Server Yang Anda Search Ga Ketemu....")
}

let capt = `⏤͟͟͞͞╳── *[ sᴇʀᴠᴇʀᴍᴄ - ʙᴇᴅʀᴏᴄᴋ ]* ── .々─ᯤ\n`
capt += `│    =〆 ɪᴘ: ${bed.hostname}\n`
capt += `│    =〆 ᴘᴏʀᴛ: ${bed.port}\n`
capt += `│    =〆 ᴠᴇʀsɪ: ${bed.version}\n`
capt += `│    =〆 ᴏɴʟɪɴᴇ: ${bed.online}\n`
capt += `│    =〆 ᴘʟᴀʏᴇʀ: ${bed.players.online} \\ ${bed.players.max}\n`
capt += `⏤͟͟͞͞╳────────── .✦`

m.reply(capt)
}

} catch (eror) {
 m.reply("maaf error....")
}

}
}
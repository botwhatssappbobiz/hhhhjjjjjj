const yts = require('yt-search')

module.exports = {
command: "ytsearch",
alias: [ "yts" ],
category: ["search"],
  settings: {
    limit: true,
  },
description: "Search Mau Drama",
loading: true,
async run(m, { sock, Func, text }) {

if (!text) throw 'cari nama yang pengen search contoh .ytsearch opening brutal legends fase 4'

const result = await yts.search(text)

if (result === 0) {
 m.reply('maaf yang anda search gada silahkan coba lagi....')
}

let no = 1
let capyt = `⏤͟͟͞͞╳── *[ sᴇᴀʀᴄʜ ʏᴛ ]* ── .々─ᯤ\n\n`
for (let i of result.all) {
capyt += `⏤͟͟͞͞╳── *[ ${no++} ]* ── .々─ᯤ\n`
capyt += `│    =〆 ᴛɪᴛʟᴇ: ${i.title}\n`
capyt += `│    =〆 ɪᴅ: ${i.videoId}\n`
capyt += `│    =〆 ᴀɢᴏ: ${i.ago}\n`
capyt += `│    =〆 ᴀᴜᴛʜᴏʀ: ${i.author.name}\n`
capyt += `│    =〆 ᴅᴇsᴄ: ${i.description}\n`
capyt += `│    =〆 ᴛɪᴍᴇsᴛᴀᴍᴘ: ${i.timestamp}\n`
capyt += `│    =〆 ᴠɪᴇᴡ: ${i.views}\n`
capyt += `│    =〆 ᴜʀʟ: ${i.url}\n`
capyt += `⏤͟͟͞͞╳────────── .✦\n\n`
}
capyt += `⏤͟͟͞͞╳────────── .✦`

await m.reply({ image: { url: result.all[0].thumbnail }, caption: capyt })

}
}
const moment = require("moment-timezone");
const axios = require('axios');
const fs = require("node:fs");
const path = require("node:path");
const process = require('process')
const { exec, spawn, execSync } = require('child_process');
const child_process = require('child_process')
const os = require('os')
const speed = require('performance-now')
const osu = require('node-os-utils')

module.exports = {
    command: "menu",
    alias: ["menu", "help"],
    category: ["main"],
    description: "Menampilkan menu bot",
    loading: true,
    async run(m, { sock, plugins, config, Func }) {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(db.list().user).length
const xmenu_oh = `ʜɪ ${m.pushName} , ɪ ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ sʏsᴛᴇᴍ ( ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ). ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴘ ᴛᴏ ᴅᴏ sᴏᴍᴇᴛʜɪɴɢ sᴇᴀʀᴄʜ ᴀɴᴅ get ᴅᴀᴛᴀ ᴏʀ ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟʏ ᴛʜʀᴏᴜɢʜ ᴡʜᴀᴛsᴀᴘᴘ, 

⏤͟͟͞͞╳── *[ ɪɴғᴏ - ᴜsᴇʀ ]* ── .々─ᯤ
│    =〆 ɴᴀᴍᴇ: ${m.pushName}
│    =〆 ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
│    =〆 ʟɪᴍɪᴛ: ${db.list().user[m.sender].limit}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ ʙᴏᴛ - ɪɴғᴏ ]* ── .々─ᯤ
│    =〆 ʀᴜɴᴛɪᴍᴇ: ${runtime}
│    =〆 ᴛʏᴘᴇ: ᴄᴀsᴇ x ᴘʟᴜɢɪɴ
│    =〆 ᴜsᴇʀ: ${totalreg}
│    =〆 ᴍᴏᴅᴇ: ${sock.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
│    =〆 ᴘʀᴇғɪx: ${m.prefix}
│    =〆 ᴅᴀᴛᴇ: ${date}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ ᴘᴇɴᴛᴜɴᴊᴜᴋ ]* ── .々─ᯤ
│    =〆 .ᴀʟʟᴍᴇɴᴜ ᴋᴀʟᴏ ᴍᴀᴜ ᴋᴇ ᴍᴇɴᴜ
⏤͟͟͞͞╳────────── .✦

Kalau Error Bisa Hubungi Ke .owner gass`

const resize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}

let deku = fs.readFileSync('./image/ftdoc.jpg')
let get = await resize(deku, 100, 100)
await sock.sendMessage(m.cht, {
  document: fs.readFileSync('./image/doc.txt'), fileName: `${botname} ${version}`, mimetype: 'image/null', fileLength: 0, pageCount: '', jpegThumbnail: get,
  caption: xmenu_oh,
  footer: ownername,
  buttons: [
  {
    buttonId: ".allmenu", 
    buttonText: {
      displayText: 'Allmenu'
    }
  }, {
    buttonId: ".owner", 
    buttonText: {
      displayText: "Creator"
    }
  }
],
  viewOnce: true,
  headerType: 6,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: `々 ${ownername2} | ${botname}`,
      mediaType: 1,
      previewType: 1,
      body: `々 ${ownername2}`,
      //previewType: "PHOTO",
      thumbnail: fs.readFileSync('./image/YutaOkkotsu.jpg'),
      renderLargerThumbnail: true,
      mediaUrl: linkgc,
      sourceUrl: linkgc,
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Menu By: ${ownername}`,
    }
  }
}, { quoted: m });

await m.reply({ audio: { url: 'https://files.catbox.moe/s7avpq.mp3' }, mimetype: 'audio/mpeg', ptt: true })

}
}
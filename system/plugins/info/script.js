const fs = require('node:fs')

module.exports = {
  command: "script",
  alias: ["sc", "scbot"],
  category: ["info"],
  description: "Dapatkan Script bot secara gratis",
  async run(m, { sock, Func }) {
  let tekssc = `⏤͟͟͞͞╳── *[ sᴄ ʏᴜᴛᴀ-ʙᴏᴛᴢ ᴠᴇʀ2 ]* ── .々─ᯤ
│    =〆 ᴄᴀsᴇ x ᴘʟᴜɢɪɴ
│    =〆 ʙᴀsᴇ ᴀxᴇʟ-ɴᴇᴛᴡᴏʀᴋ
│    =〆 ғɪᴛᴜʀ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴀᴅᴀ
│    =〆 ғɪᴛᴜʀ sᴇᴀʀᴄʜ ᴀᴅᴀ
│    =〆 ғɪᴛᴜʀ ᴀɴɪᴍᴇ ᴀᴅᴀ
│    =〆 ᴅʟʟ ᴀᴅᴀ
│    =〆 ʀᴇᴍᴀᴋᴇ: ᴅᴇᴋᴜɢᴀɴᴢ
│    =〆 ᴄʜ:
│    =〆 https://whatsapp.com/channel/0029VadFS3r89inc7Jjus03W
⏤͟͟͞͞╳────────── .✦`

m.reply({
  image: fs.readFileSync('./image/YutaOkkotsu.jpg'),
  caption: tekssc,
  contextInfo: {
    mentionedJid: [m.sender], 
      forwardingScore: 999,
       isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: saluran,
        newsletterName: `Script By: ${ownername}`,
        serverMessageId: 143
      }
     }
   })
  },
};

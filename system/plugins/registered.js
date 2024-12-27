const fs = require('node:fs')

module.exports = {
    command: "register", //- Nama fitur nya
    alias: ["daftar"], //- Short cut command
    category: ["main"], //- Kategori Fitur 
    settings: {
        owner: false, //-  Apakah Fitur ini khusus owner ?
        group: false, // - Apakah Fitur ini khusus group ?
     },
    description: "Register Dan Daftar", //- Penjelasan tentang fitur nya
    loading: true, //- Ingin menambahkan loading messages ?
 async run(m, { sock, Func, Scraper, text, config }) {
  const { createHash } = require('crypto')
  let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
  let namae = sock.getName(m.sender)
  let user = db.list().user[m.sender]
  if (user.register === true) return m.reply(`Kamu Sudah Ter daftar Di Database, Apa Kamu Ingin Mendaftar Ulang? *.unreg`) 
  if (!Reg.test(text)) return m.reply(`Masukan Nama.UmurKamu\nContoh: .daftar Deku.15`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply('Nama Tidak Boleh Kosong') 
  if (!age) return m.reply('Umur Tidak Boleh Kosong') 
  age = parseInt(age)
  if (age > 30) return m.reply('WOI TUA (。-`ω´-)') 
  if (age < 5) return m.reply('Halah dasar bocil') 
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
    let capt = `┏⪻── *[ ᴅ ᴀ ғ ᴛ ᴀ ʀ - s ᴜ ᴄ ᴄ ᴇ s s ]* ──⪼┓\n`
    capt += `│    =〆  ɴᴀᴍᴇ : ${name}\n`
    capt += `│    =〆  ᴜᴍᴜʀ : ${age} ᴛᴀʜᴜɴ\n`
    capt += `│    =〆  ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}\n`
    capt += `│    =〆  ɴᴏᴍᴏʀ sᴇʀɪᴀʟ : ${sn}\n`
    capt += `│    =〆  ᴄʀᴇᴀᴛᴇ ʙʏ: ʟᴇᴏᴏxᴢʏ`
    capt += `⏤͟͟͞͞╳────────── .✦`    
let yuta = {
  text: capt,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      mediaType: 1,
      previewType: 1,
      body: linkgc,
      //previewType: "PHOTO",
      thumbnail: fs.readFileSync('./image/YutaOkkotsu.jpg'),
      renderLargerThumbnail: true,
      mediaUrl: linkgc,
      sourceUrl: linkgc
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Register By: ${ownername}`,
    }
  }
};
await sock.sendMessage(m.cht, yuta, { quoted: m });
}
}
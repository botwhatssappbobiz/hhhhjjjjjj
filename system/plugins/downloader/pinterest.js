const axios = require('axios')

module.exports = {
command: "pinterest",
alias: ["pin"],
category: ["downloader"],
  settings: {
    limit: true,
  },
description: "Search Foto Pinterest",
loading: true,
async run(m, { sock, Func, text, Scraper }) {
if (!text) throw 'Nama Foto Pengen Di Cari'

try {
 const pinterestsrc = await Scraper.pinterestsearch.search(text)

let pickget = pinterestsrc[Math.floor(Math.random() * pinterestsrc.length)]
  await sock.sendMessage(m.cht, {
  image: {
  url: pickget.image
  },
  caption: `-- *[ Search Pinterest ]*\n\n> caption: ${pickget.caption}\n\n> Nama: ${pickget.fullname} | followers: ${pickget.followers}\n\nFoto Download: ${pickget.image}\n\nurl: ${pickget.source}`,
  contextInfo: {
  mentionedJid: [m.sender], 
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
  newsletterJid: saluran,
  newsletterName: `Pinterest By: ${ownername}`,
  serverMessageId: 143
  }
  }
  }, { quoted: m })
} catch (err) {
try {
const a = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`).then(a => a.data.resource_response.data.results)

const v = a.map(v => v.images.orig.url)

  let pickget = v[Math.floor(Math.random() * v.length)]
  await sock.sendMessage(m.cht, {
  image: {
  url: pickget
  },
  caption: `Nih Nama: ${text}`,
  contextInfo: {
  mentionedJid: [m.sender], 
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
  newsletterJid: saluran,
  newsletterName: `Pinterest By: ${ownername}`,
  serverMessageId: 143
  }
  }
  }, { quoted: m })

} catch (err) {
 m.reply('maaf error....')
}}

}
}
const yts = require("yt-search");
const axios = require('axios')
module.exports = {
  command: "play",
  alias: [],
  category: ["downloader"],
  settings: {
    limit: true,
  },
  description: "Cari video/musik dari YouTube",
  loading: true,
  async run(m, { sock, Scraper, Func, config, text }) {
  if (!text) throw "Nama Lagu Contoh .play wind breaker reido zettai";

  let convert = await yts({ search: text, hl: 'id', gl: 'ID' })
  let result = convert.all[0]

  if (result === 0) {
   m.reply('maaf ga ketemu...')
  }

  let hah = result.url;
  let deku = `⏤͟͟͞͞╳── *[ ᴘʟᴀʏ - ʏᴏᴜᴛᴜʙᴇ ]* ── .々─ᯤ\n`
  deku += `│    =〆 ᴛɪᴛʟᴇ: ${result.title}\n`
  deku += `│    =〆 ɪᴅ: ${result.videoId}\n`
  deku += `│    =〆 ᴅᴜʀᴀsɪ: ${result.timestamp}\n`
  deku += `│    =〆 ᴀɢᴏ: ${result.ago}\n`
  deku += `│    =〆 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ: ${result.description}\n`
  deku += `│    =〆 ᴜʀʟ: ${result.url}\n`
  deku += `⏤͟͟͞͞╳────────── .✦`
  
await sock.sendMessage(m.cht, {
  text: deku,
  contextInfo: {
  forwardingScore: 999,
  isForwarded: true,
  externalAdReply: {
  title: result.title,
  mediaType: 1,
  previewType: 1,
  body: `Durasi : ${result.timestamp} / View : ${result.views}`,
  thumbnailUrl: result.image,
  renderLargerThumbnail: true,
  mediaUrl: result.url,
  sourceUrl: result.url
  }
 }
}, { quoted: m })
  
try {
   const mp3 = await Scraper.SaveTube.mp3(result.url)
  await sock.sendMessage(m.cht, { audio: { url: mp3.link }, mimetype: 'audio/mpeg' }, { quoted: m })
    m.reply('Done ✅')
  } catch (err) {
  try {
   m.reply({ audio: { url: `https://ytdownloader.nvlgroup.my.id/audio?url=${result.url}&bitrate=128` }, mimetype: 'audio/mpeg' })
   m.reply('Done ✅')
   } catch (err) {
    m.reply('error' + err)
   }
 }

  }
};
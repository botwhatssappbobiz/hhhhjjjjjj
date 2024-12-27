const yts = require("yt-search");
const ytdl = require('ytdl-core')
const axios = require('axios')
module.exports = {
  command: "ytmp3",
  alias: ["yta", "ytaudio"],
  category: ["downloader"],
  settings: {
    limit: true,
  },
  description: "Cari video/musik dari YouTube",
  loading: true,
  async run(m, { sock, Scraper, Func, config, text }) {
  if (!text.includes('youtu')) throw "Link Contoh .ytmp3 <link>";

  const videoId = await ytdl.getURLVideoID(text)
  let result = await yts({ videoId: videoId, hl: 'id', gl: 'ID' })

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
   const mp3 = await Scraper.SaveTube.mp3(text)
  await sock.sendMessage(m.cht, { audio: { url: mp3.link }, mimetype: 'audio/mpeg' }, { quoted: m })
    m.reply('Done ✅')
  } catch (err) {
  try {
   m.reply({ audio: { url: `https://ytdownloader.nvlgroup.my.id/audio?url=${text}&bitrate=128` }, mimetype: 'audio/mpeg' })
   m.reply('Done ✅')
   } catch (err) {
    m.reply('error' + err)
   }
 }

  }
};
const axios = require("axios");
const yts = require('yt-search')
const ytdl = require('ytdl-core')
module.exports = {
  command: "ytmp4",
  alias: ["ytv", "ytvideo"],
  category: ["downloader"],
  description: "Download video dari link YouTube",
  settings: {
    limit: true,
  },
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
}, { quoted: m });

  let capt = ` =〆 ᴛɪᴛʟᴇ: ${result.title}\n`
  capt += ` =〆 ɪᴅ: ${result.videoId}\n`
  capt += ` =〆 ᴅᴜʀᴀsɪ: ${result.timestamp}\n`
  capt += ` =〆 ᴀɢᴏ: ${result.ago}\n`
  capt += ` =〆 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ: ${result.description}\n`
  capt += ` =〆 ᴜʀʟ: ${result.url}`

   try {
     const mp4 = await Scraper.SaveTube.mp4(text)

   await sock.sendMessage(m.cht, { video: { url: mp4.link }, caption: capt }, { quoted: m })
   } catch (err) {
  try {
   m.reply({ video: { url: `https://ytdownloader.nvlgroup.my.id/download?url=${result.url}&resolution=720` }, caption: capt })
   m.reply('Done ✅')
  } catch (err) {
    m.reply('error' + err)
   }
 }

 }
}
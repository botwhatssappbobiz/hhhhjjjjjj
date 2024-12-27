const axios = require('axios');
const cheerio = require('cheerio');
const FormData = require('form-data');
const canvafy = require('canvafy')

module.exports = {
  command: "spotify",
  alias: ["sps", "spotifys", "spotifysearch"],
  category: ["downloader"],
  settings: {
    limit: true,
  },
  description: "Mencari/download musik dari Spotify",
  loading: true,
  async run(m, { sock, Func, Scraper, text }) {
    if (!text)
      throw `Nama Lagu Pengen Di Search?`;

    if (!text)
      throw `Nama Lagu Pengen Di Search?`;

let data = await Scraper.spotify.search(text);
let songd = await Scraper.spotify.download(data[0].url)

let anuu = `╭──── *[ sᴘᴏᴛɪғʏ - ᴅᴏᴡɴʟᴏᴀᴅ ]* ──々\n`
anuu += `│ =〆 ᴊᴜᴅᴜʟ : ${data[0].title}\n`
anuu += `│ =〆 ᴀʀᴛɪs : ${data[0].artist}\n`
anuu += `│ =〆 ʟɪɴᴋ: ${data[0].url}\n`
anuu += `│ =〆 ᴅᴜʀᴀsɪ: ${data[0].duration}\n`
anuu += `╰─々`
const p = await new canvafy.Spotify()
  .setTitle(data[0].title)
  .setAuthor("Spotify Downloader")
  .setTimestamp(40, 100)
  .setOverlayOpacity(0.8)
  .setBorder("#fff", 0.8)
  .setImage(songd.data.thumbnail)
  .setBlur(3)
  .build();

   await sock.sendMessage(m.cht, { image: p, caption: anuu }, { quoted: m })

await sock.sendMessage(m.cht, { audio: { url: songd.data.url }, mimetype: 'audio/mpeg' }, { quoted: m })

  },
};
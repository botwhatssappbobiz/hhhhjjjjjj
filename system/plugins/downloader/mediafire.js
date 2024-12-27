const axios = require('axios')

module.exports = {
  command: "mediafire",
  alias: ["mf", "mfdl"],
  category: ["downloader"],
  setings: {
    limit: true,
  },
  description: "Unduh link MediaFire",
  loading: true,
  async run(m, { sock, Scraper, Func, text }) {
if (!text.includes('mediafire')) throw 'link MediaFire nya mana kak?'

try {
const ye = await axios.get('https://restapii.rioooxdzz.web.id/api/mediafire?url=' + text).then(a => a.data)

      let deku = `⏤͟͟͞͞╳── *[ ᴅᴏᴡɴʟᴏᴀᴅ - ᴍғ ]* ── .々─ᯤ\n`
      deku += `│    =〆 ғɪʟᴇɴᴀᴍᴇ: ${ye.data.response.filename}\n`
     deku += `│    =〆 ᴜᴘʟᴏᴀᴅᴇᴅ: ${ye.data.response.uploaded}\n`
     deku += `│    =〆 ᴛʏᴘᴇ: ${ye.data.response.type}\n`
     deku += `│    =〆 sɪᴢᴇ: ${ye.data.response.size}\n`
     deku += `│    =〆 ᴇxᴛ: ${ye.data.response.ext}\n`
     deku += `│    =〆 ᴅᴏᴡɴʟᴏᴀᴅ: ${ye.data.response.download}\n`
     deku += `⏤͟͟͞͞╳────────── .✦`

     return m.reply({ document: { url: ye.data.response.download }, mimetype: ye.data.response.mimetype, fileName: ye.data.response.filename, caption: deku })
   } catch (error) {
    try {
    const ye = await axios.get('https://server.apisanz.my.id/download/mediafire?text=' + text).then(a => a.data)
      let deku = `⏤͟͟͞͞╳── *[ ᴅᴏᴡɴʟᴏᴀᴅ - ᴍғ ]* ── .々─ᯤ\n`
       deku += `│    =〆 ғɪʟᴇɴᴀᴍᴇ: ${ye.data.filename}\n`
 deku += `│    =〆 ᴜᴘʟᴏᴀᴅᴇᴅ: ${ye.data.created}\n`
       deku += `│    =〆 ᴛʏᴘᴇ: ${ye.data.type}\n`
       deku += `│    =〆 sɪᴢᴇ: ${ye.data.size}\n`
       deku += `│    =〆 ᴅᴏᴡɴʟᴏᴀᴅ: ${ye.data.media}\n`
      deku += `⏤͟͟͞͞╳────────── .✦`

      return m.reply({ document: { url: ye.data.media }, mimetype: ye.data.media, fileName: ye.data.filename, caption: deku })
     } catch (error) {
       m.reply('maaf error bisa di coba lagi...')
    }
   }
  }
};
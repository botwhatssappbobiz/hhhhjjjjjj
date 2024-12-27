const { writeExif } = require(process.cwd()+"/lib/sticker")
const axios = require('axios')

module.exports = {
    command: "quote", //- Nama fitur nya
    alias: ["qc"], //- Short cut command
    category: ["main"], //- Kategori Fitur 
    settings: {
        owner: false, //-  Apakah Fitur ini khusus owner ?
        group: false, // - Apakah Fitur ini khusus group ?
     },
    description: "buat sticker qc", //- Penjelasan tentang fitur nya
    loading: true, //- Ingin menambahkan loading messages ?
 async run(m, { sock, Func, Scraper, text, config }) {

if (!text) return m.reply(`*( ${botname} )* Contoh .qc ohayo bg`)
try {
 avatar = await sock.profilePictureUrl(m.sender, 'image')
} catch {
 avatar = 'https://i.ibb.co/2WzLyGk/profile.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#2E4053",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": avatar
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
}
    const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
    });
    const buffer = Buffer.from(res.data.result.image, 'base64');
    const rest = { 
        status: "200", 
        creator: "AdrianTzy",
        result: buffer
    };
        let sticker = await writeExif(
          {
            mimetype: "image",
            data: rest.result,
          },
          {
            packName: config.sticker.packname,
            packPublish: config.sticker.author,
          },
        );
        await m.reply({ sticker });
      }
  }
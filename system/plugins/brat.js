const { writeExif } = require(process.cwd()+"/lib/sticker");
const axios = require('axios')

module.exports = {
    command: "brat", //- Nama fitur nya
    alias: ["br"], //- Short cut command
    category: ["main"], //- Kategori Fitur 
    settings: {
        owner: false, //-  Apakah Fitur ini khusus owner ?
        group: false, // - Apakah Fitur ini khusus group ?
     },
    description: "buat sticker brat", //- Penjelasan tentang fitur nya
    loading: true, //- Ingin menambahkan loading messages ?
 async run(m, { sock, Func, Scraper, text, config }) {

if (!text) return m.reply('masukan text nya contoh .brat2 oi')
        const url = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`;
        const response = await axios.get(url, {
            responseType: 'arraybuffer'
        });

            let sticker = await writeExif(
          {
            mimetype: "image",
            data: response.data,
          },
          {
            packName: config.sticker.packname,
            packPublish: config.sticker.author,
          },
        );

        await m.reply({ sticker });
}
}
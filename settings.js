const fs = require('node:fs');

const config = {
    owner: ["6283136099660","6282172589188"],
    name: "ʏᴜᴛᴀ-ᴏᴋᴋᴏᴛsᴜ-ʙᴏᴛᴢ",
    sessions: "sessions",
    sticker: {
      packname: "'〆 ʏᴜᴛᴀ-ᴏᴋᴋᴏᴛsᴜ-ʙᴏᴛᴢ",
      author: "ʙʏ: ᴅᴇᴋᴜ/ʟᴇᴏᴏxᴢʏ 〆"
    },
   messages: {
      wait: "*( Loading )* Tunggu Sebentar...",
      owner: "*( Denied )* Kamu bukan owner ku !",
      premium: "*( Denied )* Fitur ini khusus user premium",
      group: "*( Denied )* Fitur ini khusus group",
      botAdmin: "*( Denied )* Lu siapa bukan Admin group",
      grootbotbup: "*( Denied )* Jadiin Yuta-Botz admin dulu baru bisa akses",
   },
   database: "yuta-db",
   tz: "Asia/Jakarta"
}

module.exports = config

let file = require.resolve(__filename);
fs.watchFile(file, () => {
   fs.unwatchFile(file);
  delete require.cache[file];
});
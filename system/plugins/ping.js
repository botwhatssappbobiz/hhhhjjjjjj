const process = require('process')
const { exec, spawn, execSync } = require('child_process');
const child_process = require('child_process')
const os = require('os')
const speed = require('performance-now')
const nou = require('node-os-utils')
const fs = require('node:fs')
const { sizeFormatter } = require('human-readable')

module.exports = {
  command: "ping",
  alias: [ ],
  category: ["main"],
  description: "Periksa Status bot",
  loading: true,
  async run(m, { sock, config, Func }) {
  const more = String.fromCharCode(8206);
  const readmore = more.repeat(4001);

let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `⏤͟͟͞͞╳── *[ INFO SERVER ]* ── .々─ᯤ
│    =〆 ᴏs: ${tio}
│    =〆 ᴛʏᴘᴇ ᴏs: ${nou.os.type()}
⏤͟͟͞͞╳────────── .✦${readmore}
│
⏤͟͟͞͞╳── *[ RAM ]* ── .々─ᯤ
│    =〆 ᴛᴏᴛᴀʟ: ${formatp(os.totalmem())}
│    =〆 ᴅɪɢᴜɴᴀᴋᴀɴ: ${formatp(os.totalmem() - os.freemem())}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ PENYIMPANAN ]* ── .々─ᯤ
│    =〆 ᴛᴏᴛᴀʟ: ${tot.totalGb} GB
│    =〆 ᴅɪɢᴜɴᴀᴋᴀɴ: ${tot.usedGb} GB > ${tot.usedPercentage}%
│    =〆 ᴛᴇʀsᴇᴅɪᴀ: ${tot.freeGb} GB > ${tot.freePercentage}%
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Bot Start ]* ── .々─ᯤ
│    =〆 ᴘɪɴɢ: ${latensi.toFixed(4)} detik
│    =〆 ʀᴜɴᴛɪᴍᴇ: ${runtime(process.uptime())}
⏤͟͟͞͞╳────────── .✦
`

let deku = fs.readFileSync('./image/ftdoc.jpg')
let get = await resize(deku, 100, 100)
m.reply({
  document: fs.readFileSync('./image/doc.txt'), fileName: `ping bot`,  mimetype: 'image/null', fileLength: 0, pageCount: '', jpegThumbnail: get,
  caption: respon,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: `Testing Ping`,
      mediaType: 1,
      previewType: 1,
      body: `々 ${ownername2}`,
      //previewType: "PHOTO",
      thumbnail: fs.readFileSync('./image/YutaOkkotsu.jpg'),
      renderLargerThumbnail: true,
      mediaUrl: linkgc,
      sourceUrl: linkgc,
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Ping By: ${ownername}`,
    }
  }
})
}
};

function runtime(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

const formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

const resize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
const Jimp = require('jimp')
const fs = require('node:fs')
module.exports = {
command: "setppbot",
alias: [ ],
category: ["owner"],
    settings: {
    owner: true,
  },
description: "untuk Menganti PP bot wa",
loading: true,
async run(m, { sock, text }) {

const botNumber = await sock.decodeJid(sock.user.id)
const quoted = m.isQuoted ? m.quoted : m;
const args = m.args

if (!quoted) throw `Kirim/Balas Gambar Dengan Caption ${prefix + command}`
if (!/image/.test(quoted.msg.mimetype)) throw `Kirim/Balas Gambar Dengan Caption .setppbot`
if (/webp/.test(quoted.msg.mimetype)) throw `Kirim/Balas Gambar Dengan Caption .setppbot`

var medis = await sock.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await sock.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Success`)
} else {
var memeg = await sock.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Success`)
}

}
}

const generateProfilePicture = async (buffer) => {
	const jimp = await Jimp.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
	}
}
module.exports = {
    command: "tiktok2", //- Nama fitur nya
    alias: ["tt2", "ttdl2"], //- Short cut command
    category: ["downloader"], //- Kategori Fitur 
    settings: {
        owner: false, //-  Apakah Fitur ini khusus owner ?
        group: false, // - Apakah Fitur ini khusus group ?
        limit: true,
     },
    description: "Mendownload Tiktok Video And Audio", //- Penjelasan tentang fitur nya
    loading: true, //- Ingin menambahkan loading messages ?
 async run(m, { sock, Func, Scraper, text }) {

try {
if (!text.includes('tiktok')) return m.reply('link tiktok mana bang!?')

const hasil = await Scraper.ttsave.ttvideo(text)
const audio = await Scraper.ttsave.ttmp3(text)

let deku = `*⏤͟͟͞͞╳ [ Tiktok - Downloader ]*\n`
deku += `> ⏤͟͟͞͞╳ *Nama:* ${hasil.nickname}\n`
deku += `> ⏤͟͟͞͞╳ *Username:* ${hasil.username}\n`
deku += `> ⏤͟͟͞͞╳ *Usernameid:* ${hasil.uniqueId}\n`
deku += `> ⏤͟͟͞͞╳ *Views:* ${hasil.stats.plays}\n`
deku += `> ⏤͟͟͞͞╳ *Like:* ${hasil.stats.likes}\n`
deku += `> ⏤͟͟͞͞╳ *Komentar:* ${hasil.stats.comments}\n`
deku += `> ⏤͟͟͞͞╳ *Bagi:* ${hasil.stats.shares}\n`
deku += `⏤͟͟͞͞╳ `

m.reply({ image: { url: hasil.profilePic }, caption: deku })

if (hasil.dlink.nowm) {

let dekuu = `*⏤͟͟͞͞╳ [ Tiktok - Downloader ]*\n`
dekuu += `> ⏤͟͟͞͞╳ *Nama:* ${hasil.nickname}\n`
dekuu += `> ⏤͟͟͞͞╳ *Username:* ${hasil.username}\n`
dekuu += `> ⏤͟͟͞͞╳ *Usernameid:* ${hasil.uniqueId}\n`
dekuu += `> ⏤͟͟͞͞╳ *Views:* ${hasil.stats.plays}\n`
dekuu += `> ⏤͟͟͞͞╳ *Like:* ${hasil.stats.likes}\n`
dekuu += `> ⏤͟͟͞͞╳ *Komentar:* ${hasil.stats.comments}\n`
dekuu += `> ⏤͟͟͞͞╳ *Bagi:* ${hasil.stats.shares}\n`
dekuu += `> ⏤͟͟͞͞╳ *type:* ${hasil.type}\n`
dekuu += `⏤͟͟͞͞╳ `

await sock.sendMessage(m.cht, { video: { url: hasil.dlink.nowm }, caption: deku }, { quoted: m })
}

if (hasil.slides) {

let dekuu = `*⏤͟͟͞͞╳ [ Tiktok - Downloader ]*\n`
dekuu += `> ⏤͟͟͞͞╳ *Nama:* ${hasil.nickname}\n`
dekuu += `> ⏤͟͟͞͞╳ *Username:* ${hasil.username}\n`
dekuu += `> ⏤͟͟͞͞╳ *Usernameid:* ${hasil.uniqueId}\n`
dekuu += `> ⏤͟͟͞͞╳ *Views:* ${hasil.stats.plays}\n`
dekuu += `> ⏤͟͟͞͞╳ *Like:* ${hasil.stats.likes}\n`
dekuu += `> ⏤͟͟͞͞╳ *Komentar:* ${hasil.stats.comments}\n`
dekuu += `> ⏤͟͟͞͞╳ *Bagi:* ${hasil.stats.shares}\n`
dekuu += `> ⏤͟͟͞͞╳ *type:* ${hasil.type}\n`
dekuu += `⏤͟͟͞͞╳ `

for (let i of hasil.slides) {
await sock.sendMessage(m.cht, { video: { url: i.url }, caption: deku }, { quoted: m })
}
}

await m.reply({ audio: { url: audio.audioUrl }, mimetype: 'audio/mpeg' })

} catch (error) {
 m.reply('terjadi kesalahan' + error)
}

}
}
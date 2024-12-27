const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (m) => {
return`⏤͟͟͞͞╳── *[ Owner ]* ── .々─ᯤ
│    =〆  ${m.prefix}broadcast
│    =〆  ${m.prefix}delsesi
│    =〆  ${m.prefix}getplugin
│    =〆  ${m.prefix}plugin
│    =〆  ${m.prefix}join
│    =〆  ${m.prefix}scrape
│    =〆  ${m.prefix}sp
│    =〆  ${m.prefix}self
│    =〆  ${m.prefix}setppbot 
│    =〆  ${m.prefix}autoread
│    =〆 >
│    =〆 gz
│    =〆 $
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Downloader ]* ── .々─ᯤ
│    =〆  ${m.prefix}bstation
│    =〆  ${m.prefix}doodstream
│    =〆  ${m.prefix}facebook
│    =〆  ${m.prefix}instagram
│    =〆  ${m.prefix}play
│    =〆  ${m.prefix}pinterest
│    =〆  ${m.prefix}git
│    =〆  ${m.prefix}mediafire
│    =〆  ${m.prefix}twitter
│    =〆  ${m.prefix}spotify
│    =〆  ${m.prefix}tiktok
│    =〆  ${m.prefix}ttsearch
│    =〆  ${m.prefix}videy
│    =〆  ${m.prefix}ytmp3
│    =〆  ${m.prefix}ytmp4
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Anime ]* ── .々─ᯤ
│    =〆  ${m.prefix}samehadaku
│    =〆  ${m.prefix}otakudesu
│    =〆  ${m.prefix}otakudesulatest
│    =〆  ${m.prefix}livechart
│    =〆  ${m.prefix}zerochan
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Group ]* ── .々─ᯤ
│    =〆  ${m.prefix}demote
│    =〆  ${m.prefix}hidetag
│    =〆  ${m.prefix}totag
│    =〆  ${m.prefix}kick
│    =〆  ${m.prefix}linkgc
│    =〆  ${m.prefix}promote
│    =〆  ${m.prefix}evoke
│    =〆  ${m.prefix}setdesc
│    =〆  ${m.prefix}setnamegc
│    =〆  ${m.prefix}mute
│    =〆  ${m.prefix}setppgc
│    =〆  ${m.prefix}gcsetting
│    =〆  ${m.prefix}antilink
│    =〆  ${m.prefix}antilinkgc
│    =〆  ${m.prefix}antilinkch
│    =〆  ${m.prefix}antilinknumber
│    =〆  ${m.prefix}antitoxic
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Search ]* ── .々─ᯤ
│    =〆  ${m.prefix}wattpad
│    =〆  ${m.prefix}yts
│    =〆  ${m.prefix}mc
│    =〆  ${m.prefix}servermc
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Tools ]* ── .々─ᯤ
│    =〆  ${m.prefix}hd
│    =〆  ${m.prefix}remini
│    =〆  ${m.prefix}q
│    =〆  ${m.prefix}quoted
│    =〆  ${m.prefix}smeme
│    =〆  ${m.prefix}brat
│    =〆  ${m.prefix}qc
│    =〆  ${m.prefix}sticker
│    =〆  ${m.prefix}s
│    =〆  ${m.prefix}tourl
│    =〆  ${m.prefix}rvo
│    =〆  ${m.prefix}getpp
│    =〆  ${m.prefix}tourl
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Ai ]* ── .々─ᯤ
│    =〆  ${m.prefix}ai
│    =〆 Yuta
│    =〆 Deku
⏤͟͟͞͞╳────────── .✦`}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})